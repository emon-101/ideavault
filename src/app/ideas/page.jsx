import IdeaCard from "@/components/IdeaCard";
import IdeaFilters from "@/components/IdeaFilters";

const IdeasPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;

  const params = new URLSearchParams();

  if (resolvedSearchParams.search) {
    params.set("search", resolvedSearchParams.search);
  }

  if (resolvedSearchParams.category) {
    params.set("category", resolvedSearchParams.category);
  }

  if (resolvedSearchParams.sort) {
    params.set("sort", resolvedSearchParams.sort);
  }

  const res = await fetch(
    `http://localhost:5000/idea?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  const ideas = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <IdeaFilters />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}
      </div>
    </section>
  );
};

export default IdeasPage;