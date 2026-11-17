
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  X,
  Layers3,
  GraduationCap,
  Clock3,
} from "lucide-react";

import { inter } from "@/lib/fonts";

const comparisons = [
  {
    id: 1,
    title: "HMTWAY.ACADEMY",
    icon: Layers3,
    recommended: true,
    features: [
      "Hands-on practical IT training with real-world project experience",
      "Proven track record of 500+ students placed in tech roles",
      "Fast-track IT certification program completed in just 4 months",
      "Dedicated job placement support and career mentorship",
      "Work on real capstone projects and industry-grade case studies",
      "One-on-one guidance from certified industry experts",
    ],
  },
  {
    id: 2,
    title: "UNIVERSITY ROUTE",
    icon: GraduationCap,
    recommended: false,
    features: [
      "Theory-heavy curriculum with limited real-world IT exposure",
      "Includes non-IT subjects unrelated to tech career goals",
      "4-year programs — slower path to entering the IT job market",
      "Less emphasis on job-ready skills and practical certifications",
      "No direct employment guarantee or job placement support",
    ],
  },
  {
    id: 3,
    title: "BOOTCAMPS",
    icon: Clock3,
    recommended: false,
    features: [
      "No guaranteed job placement after program completion",
      "Short-term training with limited depth of technical concepts",
      "Fast-paced structure — difficult to manage for working professionals",
      "Minimal career support or mentorship after course completion",
    ],
  },
];


export default function WhyChooseUs() {
  return (
    <section
      className={`${inter.className} relative overflow-hidden bg-[#F8FBFF] py-16 sm:py-20 lg:py-24`}
    >
      {/* Decorative Dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-8 hidden h-24 w-24 opacity-40 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(#60A5FA 1.5px, transparent 1.5px)",
          backgroundSize: "13px 13px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#2875AD] sm:text-sm">
            The HMT WAY Advantage
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#07152F] sm:text-4xl lg:text-[42px]">
            Why Choose{" "}
            <span className="text-[#2479E8]">
              HMT WAY?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
            Your path to a successful IT career starts here.
            Discover what makes our approach different.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {comparisons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className={`
                  group relative flex h-full flex-col
                  overflow-hidden rounded-[24px]
                  border p-6
                  transition-all duration-300
                  sm:p-7 lg:p-8
                  ${
                    item.recommended
                      ? "border-[#174A8B]  bg-gradient-to-br from-[#A9DCEB] via-[#5AA7D8] to-[#174A8B] text-white shadow-[0_20px_45px_rgba(16,54,109,0.16)]"
                      : "border-[#E1ECF7] bg-white text-[#07152F] shadow-[0_8px_30px_rgba(7,21,47,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,21,47,0.09)]"
                  }
                `}
              >
                {/* Corner Decoration */}
                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute -right-10 -top-10
                    h-28 w-28 rounded-full
                    ${
                      item.recommended
                        ? "bg-[#2479E8]/30"
                        : "bg-[#2479E8]"
                    }
                  `}
                />

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute -bottom-12 -right-12
                    h-28 w-28 rounded-full
                    ${
                      item.recommended
                        ? "bg-[#2479E8]/70"
                        : "bg-[#2479E8]"
                    }
                  `}
                />

                {/* Card Icon */}
                <div
                  className={`
                    relative mb-6 flex h-12 w-12
                    items-center justify-center rounded-2xl
                    ${
                      item.recommended
                        ? "bg-[#2479E8] text-#172B43"
                        : "bg-[#EAF5FF] text-[#174A8B]"
                    }
                  `}
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  className={`
                    relative text-lg font-extrabold
                    tracking-tight sm:text-xl
                    ${
                      item.recommended
                        ? "text-white"
                        : "text-[#10366D]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                {/* Recommended Badge */}
                {item.recommended && (
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      ★ Recommended
                    </span>
                  </div>
                )}

                {/* Features */}
                <ul className="relative mt-7 flex flex-col gap-5">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`
                          mt-0.5 flex h-5 w-5 shrink-0
                          items-center justify-center rounded-full
                          ${
                            item.recommended
                              ? "bg-[#2479E8] text-white"
                              : "bg-[#FEE8E8] text-[#EF6464]"
                          }
                        `}
                      >
                        {item.recommended ? (
                          <Check size={12} strokeWidth={3} />
                        ) : (
                          <X size={12} strokeWidth={2.5} />
                        )}
                      </span>

                      <span
                        className={`
                          text-[13px] leading-[1.7]
                          sm:text-sm
                          ${
                            item.recommended
                              ? "text-[#E1ECFF]"
                              : "text-[#64748B]"
                          }
                        `}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {item.recommended && (
                  <Link
                    href="/courses"
                    className="
                      relative mt-9 inline-flex h-12
                      items-center justify-center gap-2
                      rounded-xl border border-white/20
                      bg-white/15 text-sm font-semibold
                      text-white transition-all duration-300
                      hover:border-white/40 hover:bg-white/25
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-white
                    "
                  >
                    Start Your Journey
                    <ArrowUpRight size={17} />
                  </Link>
                )}

                {/* Keep other cards visually balanced */}
                {!item.recommended && (
                  <div className="mt-auto pt-9" />
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#94A3B8]">
          Compare learning paths and choose the one that
          aligns with your goals.
        </p>
      </div>
    </section>
  );
}
