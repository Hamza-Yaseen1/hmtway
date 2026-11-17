"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Monitor,
  Server,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { inter } from "@/lib/fonts";
import Counter from "./Counter";

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
    description: "Manage, protect, and optimize devices across organizations.",
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
    description: "Build reliable collaboration environments for modern teams.",
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
    description: "Create connected workplaces and smarter document workflows.",
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
    description: "Design intelligent solutions that solve real-world problems.",
    skills: ["Python", "Machine Learning", "AI Automation"],
    color: "#8B5CF6",
  },
];

type Career = (typeof careers)[number];
const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
const maxSalary = Math.max(...careers.map((c) => c.salary));

export default function CareerExplorer() {
  const [selectedId, setSelectedId] = useState(careers[0].id);
  const selected = careers.find((c) => c.id === selectedId) ?? careers[0];
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.25 };

  return (
    <section
      className={`${inter.className} bg-[#F7F9FC] py-16 text-[#091A35] sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-[740px] sm:mb-12">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#17618D]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3D99C7]" /> HMT WAY /
            CAREER PATHWAYS
          </p>
          <h2 className="max-w-[700px] text-[clamp(2.1rem,4.5vw,3.7rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
            Find the career that{" "}
            <span className="text-[#17618D]">moves you forward.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#607086]">
            Compare technology roles, explore their earning potential and
            discover a practical path to the skills you need.
          </p>
        </div>

        <div className="mb-4 flex items-end justify-between gap-4">
          <h3 className="text-sm font-semibold text-[#142B4A]">
            Explore career paths{" "}
            <span className="ml-1 text-[#8190A2]">({careers.length})</span>
          </h3>
          <p className="hidden text-xs text-[#718198] sm:block">
            Select a role to see its details
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {careers.map((career, i) => {
            const Icon = career.icon;
            const active = selectedId === career.id;
            return (
              <motion.button
                key={career.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedId(career.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`group relative flex min-h-[190px] min-w-0 flex-col rounded-2xl border p-4 text-left transition-[border-color,background-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17618D] sm:p-5 ${active ? "border-[#2875AD] bg-[#2875AD] text-white shadow-[0_14px_32px_rgba(12,43,82,.15)]" : "border-[#DDE5ED] bg-white text-[#112846] hover:border-[#86B4D1] hover:shadow-[0_8px_24px_rgba(12,43,82,.06)]"}`}
              >
                <div className="flex w-full items-start justify-between gap-2">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${active ? "bg-white/10 text-[#B4E4F4]" : "bg-[#EAF3F8] text-[#17618D]"}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className={active ? "text-[#A8C5D8]" : "text-[#9AA9B9]"}
                  />
                </div>
                <div className="mt-5 flex-1">
                  <p className="min-h-10 text-[13px] font-semibold leading-5 sm:text-sm">
                    {career.shortName}
                  </p>
                  <p
                    className={`mt-2 text-lg font-semibold tracking-tight tabular-nums sm:text-xl ${active ? "text-white" : "text-[#2875AD]"}`}
                  >
                    {money(career.salary)}
                  </p>
                  <p
                    className={`mt-0.5 text-[11px] ${active ? "text-[#BED0E0]" : "text-[#7B8999]"}`}
                  >
                    illustrative / year
                  </p>
                </div>
                <div
                  className={`mt-4 flex items-center gap-1.5 border-t pt-3 text-[11px] font-medium ${active ? "border-white/20 text-[#B9E4F5]" : "border-[#EDF1F5] text-[#17618D]"}`}
                >
                  <TrendingUp size={13} /> +{career.growth}% growth
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[22px] border border-[#DDE5ED] bg-white shadow-[0_16px_50px_rgba(10,35,66,.045)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8EDF2] px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF3F8] text-[#17618D]">
                <BriefcaseBusiness size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold">Career insights</h3>
                <p className="text-xs text-[#8190A2]">
                  Role overview and comparison
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#D6E8F2] bg-[#F1F8FB] px-3 py-1 text-[11px] font-medium text-[#17618D]">
              {selected.shortName}
            </span>
          </div>
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="min-w-0 p-5 sm:p-8 lg:border-r lg:border-[#E8EDF2] lg:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  transition={transition}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17618D]">
                    Selected career
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {selected.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#64748B]">
                    {selected.description}
                  </p>
                  <div className="mt-7 rounded-2xl border border-[#E2E9F0] bg-[#F7FAFC] p-5 sm:p-6">
                    <p className="text-xs font-medium text-[#6B7C91]">
                      Illustrative annual salary (USD)
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#2875AD] sm:text-4xl">
                      <span className="inline-block">
                        $
                        <Counter
                          key={selected.id}
                          to={selected.salary}
                          suffix=""
                        />
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-[#718198]">
                      USD · before tax
                    </p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#DCE7EE]">
                      <motion.div
                        className="h-full rounded-full bg-[#2586B5]"
                        initial={false}
                        animate={{
                          width: `${(selected.salary / maxSalary) * 100}%`,
                        }}
                        transition={{ duration: reduceMotion ? 0 : 0.45 }}
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-[#8290A0]">
                      Relative to highest salary shown
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#E2E9F0] p-4">
                      <TrendingUp size={17} className="mb-3 text-[#17618D]" />
                      <p className="text-xl font-semibold tabular-nums">
                        +{selected.growth}%
                      </p>
                      <p className="mt-1 text-xs text-[#738397]">
                        Illustrative growth
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#E2E9F0] p-4">
                      <BriefcaseBusiness
                        size={17}
                        className="mb-3 text-[#17618D]"
                      />
                      <p className="text-xl font-semibold tabular-nums">
                        {selected.openings.toLocaleString()}
                      </p>
                      <p className="mt-1 text-xs text-[#738397]">
                        Sample openings
                      </p>
                    </div>
                  </div>
                  <h4 className="mt-7 text-sm font-semibold">
                    Skills you'll develop
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#DBE6EF] bg-[#F7FAFC] px-3 py-1.5 text-xs text-[#36536D]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex min-w-0 flex-col bg-[#FCFDFE] p-5 sm:p-8 lg:p-9">
              <h3 className="text-base font-semibold">Salary comparison</h3>
              <p className="mt-1 text-xs text-[#8190A2]">
                Illustrative annual salaries in USD
              </p>
              <div className="mt-7 space-y-5">
                {careers.map((career) => {
                  const active = selected.id === career.id;
                  return (
                    <button
                      key={career.id}
                      type="button"
                      onClick={() => setSelectedId(career.id)}
                      aria-pressed={active}
                      className="block w-full rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17618D]"
                    >
                      <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                        <span
                          className={
                            active
                              ? "font-semibold text-[#2875AD]"
                              : "text-[#65768A]"
                          }
                        >
                          {career.shortName}
                        </span>
                        <span className="font-semibold tabular-nums text-[#233D5A]">
                          {money(career.salary)}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#E6ECF2]">
                        <motion.div
                          initial={false}
                          animate={{
                            width: `${(career.salary / maxSalary) * 100}%`,
                            opacity: active ? 1 : 0.48,
                          }}
                          transition={{ duration: reduceMotion ? 0 : 0.4 }}
                          className="h-full rounded-full bg-[#2586B5]"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-10 border-t border-[#E5EBF1] pt-7">
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap size={19} className="text-[#17618D]" />
                  <h3 className="text-base font-semibold">
                    Recommended learning path
                  </h3>
                </div>
                <Link
                  href={selected.courseLink}
                  className="group flex items-center gap-3 rounded-xl border border-[#DCE6EE] bg-white p-4 transition-colors hover:border-[#83B4D0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#17618D]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF3F8] text-[#17618D]">
                    <GraduationCap size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">
                      {selected.course}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#748498]">
                      {selected.courseSubtitle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#17618D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
              <Link
                href="/courses"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2875AD] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#174570] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17618D] lg:mt-auto lg:translate-y-0"
              >
                <span>Explore all courses</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-[#8290A0]">
          Salary, growth and job-opening figures are illustrative placeholders.
          Verify them against current sources before publishing.
        </p>
      </div>
    </section>
  );
}
