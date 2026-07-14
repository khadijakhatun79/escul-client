"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TCourse } from "@/types/course";

export default function CourseDetails() {
  const params = useParams();
  const id = params.id as string;

  const [course, setCourse] = useState<TCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch course");
        }

        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="container mx-auto py-20 text-center">
        <p>Loading course...</p>
      </section>
    );
  }

  if (!course) {
    return (
      <section className="container mx-auto py-20 text-center">
        <p>Course not found.</p>
      </section>
    );
  }

  return (
    <main className="container mx-auto py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl border">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {course.category}
          </p>

          <h1 className="text-4xl font-bold">
            {course.title}
          </h1>

          <div className="flex items-center gap-2">
            <Star
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
            <span>{course.rating}</span>
          </div>

          <p className="text-muted-foreground">
            {course.description}
          </p>

          <div className="text-4xl font-bold">
            ${course.price}
          </div>

          <p>
            Instructor:
            <span className="ml-2 font-semibold">
              {course.instructor}
            </span>
          </p>

          <Button size="lg">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Enroll Now
          </Button>
        </div>
      </div>
    </main>
  );
}