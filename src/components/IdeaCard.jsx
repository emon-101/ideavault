import Image from "next/image";
import Link from "next/link";
import { Users, DollarSign, Tag } from "lucide-react";

const IdeaCard = ({ idea }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={idea.imageUrl}
          alt={idea.ideaTitle}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
          {idea.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h2 className="text-xl font-bold line-clamp-1">
          {idea.ideaTitle}
        </h2>

        <p className="text-sm text-slate-500 line-clamp-3">
          {idea.shortDescription}
        </p>

        {/* Meta */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Users size={16} />
            <span>{idea.targetAudience}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <DollarSign size={16} />
            <span>
              ${idea.estimatedBudget || "Not Specified"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Tag size={16} />
            <span className="line-clamp-1">
              {idea.tags}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/ideas/${idea._id}`}
          className="block w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-center font-medium text-white hover:opacity-90 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default IdeaCard;