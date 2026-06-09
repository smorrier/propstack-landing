"use server";

import { CONTACT_EMAIL } from "@/lib/constants";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    body?: string;
  };
};

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  const errors: ContactFormState["errors"] = {};

  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!validateEmail(email)) errors.email = "Enter a valid email address.";
  if (!subject) errors.subject = "Subject is required.";
  if (!body) errors.body = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { ...initialState, errors };
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "PropStack <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `[Contact] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Something went wrong sending your message. Please try again.",
      };
    }
  } else {
    console.info("[contact]", { name, email, subject, body });
  }

  return {
    success: true,
    message: "Thanks for reaching out. We'll get back to you soon.",
  };
}
