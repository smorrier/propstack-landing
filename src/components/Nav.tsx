import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/learn", label: "Guides" },
  { href: "/#about", label: "About" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-100 border-b border-white/8 bg-midnight/92 backdrop-blur-2xl">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex h-[68px] items-center gap-4 md:gap-12">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="PropStack"
              width={214}
              height={54}
              className="h-10 w-auto md:h-[54px]"
              priority
            />
          </Link>
          <ul className="hidden flex-1 gap-8 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-auto shrink-0">
            <Button href={APP_URL} size="compact">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
