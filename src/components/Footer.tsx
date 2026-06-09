import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";

const footerLinks = {
  Product: [
    { href: "#features", label: "Features" },
    { href: APP_URL, label: "Calculator" },
    { href: "#pricing", label: "Pricing" },
  ],
  Company: [
    { href: "#about", label: "About" },
    { href: "#about", label: "Founders" },
    { href: "#contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-canvas pt-15 pb-9">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.svg"
              alt="Prop Stack"
              width={214}
              height={44}
              className="h-11 w-auto"
            />
            <p className="mt-3 max-w-60 text-sm leading-normal text-muted">
              The all-in-one calculator and portfolio platform for serious real
              estate investors.
            </p>
            <p className="mt-3 text-[0.8rem] text-sage">propstack.ca</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-[0.8rem] font-bold tracking-[0.1em] text-muted uppercase">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-[0.8rem] text-muted sm:flex-row">
          <span>© 2026 PropStack. All rights reserved.</span>
          <span>Built for investors. Designed for trust.</span>
        </div>
      </div>
    </footer>
  );
}
