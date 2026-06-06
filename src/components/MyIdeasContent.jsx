"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import MyIdeaCard from "./MyIdeaCard";

const MyIdeasContent = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIdeas = async () => {
    if (!user?.id) return;

    try {
      const res = await fetch(`http://localhost:5000/my-ideas/${user.id}`);

      const data = await res.json();

      setIdeas(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, [user]);

  if (loading) {
    return <div className="py-20 text-center">Loading ideas...</div>;
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">My Ideas</h1>

          <p className="text-default-500 mt-2">
            Manage and review all ideas you have shared with the community.
          </p>
        </div>
        {ideas.length === 0 ? (
          <div className="rounded-3xl border border-dashed py-16 text-center">
            <h3 className="text-2xl font-bold">No Ideas Yet</h3>

            <p className="mt-2 text-default-500">
              Start sharing your innovative ideas.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => (
              <MyIdeaCard key={idea._id} idea={idea} refetch={fetchIdeas} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MyIdeasContent;
