import Link from "next/link";
import { Lightbulb, Home, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 mt-8">
      <div className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-10 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">
          <Lightbulb className="h-12 w-12 text-cyan-500" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          This Idea Doesn&#39;t Exist Yet
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Looks like you&#39;ve discovered an unexplored corner of IdeaVault.
          The page you&#39;re looking for may have been moved, removed, or
          perhaps the idea hasn&#39;t been created yet.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg hover:scale-105 transition"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            href="/ideas"
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 px-6 py-3 font-medium hover:bg-cyan-500/10 transition"
          >
            <Search size={18} />
            Explore Ideas
          </Link>
        </div>

        {/* Fun Footer Text */}
        <p className="mt-10 text-sm text-slate-500 dark:text-slate-500">
          Every successful startup begins with finding the right idea.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
