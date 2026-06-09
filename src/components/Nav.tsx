import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "Founders" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-100 border-b border-white/8 bg-midnight/92 backdrop-blur-2xl">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex h-[68px] items-center gap-12">
          <Link href="#" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Prop Stack"
              width={214}
              height={54}
              className="h-[54px] w-auto"
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
          <div className="ml-auto">
            <Button href={APP_URL}>Get started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
