"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pencil, Trash2, Send } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const CommentSection = ({ ideaId }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load comments
  const loadComments = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`
      );

      const data = await res.json();

      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  };

  useEffect(() => {
    if (ideaId) {
      loadComments();
    }
  }, [ideaId]);

  // Add Comment
  const handleAddComment = async () => {
    if (!commentText.trim() || !user) return;

    try {
      const commentData = {
        ideaId,
        userId: user.id,
        userName: user.name,
        userImage: user.image,
        comment: commentText,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        setCommentText("");
        await loadComments();
      }
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  // Delete Comment
  const handleDelete = async (commentId) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`,
        {
          method: "DELETE",
        }
      );

      await loadComments();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  // Start Editing
  const handleEdit = (commentId, text) => {
    setEditingId(commentId);
    setCommentText(text);
  };

  // Update Comment
  const handleUpdate = async () => {
    if (!commentText.trim()) return;

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${editingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: commentText,
          }),
        }
      );

      setEditingId(null);
      setCommentText("");

      await loadComments();
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        Community Discussion
      </h2>

      {/* Comment Form */}
      <div className="rounded-3xl border border-cyan-500/20 bg-white p-6 shadow-sm dark:bg-slate-900">
        {user ? (
          <>
            <div className="mb-4 flex items-center gap-3">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
                  {user.name?.charAt(0)}
                </div>
              )}

              <div>
                <p className="font-semibold">
                  {user.name}
                </p>

                <p className="text-xs text-default-500">
                  Share your thoughts on this idea
                </p>
              </div>
            </div>

            <textarea
              rows={4}
              value={commentText}
              onChange={(e) =>
                setCommentText(e.target.value)
              }
              placeholder="What do you think about this innovation?"
              className="w-full rounded-2xl border p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              onClick={
                editingId
                  ? handleUpdate
                  : handleAddComment
              }
              className="mt-4 flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-white transition hover:bg-cyan-600"
            >
              <Send size={18} />

              {editingId
                ? "Update Comment"
                : "Post Comment"}
            </button>
          </>
        ) : (
          <div className="py-6 text-center">
            <p className="text-default-500">
              Login to participate in discussions.
            </p>
          </div>
        )}
      </div>

      {/* Comment List */}
      <div className="mt-8 space-y-5">
        {comments.length === 0 ? (
          <div className="rounded-2xl border p-6 text-center text-default-500">
            No comments yet. Be the first to share your
            thoughts 🚀
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  {comment.userImage ? (
                    <Image
                      src={comment.userImage}
                      alt={comment.userName || "User"}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
                      {comment.userName?.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold">
                      {comment.userName}
                    </h4>

                    <p className="text-xs text-default-500">
                      {comment.createdAt
                        ? new Date(
                            comment.createdAt
                          ).toLocaleString()
                        : "Just now"}
                    </p>
                  </div>
                </div>

                {user?.id === comment.userId && (
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEdit(
                          comment._id,
                          comment.comment
                        )
                      }
                      className="rounded-lg p-2 hover:bg-default-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(comment._id)
                      }
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                )}
              </div>

              <p className="mt-4 leading-relaxed">
                {comment.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;