"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function IdeaFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const params = new URLSearchParams();

    const search = formData.get("search");
    const category = formData.get("category");
    const sort = formData.get("sort");

    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);

    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-3xl border bg-white dark:bg-slate-900 p-6 shadow"
    >
      <div className="grid gap-4 md:grid-cols-4">
        
        {/* Search */}
        <input
          type="text"
          name="search"
          placeholder="Search idea title..."
          defaultValue={searchParams.get("search") || ""}
          className="rounded-xl border p-3"
        />

        {/* Category */}
        <select
          name="category"
          defaultValue={searchParams.get("category") || ""}
          className="rounded-xl border p-3"
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="AI">AI</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Business">Business</option>
          <option value="Environment">Environment</option>
        </select>

        {/* Sort */}
        <select
          name="sort"
          defaultValue={searchParams.get("sort") || "newest"}
          className="rounded-xl border p-3"
        >
          <option value="newest">
            Newest First
          </option>

          <option value="oldest">
            Oldest First
          </option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="rounded-xl bg-cyan-500 text-white font-medium"
        >
          Apply
        </button>
      </div>
    </form>
  );
}