"use client";

import Link from "next/link";
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

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
      });
      if (data) {
        toast.success("Login successful");
        router.push("/");
      }
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
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-default-500 mt-2">
              Login to your IdeaVault account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-cyan-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full bg-cyan-500 text-white">
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t" />
            <span className="text-sm text-default-500">OR</span>
            <div className="flex-1 border-t" />
          </div>

          {/* Google Login */}
          <Button variant="outline" className="w-full">
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="text-center mt-6 text-sm">
            Don&#39;t have an account?{" "}
            <Link
              href="/register"
              className="text-cyan-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
