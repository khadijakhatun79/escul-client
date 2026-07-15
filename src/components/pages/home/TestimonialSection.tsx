"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Frontend Development Student",
    image: "/assets/testi_1_1.png",
    text: "Escul completely changed the way I learn. The courses are practical, beginner-friendly, and  secure my first frontend internship.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "UI/UX Design Student",
    image: "/assets/testi_1_2.png",
    text: "The instructors explain every topic clearly. Every lesson is project-based and easy to understand.",
    rating: 5,
  },
  {
    name: "Sophia Williams",
    role: "Full Stack Developer",
    image: "/assets/testi_1_3.png",
    text: "After completing several courses on Escul, I became confident enough to build real-world projects and start freelancing.",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "React Developer",
    image: "/assets/testi_1_2.png",
    text: "The quality of the courses is excellent. I learned React, Next.js and Tailwind CSS from scratch.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
         <div className="text-center mb-8">
                   <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#1CB098]">
                                            <Image
                                              src="/assets/subtitle-1.svg"
                                              alt=""
                                              width={18}
                                              height={18}
                                            />
                                            Testimonials
                                          </div>
                  <h2 className="text-5xl font-bold">Students Say’s About us!</h2>
        
                </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col mb-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Quote className="text-[#132573]" size={28} />
                </div>

                <p className="text-slate-600 leading-8 flex-1">
                  {item.text}
                </p>

                <div className="flex gap-1 mt-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="border-t mt-8 pt-6 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-lg text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center gap-5 mt-12">

          <button className="prev-btn w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow hover:bg-[#132573] hover:text-white transition">
            <ArrowLeft size={20} />
          </button>

          <button className="next-btn w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow hover:bg-[#132573] hover:text-white transition">
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}