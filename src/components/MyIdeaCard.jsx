"use client";

import Image from "next/image";
import EditIdeaModal from "./EditIdeaModal";
import DeleteIdeaModal from "./DeleteIdeaModal";
import Link from "next/link";

const MyIdeaCard = ({ idea, refetch }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-default-200 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={idea.imageUrl}
          alt={idea.ideaTitle}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
            {idea.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="line-clamp-1 text-xl font-bold">{idea.ideaTitle}</h2>

        <p className="mt-3 line-clamp-3 text-sm text-default-500">
          {idea.shortDescription}
        </p>

        {/* Extra Info */}
        <div className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Budget</span>

            <span className="text-default-500">
              {idea.estimatedBudget
                ? `$${idea.estimatedBudget}`
                : "Not Specified"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Audience</span>

            <span className="text-default-500 line-clamp-1 max-w-37.5">
              {idea.targetAudience}
            </span>
          </div>
        </div>

        {/* Tags */}
        {idea.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {idea.tags
              .split(",")
              .slice(0, 3)
              .map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400"
                >
                  #{tag.trim()}
                </span>
              ))}
          </div>
        )}

        {/* Button */}
        <Link
          href={`/ideas/${idea._id}`}
          className="block mt-5 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-center font-medium text-white hover:opacity-90 transition"
        >
          View Details
        </Link>

        {/* Actions */}
        <div className="mt-6 flex gap-3 justify-end">
          <EditIdeaModal idea={idea} refetch={refetch} />

          <DeleteIdeaModal id={idea._id} refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
