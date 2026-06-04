"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const CommentSection = ({ ideaId }) => {
  const [comments, setComments] = useState([]);

  const [commentText, setCommentText] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      userName: "Emon",
      comment: commentText,
      createdAt: new Date(),
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handleDelete = (id) => {
    setComments(
      comments.filter(
        (comment) => comment.id !== id
      )
    );
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setCommentText(text);
  };

  const handleUpdate = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingId
          ? {
              ...comment,
              comment: commentText,
            }
          : comment
      )
    );

    setEditingId(null);
    setCommentText("");
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Discussion
      </h2>

      {/* Add Comment */}
      <div className="rounded-3xl border p-6">
        <textarea
          value={commentText}
          onChange={(e) =>
            setCommentText(e.target.value)
          }
          rows={4}
          placeholder="Share your thoughts..."
          className="w-full rounded-2xl border p-4"
        />

        <button
          onClick={
            editingId
              ? handleUpdate
              : handleAddComment
          }
          className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 text-white"
        >
          {editingId
            ? "Update Comment"
            : "Add Comment"}
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4 mt-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-3xl border p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">
                  {comment.userName}
                </h4>

                <p className="text-sm text-gray-500">
                  {new Date(
                    comment.createdAt
                  ).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    handleEdit(
                      comment.id,
                      comment.comment
                    )
                  }
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() =>
                    handleDelete(comment.id)
                  }
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="mt-4">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;