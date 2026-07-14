"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TCourse } from "@/types/course";

export default function CoursesSection() {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/courses`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await res.json();

        setCourses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto py-20">
        <p className="text-center text-muted-foreground">
          Loading courses...
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-20">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Popular Courses
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore our most popular courses.
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/courses">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden rounded-xl border bg-background transition-all hover:shadow-xl"
          >
            <div className="relative aspect-video">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 p-5">
              <span className="text-sm text-primary">
                {course.category}
              </span>

              <h3 className="line-clamp-2 text-xl font-semibold">
                {course.title}
              </h3>

              <p className="line-clamp-3 text-sm text-muted-foreground">
                {course.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  ${course.price}
                </span>

                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href={`/courses/${course._id}`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}