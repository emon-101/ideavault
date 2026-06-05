"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      photoURL: formData.get("photoURL"),
      password: formData.get("password"),
    };

    const password = userData.password;

    // Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    setPasswordError("");

    try {
      console.log(userData);

      // Better Auth Registration
      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.photoURL,
      });
      //   console.log({ data, error });

      // Redirect
      if (data) {
        router.push("/");
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.error(error);

      toast.error("Registration failed");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="px-4 py-16">
      <Card className="max-w-xl mx-auto border border-default-200 shadow-xl">
        <div className="p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Join IdeaVault</h1>

            <p className="text-default-500 mt-2">
              Create your account and start sharing innovative ideas
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <TextField name="name" isRequired>
              <Label>Full Name</Label>

              <Input
                placeholder="Enter your full name"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField name="email" isRequired>
              <Label>Email Address</Label>

              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="photoURL" isRequired>
              <Label>Photo URL</Label>

              <Input
                type="url"
                placeholder="https://example.com/profile.jpg"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField name="password" isRequired>
              <Label>Password</Label>

              <Input
                type="password"
                placeholder="Enter your password"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Validation Message */}
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}

            {/* Password Requirements */}
            <div className="rounded-xl bg-default-100 p-4 text-sm">
              <p className="font-medium mb-2">Password Requirements:</p>

              <ul className="list-disc ml-5 space-y-1">
                <li>Minimum 6 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
              </ul>
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full bg-cyan-500 text-white">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t" />
            <span className="text-sm text-default-500">OR</span>
            <div className="flex-1 border-t" />
          </div>

          {/* Google Signup */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-3"
            onPress={handleGoogleRegister}
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
