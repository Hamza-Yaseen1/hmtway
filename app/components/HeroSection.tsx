
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Users } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F7FBFF] via-[#EAF5FD] to-[#D6EAF8] lg:min-h-[500px]">
        <div className="relative z-10 grid min-h-[740px] grid-cols-1 lg:min-h-[500px] lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-20 flex flex-col justify-center px-6 pb-0 pt-14 sm:px-10 lg:py-20 lg:pl-14 xl:pl-16">

            <h1
              id="hero-title"
              className={`{${inter.className} max-w-[620px] text-[clamp(2.5rem,4.1vw,4rem)] font-bold leading-[1.13] tracking-[-0.045em] text-[#07152F]}`}
            >
              Education That
              <br />
              Moves You{" "}
              <span className="text-[#2875AD]">
                Forward!
              </span>
            </h1>

            <p className="mt-6 max-w-[455px] text-[15px] leading-[1.75] text-[#465A70] sm:text-[17px]">
              Learn practical skills through expert-led courses,
              interactive lessons, and real-world projects—
              designed for modern learners.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">

              {/* Explore Courses */}
              <Link
                href="/courses"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#174A8B] to-[#2875AD] px-7 text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(23,74,139,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(23,74,139,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174A8B]"
              >
                Explore Courses
              </Link>

              {/* Watch Video */}
              <a
                href="#how-it-works"
                className="group inline-flex min-h-12 items-center gap-3 text-[15px] font-medium text-[#07152F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174A8B]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2875AD] bg-white/40 text-[#174A8B] backdrop-blur-md transition-all duration-300 group-hover:bg-[#174A8B] group-hover:text-white">
                  <Play
                    size={18}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="ml-0.5"
                  />
                </span>
                Watch How It Works
              </a>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[390px] sm:min-h-[470px] lg:min-h-[500px]">

            {/* Blue circular backdrop */}
            <div
              aria-hidden="true"
              className="absolute bottom-[-175px] left-1/2 h-[470px] w-[470px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#A9DCEB] via-[#5AA7D8] to-[#174A8B] sm:bottom-[-215px] sm:h-[570px] sm:w-[570px] lg:bottom-[-210px] lg:left-[53%] lg:h-[560px] lg:w-[560px]"
            />

            {/* Dashed circular outline */}
            <div
              aria-hidden="true"
              className="absolute bottom-[-190px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full border-2 border-dashed border-[#2875AD]/60 sm:bottom-[-230px] sm:h-[600px] sm:w-[600px] lg:bottom-[-225px] lg:left-[53%] lg:h-[590px] lg:w-[590px]"
            />

            {/* Student Image */}
            <Image
              src="/images/student-cutout.png"
              alt="Smiling student carrying a backpack"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="z-10 object-contain object-bottom"
            />

            {/* Courses Glass Card */}
            <div className="absolute left-[2%] top-[25%] z-20 flex items-center gap-3 rounded-xl border border-white/70 bg-white/65 px-3 py-3 shadow-[0_8px_28px_rgba(23,74,139,0.12)] backdrop-blur-xl sm:left-[9%] lg:-left-[5%] lg:top-[49%]">

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#174A8B] text-white">
                <ArrowUpRight size={19} />
              </span>

              <div>
                <p className="text-lg font-bold leading-tight text-[#07152F]">
                  70+
                </p>
                <p className="text-[10px] text-[#465A70]">
                  Available Courses
                </p>
              </div>

            </div>

            {/* Students Glass Card */}
            <div className="absolute right-[3%] top-[5%] z-20 w-[120px] rounded-xl border border-white/70 bg-white/65 px-3 py-4 text-center shadow-[0_8px_28px_rgba(23,74,139,0.12)] backdrop-blur-xl sm:right-[13%] lg:right-[14%] lg:top-[18%]">

              <Users
                size={17}
                className="mx-auto mb-2 text-[#174A8B]"
                fill="#174A8B"
                fillOpacity={0.15}
              />

              <p className="text-[10px] text-[#465A70]">
                Total Students
              </p>

              <p className="mt-1 text-lg font-bold leading-tight text-[#07152F]">
                10K+
              </p>

              <div className="mt-3 flex justify-center -space-x-2">
                {["A", "M", "S", "R", "H"].map(
                  (initial, index) => (
                    <span
                      key={index}
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#D5EAF8] text-[9px] font-semibold text-[#174A8B]"
                    >
                      {initial}
                    </span>
                  )
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
