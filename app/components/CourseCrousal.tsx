
"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
  {
    id: 1,
    image: "/images/CCNA.png",
    provider: "Cisco",
    heading: "CCNA",
    subHeading: "Cisco Certified Network Associate",
    rating: 4.5,
    link: "/courses/ccna",
  },
  {
    id: 2,
    image: "/images/CCNP.png",
    provider: "Cisco",
    heading: "CCNP",
    subHeading: "Cisco Certified Network Professional",
    rating: 4.8,
    link: "/courses/ccnp",
  },
  {
    id: 3,
    image: "/images/Generative_AI.png",
    provider: "Vendor Neutral",
    heading: "Generative AI",
    subHeading: "Professional Certification",
    rating: 4.7,
    link: "/courses/ai",
  },
  {
    id: 4,
    image: "/images/Microsoft_Intune.png",
    provider: "Microsoft",
    heading: "Microsoft Intune",
    subHeading: "Professional Certification",
    rating: 4.6,
    link: "/courses/data-science",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    provider: "Cisco",
    heading: "Cybersecurity",
    subHeading: "Protect Systems & Networks",
    rating: 4.9,
    link: "/courses/cybersecurity",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    provider: "HMT",
    heading: "Cloud Computing",
    subHeading: "Master AWS, Azure & Google Cloud",
    rating: 4.7,
    link: "/courses/cloud-computing",
  },
  {
    id: 7,
    image: "/images/Mobile-app.jpg",
    provider: "HMT",
    heading: "Mobile App Development",
    subHeading: "Build Apps with React Native & Flutter",
    rating: 4.6,
    link: "/courses/mobile-development",
  },
  {
    id: 8,
    image: "/images/Machine-Learning.jpg",
    provider: "HMT",
    heading: "Machine Learning",
    subHeading: "From Basics to Advanced Models",
    rating: 4.8,
    link: "/courses/machine-learning",
  },
  {
    id: 9,
    image: "/images/Full-Stack.jpg",
    provider: "HMT",
    heading: "Full Stack Development",
    subHeading: "Frontend + Backend Mastery",
    rating: 4.7,
    link: "/courses/full-stack",
  },
];


import { inter } from "@/lib/fonts";

export default function CourseCarousel() {
  return (
    <section
      className={`${inter.className} w-full py-12 sm:py-16 lg:py-20`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2875AD] sm:text-sm">
            Discover Your Potential
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07152F] sm:text-3xl lg:text-4xl">
            Explore Our Courses
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Build practical skills with industry-focused courses
            designed for your future.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 pb-3 sm:-ml-4">
            {cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="
                  min-w-0 basis-full pl-3
                  sm:pl-4
                  md:basis-1/2
                  lg:basis-1/3
                "
              >
                <Link
                  href={card.link}
                  className="
                    group flex h-full flex-col
                    overflow-hidden rounded-2xl
                    border border-[#D5E7F2]
                    bg-white
                    transition-all duration-300
                    hover:border-[#A9DCEB]
                    hover:shadow-[0_12px_35px_rgba(23,74,139,0.12)]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#174A8B]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#EAF5FD]">
                    <Image
                      src={card.image}
                      alt={card.heading}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Light Blue Divider */}
                  <div className="h-2 shrink-0 bg-[#EAF5FD] sm:h-3" />

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    {/* Provider */}
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2875AD] sm:mb-4">
                      {card.provider}
                    </p>

                    {/* Heading */}
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#07152F] sm:text-2xl">
                      {card.heading}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-6 text-[#174A8B]">
                      {card.subHeading}
                    </p>

                    {/* Rating at Bottom */}
                    <div className="mt-auto pt-6">
                      <div className="mb-4 h-px w-full bg-[#E5EDF5]" />

                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-bold text-[#07152F] sm:text-base">
                          {card.rating.toFixed(1)}
                        </span>

                        <div
                          className="flex items-center gap-0.5"
                          role="img"
                          aria-label={`${card.rating} out of 5 stars`}
                        >
                          {Array.from({ length: 5 }).map(
                            (_, index) => {
                              const fillPercent = Math.max(
                                0,
                                Math.min(
                                  100,
                                  (card.rating - index) * 100
                                )
                              );

                              return (
                                <span
                                  key={index}
                                  className="relative inline-flex h-[17px] w-[17px] shrink-0"
                                >
                                  <Star
                                    size={17}
                                    fill="#D6DCE5"
                                    strokeWidth={0}
                                    className="absolute"
                                  />

                                  <span
                                    className="absolute inset-y-0 left-0 overflow-hidden"
                                    style={{
                                      width: `${fillPercent}%`,
                                    }}
                                  >
                                    <Star
                                      size={17}
                                      fill="#FF9C1A"
                                      strokeWidth={0}
                                      className="max-w-none"
                                    />
                                  </span>
                                </span>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Below Carousel */}
          <div className="mt-5 flex items-center justify-between sm:mt-7">
            <p className="text-xs text-slate-500 sm:text-sm">
              Swipe or use arrows to explore courses
            </p>

            <div className="flex shrink-0 items-center gap-2">
              <CarouselPrevious
                className="
                  static inset-auto translate-y-0
                  border-[#D5E7F2] bg-white
                  text-[#174A8B]
                  hover:bg-[#EAF5FD]
                  hover:text-[#174A8B]
                "
              />

              <CarouselNext
                className="
                  static inset-auto translate-y-0
                  border-[#D5E7F2] bg-white
                  text-[#174A8B]
                  hover:bg-[#EAF5FD]
                  hover:text-[#174A8B]
                "
              />
            </div>
            
             
            
          </div>
        </Carousel>
          <div className="mt-8 flex justify-center sm:mt-10 md:mt-8 lg:mt-0">
          <Link
            href="/courses" 
            className="
              inline-flex items-center 
              rounded-lg bg-[#2875AD] px-6 py-3 text-sm font-semibold text-white
              hover:bg-[#174A8B]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2875AD]
            "
          >
            View All Courses
          </Link>
      </div>
      </div>
     
    </section>
  );
}
