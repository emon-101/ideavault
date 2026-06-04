import IdeaCard from "@/components/IdeaCard";

const IdeasPage = async () => {
  const res = await fetch(
    "http://localhost:5000/idea",
    {
      cache: "no-store",
    }
  );

  const ideas = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-cyan-500 font-medium">
          Discover Innovation
        </span>

        <h1 className="text-4xl font-bold mt-2">
          Explore Ideas
        </h1>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Browse innovative ideas shared by creators,
          entrepreneurs, and problem solvers from around
          the world.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea._id}
            idea={idea}
          />
        ))}
      </div>
    </section>
  );
};

export default IdeasPage;