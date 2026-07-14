"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <Image
        src="/assets/hero_bg_2_1.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />


      {/* Decorative Shape */}
      <Image
        src="/assets/hero_shape2_1.png"
        alt=""
        width={90}
        height={90}
        className="absolute left-5 top-1/4 hidden lg:block animate-bounce"
      />

      <div className="relative z-10 container mx-auto flex min-h-screen items-center px-6">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="text-white">
            <span className="uppercase tracking-[4px] text-black font-semibold">
             Click. Learn. Achieve.
            </span>

            <h1 className="mt-5 text-5xl font-extrabold text-black leading-tight md:text-6xl lg:text-7xl">
             Learn Online,
              <br />
              <span className="text-black font-medium">Upgrade Your Skills</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#556377]">
              Join thousands of students learning from expert instructors.
              Access quality courses, improve your skills, and achieve your
              career goals with Escul.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-lg bg-[#1CB098] px-8 py-4 font-semibold text-white transition hover:bg-[#000]"
              >
                Explore Courses
              </Link>

              <Link
                href="/about"
                className="rounded-lg bg-[black] px-8 py-4 font-semibold text-white transition hover:bg-[#1CB098] "
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <Image
              src="/assets/hero_thumb2_1.png"
              alt="Student"
              width={550}
              height={700}
              priority
              className="w-full max-w-[520px] h-auto"
            />

            <Image
              src="/assets/hero_thumb-info2_1.png"
              alt=""
              width={300}
              height={110}
              className="absolute left-0 top-20 hidden lg:block animate-bounce"
            />

            <Image
              src="/assets/hero_thumb-info2_2.png"
              alt=""
              width={300}
              height={110}
              className="absolute right-0 top-24 hidden lg:block animate-bounce"
            />

            <Image
              src="/assets/hero_thumb-info2_3.png"
              alt=""
              width={320}
              height={111}
              className="absolute bottom-16 left-10 hidden lg:block animate-pulse"
            />
          </div>

        </div>
      </div>
    </section>
  );
}