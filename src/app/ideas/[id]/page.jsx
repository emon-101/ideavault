import Image from "next/image";
import {
  Calendar,
  DollarSign,
  Target,
  Lightbulb,
  Tag,
} from "lucide-react";

import CommentSection from "@/components/CommentSection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "IdeaVault | Details",
  description: "Developed By Emon Hossain",
};

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  // console.log(token);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );

  const idea = await res.json();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="overflow-hidden rounded-3xl border bg-background shadow-lg">
        <div className="relative h-75 md:h-125">
          <Image
            src={idea.imageUrl}
            alt={idea.ideaTitle}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="inline-flex rounded-full bg-cyan-500 px-4 py-1 text-sm text-white">
            {idea.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold">
            {idea.ideaTitle}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {idea.shortDescription}
          </p>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target size={20} />
            <h3 className="font-semibold">
              Target Audience
            </h3>
          </div>

          <p>{idea.targetAudience}</p>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign size={20} />
            <h3 className="font-semibold">
              Estimated Budget
            </h3>
          </div>

          <p>
            ${idea.estimatedBudget || "Not Specified"}
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={20} />
            <h3 className="font-semibold">
              Tags
            </h3>
          </div>

          <p>{idea.tags}</p>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={20} />
            <h3 className="font-semibold">
              Created
            </h3>
          </div>

          <p>
            {new Date(
              idea.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mt-8 rounded-3xl border p-8">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={24} />
          <h2 className="text-2xl font-bold">
            Detailed Description
          </h2>
        </div>

        <p className="leading-8">
          {idea.detailedDescription}
        </p>
      </div>

      {/* Problem */}
      <div className="mt-8 rounded-3xl border p-8">
        <h2 className="text-2xl font-bold mb-4">
          Problem Statement
        </h2>

        <p>{idea.problemStatement}</p>
      </div>

      {/* Solution */}
      <div className="mt-8 rounded-3xl border p-8">
        <h2 className="text-2xl font-bold mb-4">
          Proposed Solution
        </h2>

        <p>{idea.proposedSolution}</p>
      </div>

      {/* Comments */}
      <CommentSection ideaId={id} />
    </section>
  );
};

export default IdeaDetailsPage;