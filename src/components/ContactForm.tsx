"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const fieldClassName =
  "w-full rounded-lg border border-white/8 bg-canvas-2 px-4 py-3 text-sm text-white placeholder:text-muted transition-colors focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-negative">{message}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.success) {
    return (
      <div
        className="rounded-xl border border-positive/30 bg-positive/10 px-6 py-8 text-center"
        role="status"
      >
        <p className="text-base font-medium text-positive">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClassName}
            placeholder="Your name"
          />
          <FieldError message={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClassName}
            placeholder="you@example.com"
          />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className={fieldClassName}
          placeholder="What is this about?"
        />
        <FieldError message={state.errors?.subject} />
      </div>

      <div>
        <label htmlFor="body" className="mb-2 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="body"
          name="body"
          rows={6}
          required
          className={`${fieldClassName} resize-y min-h-[160px]`}
          placeholder="Tell us how we can help..."
        />
        <FieldError message={state.errors?.body} />
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-negative" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-brand-blue px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-[180ms] hover:-translate-y-px hover:bg-[#1a44c8] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
