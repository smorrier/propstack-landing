import { ContactForm } from "./ContactForm";
import { SectionHeader } from "./ui/SectionHeader";

export function ContactSection() {
  return (
    <section className="border-t border-white/8 bg-canvas py-24" id="contact">
      <div className="mx-auto max-w-[640px] px-6">
        <SectionHeader
          label="Contact"
          title="Get in touch"
          description="Have a question or feedback? Send us a message and we'll respond as soon as we can."
        />
        <div className="mt-12 rounded-2xl border border-white/8 bg-midnight p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
