"use client";

import Link from "next/link";
import {
  Cpu,
  GraduationCap,
  Leaf,
  Briefcase,
  HeartPulse,
  Bot,
} from "lucide-react";

const categories = [
  {
    name: "Technology",
    description: "AI, software, and cutting-edge innovations.",
    icon: Cpu,
    href: "/ideas?category=technology",
  },
  {
    name: "Education",
    description: "Learning platforms and educational solutions.",
    icon: GraduationCap,
    href: "/ideas?category=education",
  },
  {
    name: "Environment",
    description: "Green ideas for a sustainable future.",
    icon: Leaf,
    href: "/ideas?category=environment",
  },
  {
    name: "Business",
    description: "Startup and entrepreneurship concepts.",
    icon: Briefcase,
    href: "/ideas?category=business",
  },
  {
    name: "Healthcare",
    description: "Health and wellness innovations.",
    icon: HeartPulse,
    href: "/ideas?category=healthcare",
  },
  {
    name: "AI & Automation",
    description: "Intelligent systems and automation tools.",
    icon: Bot,
    href: "/ideas?category=ai",
  },
];

const InnovationCategories = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-medium">Explore Innovation</span>

          <h2 className="mt-2 text-4xl font-bold">Browse by Category</h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Discover innovative ideas across various industries and find
            inspiration for your next big project.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold group-hover:text-cyan-500 transition">
                  {category.name}
                </h3>

                <p className="mt-2 text-slate-500">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationCategories;
