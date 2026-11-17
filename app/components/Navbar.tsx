
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { inter } from "@/lib/fonts";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header
      className={`${inter.className} sticky top-0 z-50 w-full`}
    >
      <div
        className={`
          relative border-b backdrop-blur-xl
          backdrop-saturate-150
          transition-all duration-300
          ${
            scrolled
              ? "border-[#D5E7F2]/80 bg-white/90 shadow-[0_8px_30px_rgba(7,21,47,0.07)]"
              : "border-[#D5E7F2]/50 bg-white/75"
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          className="
            mx-auto flex h-[76px] max-w-[1440px]
            items-center justify-between gap-5
            px-5 sm:px-8 lg:px-10 xl:px-16
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="HMT Home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/images/hmtway-logo-bg.png"
              alt="HMT"
              width={115}
              height={65}
              priority
              className="
                h-[55px] w-auto object-contain
                transition-transform duration-300
                hover:scale-[1.03]
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    group relative inline-flex h-[76px]
                    items-center whitespace-nowrap
                    text-[14px] font-medium tracking-[-0.01em]
                    transition-colors duration-200
                    ${
                      active
                        ? "text-[#174A8B]"
                        : "text-[#33465F] hover:text-[#174A8B]"
                    }
                  `}
                >
                  {link.label}

                  {/* ACTIVE / HOVER UNDERLINE */}
                  <span
                    className={`
                      absolute bottom-[18px] left-0 h-[2px]
                      rounded-full bg-[#2875AD]
                      transition-all duration-300
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            <Link
              href="/login"
              className="
                text-[14px] font-semibold text-[#174A8B]
                transition-colors duration-200
                hover:text-[#2875AD]
              "
            >
              Log In
            </Link>

            <Link
              href="/register"
              className="
                inline-flex h-[43px] items-center
                justify-center gap-2 rounded-[10px]
                bg-[#174A8B] px-5
                text-[13px] font-semibold text-white
                shadow-[0_4px_14px_rgba(23,74,139,0.16)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#123D75]
                hover:shadow-[0_8px_22px_rgba(23,74,139,0.22)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#174A8B]
              "
            >
              Registration
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="
              inline-flex h-11 w-11 items-center
              justify-center rounded-xl
              border border-[#D5E7F2]
              bg-[#F2F8FC]/80 text-[#07152F]
              transition-all duration-200
              hover:border-[#A9DCEB]
              hover:bg-[#EAF5FD]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#174A8B]
              lg:hidden
            "
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="
              absolute inset-x-0 top-full
              border-b border-[#D5E7F2]
              bg-white/95
              shadow-[0_20px_40px_rgba(7,21,47,0.10)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-4 sm:px-8">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href ||
                        pathname.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`
                        flex items-center justify-between
                        rounded-xl px-4 py-3.5
                        text-[14px] font-medium
                        transition-all duration-200
                        ${
                          active
                            ? "bg-[#EAF5FD] font-semibold text-[#174A8B]"
                            : "text-[#33465F] hover:bg-[#F2F8FC] hover:text-[#174A8B]"
                        }
                      `}
                    >
                      {link.label}

                      {active && (
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                          className="text-[#2875AD]"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* MOBILE ACTIONS */}
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#D5E7F2] pt-5">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex h-11 items-center justify-center
                    rounded-xl border border-[#174A8B]/25
                    bg-white text-[13px] font-semibold
                    text-[#174A8B]
                    transition-colors duration-200
                    hover:bg-[#EAF5FD]
                  "
                >
                  Log In
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex h-11 items-center justify-center
                    gap-2 rounded-xl bg-[#174A8B]
                    text-[13px] font-semibold text-white
                    transition-colors duration-200
                    hover:bg-[#123D75]
                  "
                >
                  Registration
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
