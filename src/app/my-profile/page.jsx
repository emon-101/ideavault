"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Card, Button, Input } from "@heroui/react";
import { toast } from "sonner";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      toast.error("User not found");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const updatedUser = {
      name: formData.get("name"),
      image: formData.get("image"),
    };

    try {
      const res = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      const data = await res.json();

      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("Profile updated successfully");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("No changes were made");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  if (!user) {
    return <div className="py-20 text-center">Loading profile...</div>;
  }

  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="p-6 flex flex-col items-center text-center">
            <Image
              src={user.image || "https://ui-avatars.com/api/?name=User"}
              alt={user.name || "User"}
              width={120}
              height={120}
              className="rounded-full border-4 border-cyan-500 object-cover"
            />

            <h2 className="mt-4 text-xl font-bold">{user.name}</h2>

            <p className="text-default-500">{user.email}</p>

            <div className="mt-6 w-full border-t pt-4">
              <p className="text-sm text-default-500">IdeaVault Member</p>
            </div>
          </Card>

          {/* Update Form */}
          <Card className="lg:col-span-2 p-6">
            <h3 className="text-2xl font-semibold mb-6">Update Profile</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-default-700"
                >
                  Full Name
                </label>

                <Input
                  id="name"
                  name="name"
                  defaultValue={user?.name}
                  placeholder="Enter your full name"
                  className="w-full"
                />

                <p className="text-xs text-default-500">
                  This name will be displayed on your ideas and comments.
                </p>
              </div>

              {/* Profile Image */}
              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-default-700"
                >
                  Profile Image URL
                </label>

                <Input
                  id="image"
                  name="image"
                  defaultValue={user?.image}
                  placeholder="https://example.com/profile.jpg"
                  className="w-full"
                />

                <p className="text-xs text-default-500">
                  Paste a direct image URL for your profile picture.
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-default-700">
                  Email Address
                </label>

                <div className="rounded-xl border border-default-200 bg-default-100 px-4 py-3 text-default-700">
                  {user?.email}
                </div>

                <p className="text-xs text-default-500">
                  Your email address cannot be changed.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-cyan-500 text-white font-medium h-11"
              >
                Save Changes
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;
