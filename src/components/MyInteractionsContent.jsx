"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

const MyInteractionsContent = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchComments = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/my-interactions/${user.id}`,
        );

        const data = await res.json();

        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [user]);

  if (loading) {
    return <div className="text-center py-20">Loading interactions...</div>;
  }

  if (comments.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed py-16 px-8 text-center">
        <h3 className="text-2xl font-bold">No Interactions Yet</h3>

        <p className="text-default-500 mt-2">
          Start commenting on ideas to see your activity.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment._id} className="rounded-3xl border p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {comment.userImage ? (
                <Image
                  src={comment.userImage}
                  alt={comment.userName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                  {comment.userName?.charAt(0)}
                </div>
              )}

              <div>
                <h4 className="font-semibold">{comment.userName}</h4>

                <p className="text-xs text-default-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-lg">{comment.ideaTitle}</h3>

            <p className="mt-2 text-default-700 dark:text-default-300">
              {comment.comment}
            </p>

            <Link
              href={`/ideas/${comment.ideaId}`}
              className="inline-block mt-4 text-cyan-500 hover:underline"
            >
              View Idea →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyInteractionsContent;
