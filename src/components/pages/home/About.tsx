"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid  gap-16 lg:grid-cols-2">
          {/* Left Images */}
          <div className="relative mx-auto w-full max-w-[580px]">
            {/* Main Image */}
            <div className="w-[65%] overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src="/assets/about_2_1.jpg"
                alt="About"
                width={420}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-[30px] border-8 border-white shadow-xl">
              <Image
                src="/assets/about_2_2.jpg"
                alt="About"
                width={320} 
                height={460}
                className="h-auto w-full object-cover"
              />
            </div>

          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#00B67A]">
              <Image
                src="/assets/subtitle-1.svg"
                alt=""
                width={18}
                height={18}
              />
              Get To Know About Us
            </div>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Benefit From Our Online
              <br />
              Learning Expertise Earn
              <br />
              Professional
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Online education learning has revolutionized the way knowledge is
              shared and accessed, offering flexibility, convenience, and
              inclusivity for learners around the world. It allows students to
              study from anywhere.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  OUR MISSION
                </h3>

                <p className="text-gray-600">
                  It allows students to study at their own pace, from any
                  location through interactive digital platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  OUR VISION
                </h3>

                <p className="text-gray-600">
                  It allows students to study at their own pace, from any
                  location through interactive digital platforms.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1CB098] px-8 py-4 font-semibold text-white transition hover:bg-[#000]"
            >
              GET STARTED
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}