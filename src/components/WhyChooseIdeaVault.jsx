"use client";

import { Lightbulb, Users, MessageSquare, Rocket } from "lucide-react";

const features = [
  {
    title: "Share Your Ideas",
    description: "Turn your thoughts into public ideas and inspire others.",
    icon: Lightbulb,
  },
  {
    title: "Connect with Innovators",
    description: "Meet entrepreneurs, creators, and problem solvers.",
    icon: Users,
  },
  {
    title: "Get Valuable Feedback",
    description: "Receive comments and suggestions from the community.",
    icon: MessageSquare,
  },
  {
    title: "Launch Future Startups",
    description: "Transform promising concepts into successful ventures.",
    icon: Rocket,
  },
];

const WhyChooseIdeaVault = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-cyan-500 font-medium">Why IdeaVault?</span>

          <h2 className="mt-2 text-4xl font-bold">
            A Community Built for Innovation
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            IdeaVault helps innovators discover opportunities, collaborate with
            others, and turn ideas into reality.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-10 text-center">
          <h3 className="text-3xl font-bold">
            Ready to Share Your Next Big Idea?
          </h3>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Join a growing community of innovators and contribute ideas that can
            shape the future.
          </p>

          <button className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white hover:scale-105 transition">
            Submit an Idea
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIdeaVault;
