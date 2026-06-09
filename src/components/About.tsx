import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";

const founders = [
  {
    name: "Michael Sedlezky",
    role: "Co-founder · Active real estate investor",
    quote:
      "After years of investing across multiple platforms, I found myself constantly juggling tools that didn't talk to each other. The data was scattered, the workflow was inconsistent, and nothing was built the way investors actually think. I wanted to consolidate everything into one space — and give investors the flexibility to actually work with their numbers.",
    image: "/michael-sedlezky.jpg",
    initials: null,
  },
  {
    name: "Sean Morrier",
    role: "Co-founder · Technical lead",
    quote:
      "When I purchased my first property, I was struck by how fragmented and overcomplicated the process was. There was no clear solution for investors who were just getting started. I wanted to change that — so I applied my technical background to the problem, combined it with Michael's hands-on real estate experience, and built the tool I wished had existed from day one.",
    image: "/sean-morrier.png",
    initials: null,
  },
];

export function About() {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader label="About PropStack" title="About Us" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex min-h-[280px] overflow-hidden rounded-2xl border border-white/8 bg-canvas"
            >
              {founder.image ? (
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={300}
                  height={280}
                  className="w-[42%] shrink-0 object-cover object-top"
                />
              ) : (
                <div className="flex w-[42%] shrink-0 items-center justify-center bg-gradient-to-br from-brand-teal to-[#0a6e65] text-[2rem] font-extrabold text-white/85">
                  {founder.initials}
                </div>
              )}
              <div className="flex flex-col justify-center px-6 py-7">
                <div className="mb-0.5 text-base font-bold text-white">
                  {founder.name}
                </div>
                <div className="mb-3.5 text-[0.8rem] text-brand-teal">
                  {founder.role}
                </div>
                <p className="text-[0.825rem] leading-[1.7] text-muted italic">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
