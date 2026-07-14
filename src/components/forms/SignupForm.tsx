"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

export function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Signup failed");
      }

      console.log("Signup successful!");

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
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>

          <p className="text-muted-foreground text-sm">
            Sign up to get started
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}