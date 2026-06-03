"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Transform Ideas Into Successful Startups",
    description:
      "Discover innovative concepts, collaborate with creators, and bring your vision to life.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    id: 2,
    title: "Innovation Begins With One Great Idea",
    description:
      "Explore groundbreaking ideas from entrepreneurs, students, and innovators worldwide.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    id: 3,
    title: "Build, Share & Grow Together",
    description:
      "Join a community where creativity meets opportunity and ideas become reality.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const Banner = () => {
  return (
    <section className="px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="rounded-3xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-[450px] md:h-[550px]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-3xl px-8 md:px-16 text-white">
                    <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-sm backdrop-blur-md">
                      Startup & Innovation Platform
                    </span>

                    <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-200 max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/ideas"
                        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105 transition"
                      >
                        Explore Ideas
                      </Link>

                      <Link
                        href="/add-idea"
                        className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/20 transition"
                      >
                        Submit Idea
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
