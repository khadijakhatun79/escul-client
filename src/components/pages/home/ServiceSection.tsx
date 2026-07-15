import Link from "next/link";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Computer,
  Smartphone,
  SearchCheck,
  Lightbulb,
  Clapperboard,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Business Management",
    icon: BriefcaseBusiness,
  },
  {
    title: "Computer Sciences",
    icon: Computer,
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
  },
  {
    title: "User Research & Testing",
    icon: SearchCheck,
  },
  {
    title: "Brand Strategy & Identity",
    icon: Lightbulb,
  },
  {
    title: "Content Strategy & Management",
    icon: Clapperboard,
  },
];

export const ServiceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#1CB098]">
                          <Image
                            src="/assets/subtitle-1.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          Get To Know About Us
                        </div>

            <h2 className="text-5xl font-bold text-[#1B1B1F]">
              Featured Course Categories
            </h2>
          </div>

          <Button className="rounded-full uppercase bg-[#1CB098] px-8 py-7 text-white hover:bg-[#000]">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href="#"
                className="group rounded-t-[110px] rounded-b-3xl bg-[#EEF8F7] px-6 py-10 text-center transition duration-300 hover:-translate-y-2 hover:bg-[#16B5A3]"
              >
                {/* Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <Icon className="h-9 w-9 text-[#16B5A3] transition group-hover:text-[#16B5A3]" />
                </div>

                {/* Title */}
                <h3 className="min-h-[70px] text-2xl font-semibold leading-snug text-[#1B1B1F] transition group-hover:text-white">
                  {item.title}
                </h3>

                {/* Arrow */}
                <div className="mt-8 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-400 transition group-hover:border-white group-hover:bg-white">
                    <ArrowRight className="h-5 w-5 rotate-[-45deg] text-[#1B1B1F]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};