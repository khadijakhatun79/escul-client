"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Login failed");
      }

      console.log("Login successful!");

      router.push("/");
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>

          <p className="text-muted-foreground text-sm">
            Enter your email below to login
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>

              <Link
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>

        <div className="text-center text-sm">
          Dont have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}