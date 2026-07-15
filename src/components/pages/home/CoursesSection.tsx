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
  const itemsPerPage = 3;

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
    <section className="relative overflow-hidden py-20">
  <Image
    src="/assets/hero_bg_2_1.jpg"
    alt="Background"
    fill
    className="-z-10 object-cover"
  />
  <div className="container mx-auto">
      <div className="mb-12 flex items-center justify-center text-center">
        <div>
           <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#1CB098]">
                                    <Image
                                      src="/assets/subtitle-1.svg"
                                      alt=""
                                      width={18}
                                      height={18}
                                    />
                                    Our Courses
                                  </div>
          <h2 className="text-5xl font-bold">Featured Courses</h2>

        </div>

        
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentCourses.map((course) => (
          <div
            key={course._id}
            className="group overflow-hidden rounded-xl border border-[#E5E5E5] bg-white transition-all hover:shadow-xl  p-[24px]"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
               <span className="text-2xl font-bold bg-white text-[#1CB098] absolute bottom-0 left-0 pt-2 pr-6 rounded-tr-3xl">
                  ${course.price}
                </span>
            </div>
           

            <div className="space-y-4 pt-4">
              <span className="text-sm font-medium text-primary">
                {course.category}
              </span>

              <h3 className="line-clamp-2 text-xl font-semibold">
                {course.title}
              </h3>
              <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>

              <p className="line-clamp-3 text-sm text-muted-foreground">
                {course.description}
              </p>


              <Button className="rounded-full uppercase bg-[#1CB098] px-8 py-7 text-white hover:bg-[#000]" asChild >
                <Link href={`/courses/${course._id}`}>
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
      </div>
    </section> 
  );
}