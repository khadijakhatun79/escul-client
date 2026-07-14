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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchCourses() {
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
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  // Featured Courses
  const featuredCourses = courses.filter((course) => course.featured);

  // Pagination Logic
  const totalPages = Math.ceil(featuredCourses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = featuredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <section className="container mx-auto py-20">
        <p className="text-center text-lg text-muted-foreground">
          Loading courses...
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-20">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Featured Courses</h2>

          <p className="mt-2 text-muted-foreground">
            Explore our featured courses.
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/courses">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {currentCourses.map((course: any) => (
          <div
            key={course._id}
            className="group overflow-hidden rounded-xl border bg-background transition-all hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4 p-5">
              <span className="text-sm font-medium text-primary">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </Button>

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </section>
  );
}