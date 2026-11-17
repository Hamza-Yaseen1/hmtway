"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// Inter is loaded here only, so it applies to this component and nothing else.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "The sensor", href: "/sensor" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Markers", href: "/markers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our doctors", href: "/doctors" },
      { label: "Science", href: "/science" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Shipping", href: "/shipping" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

function HeartbeatLine() {
  // Four matching ECG beats across a 1000-unit viewBox.
  const path =
    "M0 45 H75 " +
    "Q87 36 99 45 H117 L126 52 L138 9 " +
    "L151 74 L163 45 H185 Q200 31 216 45 H250 " +
    "H325 Q337 36 349 45 H367 L376 52 L388 9 " +
    "L401 74 L413 45 H435 Q450 31 466 45 H500 " +
    "H575 Q587 36 599 45 H617 L626 52 L638 9 " +
    "L651 74 L663 45 H685 Q700 31 716 45 H750 " +
    "H825 Q837 36 849 45 H867 L876 52 L888 9 " +
    "L901 74 L913 45 H935 Q950 31 966 45 H1000";

  return (
    <div className="relative flex w-full items-center py-7 sm:py-10">
      {/* Line: starts at the very left edge of the screen and ends at the sensor */}
      <div className="relative h-[75px] min-w-0 flex-1">
        <svg
          viewBox="0 0 1000 85"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
          fill="none"
          role="img"
          aria-label="Animated heartbeat waveform"
        >
          <defs>
            <clipPath id="heartbeat-sweep">
              <rect
                className="heartbeat-window"
                x="0"
                y="0"
                width="100"
                height="85"
              />
            </clipPath>
          </defs>

          {/* Static gray ECG line */}
          <path
            d={path}
            stroke="#D9DCE1"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Blue section moving over the same waveform */}
          <g clipPath="url(#heartbeat-sweep)">
            <path
              d={path}
              stroke="#3478FF"
              strokeWidth="2.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>

      {/* Sensor: the true end of the line, on the right */}
      <div className="relative mx-6 hidden shrink-0 sm:mx-10 sm:block lg:mx-16">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#d9dce4] bg-[#f4f5f8] shadow-[0_1px_5px_rgba(0,0,0,0.13)]">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d5d8e1] bg-white">
            <div className="h-[7px] w-[7px] rounded-full bg-[#2563eb]" />
          </div>
          <span className="absolute left-1/2 top-[34px] h-5 w-[2px] -translate-x-1/2 bg-[#c9ccd4]" />
        </div>
      </div>

      <style jsx>{`
        .heartbeat-window {
          animation: heartbeat-travel 6s linear infinite;
        }

        @keyframes heartbeat-travel {
          from {
            transform: translateX(-120px);
          }
          to {
            transform: translateX(1120px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .heartbeat-window {
            animation: none;
            transform: translateX(450px);
          }
        }
      `}</style>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setMessage("Newsletter integration coming soon.");
  }

  return (
    <footer
      className={`${inter.className} relative isolate overflow-hidden border-t border-[#e8e9ed] bg-white text-[#101828] antialiased`}
    >
      {/* ECG ANIMATION: full width, no max-width */}
      <HeartbeatLine />

      {/* MAIN CONTENT: full width with consistent side padding */}
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 pt-10 pb-24 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-14 lg:pt-12 lg:pb-32">
          {/* BRAND */}
          <div className="max-w-[370px]">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#080d19]">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#5a9cff]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#4388ff]" />
                </span>
              </span>

              <span className="text-[21px] font-semibold tracking-[-0.04em] text-[#080d19]">
                veyra
              </span>
            </Link>

            <p className="mt-6 max-w-[330px] text-[15px] leading-[1.65] text-[#526078]">
              Preventive health testing with a sensor you forget you are
              wearing.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label
                htmlFor="footer-email"
                className="mb-2 block text-[13px] font-medium text-[#101828]"
              >
                Monthly health notes
              </label>

              <div className="flex items-stretch gap-2">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Your email"
                  required
                  className="h-[42px] min-w-0 flex-1 rounded-[7px] border border-[#e0e3e8] bg-white px-3 text-[13px] text-[#101828] outline-none transition-colors placeholder:text-[#a7adba] focus:border-[#4388ff]"
                />

                <button
                  type="submit"
                  className="h-[42px] shrink-0 rounded-[7px] bg-[#080d19] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#25334b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Subscribe
                </button>
              </div>

              {message && (
                <p role="status" className="mt-2 text-xs text-[#526078]">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* NAVIGATION COLUMNS */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#526078]">
                {section.title}
              </h3>

              <ul className="space-y-[18px]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#27364d] transition-colors duration-200 hover:text-[#3478ff]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LARGE BACKGROUND WORDMARK */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative z-0 flex h-[120px] items-end justify-center overflow-hidden sm:h-[165px] lg:h-[190px]"
        >
          <span className="translate-y-[25%] select-none whitespace-nowrap text-[clamp(140px,22vw,330px)] font-semibold leading-none tracking-[-0.07em] text-[#f1f2f4]">
            veyra
          </span>
        </div>
      </div>

      {/* BOTTOM BORDER AND COPYRIGHT: full width */}
      <div className="relative z-10 border-t border-[#e8e9ed]">
        <div className="flex w-full flex-col gap-6 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#65d8c0]" />

            <p className="text-[12px] leading-5 text-[#667085]">
              © {new Date().getFullYear()} Veyra Health. Not a substitute for
              medical care.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#667085] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#3478ff]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}