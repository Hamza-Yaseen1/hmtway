
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FolderKanban,
  GraduationCap,
  Monitor,
  Server,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import { inter } from "@/lib/fonts";

const careers = [
  {
    id: "systems",
    shortName: "Systems Admin",
    title: "Systems Administrator",
    icon: Server,
    salary: 110000,
    growth: 111,
    openings: 336402,
    course: "CCNA Certification",
    courseSubtitle: "Cisco Certified Network Associate",
    courseLink: "/courses/ccna",
    description:
      "Keep modern IT infrastructure running securely and efficiently.",
    skills: ["Networking", "Server Management", "Troubleshooting"],
    color: "#3B82F6",
  },
  {
    id: "endpoint",
    shortName: "Endpoint Specialist",
    title: "Endpoint Specialist",
    icon: Monitor,
    salary: 130000,
    growth: 100,
    openings: 82500,
    course: "Endpoint Management",
    courseSubtitle: "Device Security & Administration",
    courseLink: "/courses",
    description:
      "Manage, protect, and optimize devices across organizations.",
    skills: ["Intune", "Device Security", "Microsoft 365"],
    color: "#6366F1",
  },
  {
    id: "teams",
    shortName: "Teams Admin",
    title: "Microsoft Teams Administrator",
    icon: UsersRound,
    salary: 70000,
    growth: 150,
    openings: 54300,
    course: "Microsoft Teams Administration",
    courseSubtitle: "Collaboration & Communication",
    courseLink: "/courses",
    description:
      "Build reliable collaboration environments for modern teams.",
    skills: ["Microsoft Teams", "Microsoft 365", "Communication"],
    color: "#0EA5E9",
  },
  {
    id: "sharepoint",
    shortName: "SharePoint Consultant",
    title: "SharePoint Consultant",
    icon: FolderKanban,
    salary: 130000,
    growth: 120,
    openings: 41200,
    course: "SharePoint Administration",
    courseSubtitle: "Microsoft Cloud Collaboration",
    courseLink: "/courses",
    description:
      "Create connected workplaces and smarter document workflows.",
    skills: ["SharePoint", "Power Automate", "Microsoft 365"],
    color: "#14B8A6",
  },
  {
    id: "ai",
    shortName: "AI Specialist",
    title: "Artificial Intelligence Specialist",
    icon: BrainCircuit,
    salary: 180000,
    growth: 400,
    openings: 120000,
    course: "AI & Machine Learning",
    courseSubtitle: "Intelligent Systems & Automation",
    courseLink: "/courses/ai",
    description:
      "Design intelligent solutions that solve real-world problems.",
    skills: ["Python", "Machine Learning", "AI Automation"],
    color: "#8B5CF6",
  },
];

type Career = (typeof careers)[number];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const from = previousValue.current;
    previousValue.current = value;

    if (reduceMotion) return;

    let frame = 0;
    const duration = 650;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(
        Math.round(from + (value - from) * eased)
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, reduceMotion]);

  const shownValue = reduceMotion ? value : displayValue;

  return (
    <span className="tabular-nums">
      {prefix}
      {shownValue.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function CareerCard({
  career,
  selected,
  onClick,
  index,
}: {
  career: Career;
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = career.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative flex min-h-[185px] min-w-[210px]
        flex-1 flex-col overflow-hidden rounded-[20px]
        border p-5 text-left
        transition-[background-color,border-color,box-shadow]
        duration-300
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#2563EB]
        ${
          selected
            ? "border-[#102D60]  bg-gradient-to-br from-[#A9DCEB] via-[#5AA7D8] to-[#174A8B] text-white shadow-[0_16px_35px_rgba(16,45,96,0.20)]"
            : "border-[#DCE7F4] bg-white text-[#102D60] hover:border-[#B7D3F5] hover:shadow-[0_12px_30px_rgba(16,45,96,0.08)]"
        }
      `}
    >
      {selected && (
        <motion.div
          layoutId="active-career-glow"
          className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#2563EB]/35 blur-2xl"
        />
      )}

      <div className="relative flex w-full items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            selected ? "bg-white/10" : "bg-[#EFF6FF]"
          }`}
        >
          <Icon
            size={21}
            strokeWidth={1.8}
            className={
              selected ? "text-[#93C5FD]" : "text-[#2563EB]"
            }
          />
        </div>

        <ArrowUpRight
          size={17}
          className={
            selected
              ? "text-[#93C5FD]"
              : "text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          }
        />
      </div>

      <div className="relative mt-5">
        <h3 className="text-[13px] font-bold leading-snug">
          {career.shortName}
        </h3>

        <p
          className={`mt-1.5 text-lg font-bold tracking-tight ${
            selected ? "text-white" : "text-[#1558B0]"
          }`}
        >
          {formatCurrency(career.salary)}
          <span
            className={`ml-1 text-[11px] font-medium ${
              selected ? "text-[#BFDBFE]" : "text-[#64748B]"
            }`}
          >
            /yr
          </span>
        </p>
      </div>

      <div className="relative mt-auto pt-4">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            selected
              ? "bg-white/15 text-[#DBEAFE]"
              : "bg-[#EFF6FF] text-[#2563EB]"
          }`}
        >
          <TrendingUp size={11} />
          +{career.growth}% Growth
        </span>
      </div>
    </motion.button>
  );
}

export default function CareerExplorer() {
  const [selectedId, setSelectedId] = useState(careers[0].id);
  const selectedCareer =
    careers.find((career) => career.id === selectedId) ??
    careers[0];

  const reduceMotion = useReducedMotion();

  const maxSalary = Math.max(
    ...careers.map((career) => career.salary)
  );

  return (
    <section
      className={`${inter.className} relative isolate overflow-hidden bg-[#F8FBFF] py-16 sm:py-20 lg:py-24`}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#DBEAFE]/50 blur-[110px]" />
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#BFDBFE]/35 blur-[120px]" />

        <div
          className="absolute left-8 top-10 hidden h-24 w-24 opacity-30 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(#3B82F6 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-11 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2875AD] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1558B0] shadow-sm">
            <Sparkles size={14} />
            Explore Your Future
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-[#102D60] sm:text-4xl lg:text-[46px]">
            Real Careers.{" "}
            <span className="text-[#2563EB]">
              Real Opportunities.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
            Discover high-growth technology careers, explore
            earning potential, and find the skills to get started.
          </p>
        </motion.div>

        {/* Career selection cards */}
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
              Choose your career path
            </p>

            <span className="hidden items-center gap-1 text-xs text-[#64748B] sm:flex">
              Select to explore
              <ChevronRight size={14} />
            </span>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {careers.map((career, index) => (
              <div
                key={career.id}
                className="w-[215px] shrink-0 snap-start sm:w-[230px] lg:w-auto"
              >
                <CareerCard
                  career={career}
                  selected={selectedId === career.id}
                  onClick={() => setSelectedId(career.id)}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 overflow-hidden rounded-[26px] border border-[#DCE7F4] bg-white shadow-[0_20px_65px_rgba(16,45,96,0.06)] sm:mt-8"
        >
          {/* Dashboard Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8EEF7] px-5 py-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                <BriefcaseBusiness size={18} />
              </span>

              <div>
                <p className="text-xs font-bold text-[#102D60]">
                  Career Insights
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Explore your future in technology
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#F0FDF4] px-3 py-1.5 text-[11px] font-semibold text-[#15803D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Career Explorer
            </span>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left: Career Details */}
            <div className="p-5 sm:p-8 lg:border-r lg:border-[#E8EEF7] lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCareer.id}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -8,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                      Selected Career
                    </p>

                    <h3 className="text-2xl font-extrabold tracking-tight text-[#102D60] sm:text-[30px]">
                      {selectedCareer.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                      {selectedCareer.description}
                    </p>
                  </div>

                  {/* Salary */}
                  <div className="rounded-2xl border border-[#DCE7F4] bg-[#F8FBFF] p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-medium text-[#64748B]">
                        Illustrative Annual Salary (USD)
                      </p>

                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#2563EB]">
                        <TrendingUp size={17} />
                      </span>
                    </div>

                    <p className="mt-3 text-3xl font-extrabold tracking-tight text-[#1558B0] sm:text-4xl">
                      <AnimatedNumber
                        value={selectedCareer.salary}
                        prefix="$"
                      />
                    </p>

                    {/* Salary progress bar */}
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#DFEAF8]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"
                        initial={false}
                        animate={{
                          width: `${
                            (selectedCareer.salary / maxSalary) * 100
                          }%`,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.7,
                          ease: "easeOut",
                        }}
                      />
                    </div>

                    <p className="mt-2 text-[11px] text-[#94A3B8]">
                      Relative to the highest sample salary
                    </p>
                  </div>

                  {/* Stat cards */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#E4ECF6] p-4 sm:p-5">
                      <TrendingUp
                        size={17}
                        className="mb-3 text-[#2563EB]"
                      />

                      <p className="text-xl font-extrabold text-[#102D60] sm:text-2xl">
                        <AnimatedNumber
                          value={selectedCareer.growth}
                          prefix="+"
                          suffix="%"
                        />
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#64748B]">
                        Illustrative Growth
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E4ECF6] p-4 sm:p-5">
                      <BriefcaseBusiness
                        size={17}
                        className="mb-3 text-[#2563EB]"
                      />

                      <p className="text-xl font-extrabold text-[#102D60] sm:text-2xl">
                        <AnimatedNumber
                          value={selectedCareer.openings}
                        />
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#64748B]">
                        Sample Job Openings
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-bold text-[#102D60]">
                      Skills you'll develop
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-1.5 text-[11px] font-medium text-[#1558B0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Comparison + Course */}
            <div className="flex flex-col bg-[#FCFDFF] p-5 sm:p-8 lg:p-10">

              {/* Salary Comparison */}
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-[#102D60]">
                      Salary Comparison
                    </h4>

                    <p className="mt-1 text-xs text-[#94A3B8]">
                      Illustrative annual salaries (USD)
                    </p>
                  </div>

                  <span className="rounded-lg bg-[#EFF6FF] p-2 text-[#2563EB]">
                    <TrendingUp size={18} />
                  </span>
                </div>

                <div className="space-y-5">
                  {careers.map((career) => {
                    const isActive =
                      selectedCareer.id === career.id;

                    return (
                      <button
                        key={career.id}
                        type="button"
                        onClick={() => setSelectedId(career.id)}
                        className="group block w-full text-left"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span
                            className={`text-xs font-semibold ${
                              isActive
                                ? "text-[#1558B0]"
                                : "text-[#64748B]"
                            }`}
                          >
                            {career.shortName}
                          </span>

                          <span
                            className={`text-xs font-bold tabular-nums ${
                              isActive
                                ? "text-[#1558B0]"
                                : "text-[#102D60]"
                            }`}
                          >
                            ${Math.round(career.salary / 1000)}k
                          </span>
                        </div>

                        <div className="h-2.5 overflow-hidden rounded-full bg-[#E8EEF7]">
                          <motion.div
                            initial={false}
                            animate={{
                              width: `${
                                (career.salary / maxSalary) * 100
                              }%`,
                              opacity: isActive ? 1 : 0.4,
                            }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.5,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#1558B0] to-[#3B82F6]"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Recommended course */}
              <div className="mt-9">
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap
                    size={18}
                    className="text-[#2563EB]"
                  />

                  <h4 className="text-base font-bold text-[#102D60]">
                    Your Learning Path
                  </h4>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCareer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link
                      href={selectedCareer.courseLink}
                      className="group flex items-center gap-4 rounded-2xl border border-[#DCE7F4] bg-white p-4 transition-all duration-300 hover:border-[#93C5FD] hover:shadow-[0_10px_25px_rgba(37,99,235,0.08)] sm:p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                        <GraduationCap size={24} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#2563EB]">
                          Suggested Course
                        </p>

                        <h5 className="text-sm font-bold text-[#102D60]">
                          {selectedCareer.course}
                        </h5>

                        <p className="mt-1 text-xs leading-5 text-[#64748B]">
                          {selectedCareer.courseSubtitle}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] transition-transform group-hover:translate-x-1">
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-7">
                <Link
                  href="/courses"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1558B0] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(21,88,176,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10488F] hover:shadow-[0_10px_25px_rgba(21,88,176,0.22)]"
                >
                  Explore All Courses
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-[#94A3B8]">
          Salary, growth, and job-opening figures are illustrative
          placeholders. Actual outcomes vary by location, experience,
          employer, and market conditions. Replace these values
          with verified data before publishing.
        </p>
      </div>
    </section>
  );
}
