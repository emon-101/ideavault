"use client";

import { Lightbulb, Users, Rocket, Globe } from "lucide-react";

const stats = [
  {
    title: "10,000+",
    description: "Ideas Shared",
    icon: Lightbulb,
  },
  {
    title: "2,500+",
    description: "Active Innovators",
    icon: Users,
  },
  {
    title: "500+",
    description: "Startup Concepts",
    icon: Rocket,
  },
  {
    title: "50+",
    description: "Countries Reached",
    icon: Globe,
  },
];

const CommunityImpact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-cyan-500 font-medium">Community Impact</span>

          <h2 className="mt-2 text-4xl font-bold">
            Empowering Innovation Worldwide
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500">
            Thousands of innovators use IdeaVault to share ideas, collaborate
            with others, and inspire the next generation of startups and
            solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.description}
                className="group rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                  <Icon size={32} />
                </div>

                <h3 className="mt-5 text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {stat.title}
                </h3>

                <p className="mt-2 text-slate-500">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight Card */}
        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-10 text-center">
          <h3 className="text-3xl font-bold">
            Every Great Startup Begins With an Idea
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500">
            Join thousands of innovators who are sharing ideas, receiving
            feedback, and transforming concepts into impactful projects and
            future businesses.
          </p>

          <button className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg hover:scale-105 transition">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
