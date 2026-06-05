"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import IdeaCard from "@/components/IdeaCard";

const MyIdeasContent = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchIdeas = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/my-ideas/${user.id}`
        );

        const data = await res.json();

        setIdeas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, [user]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading ideas...
      </div>
    );
  }

  return (
    <>
      {ideas.length === 0 ? (
        <div className="rounded-3xl border border-dashed py-16 text-center">
          <h3 className="text-2xl font-bold">
            No Ideas Yet
          </h3>

          <p className="mt-2 text-default-500">
            Start sharing your innovative ideas.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea._id}
              idea={idea}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyIdeasContent;