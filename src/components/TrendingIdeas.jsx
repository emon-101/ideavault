import IdeaCard from "./IdeaCard";

const TrendingIdeas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`,
    {
      cache: "no-store",
    }
  );

  const ideas = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <span className="text-cyan-500 font-semibold">
          Trending Now
        </span>

        <h2 className="text-4xl font-bold mt-2">
          Trending Ideas
        </h2>

        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          Discover innovative ideas that are gaining attention
          from entrepreneurs, creators, and investors.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

export default TrendingIdeas;