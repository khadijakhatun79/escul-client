"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

export default function PlatformStatistics() {
  const stats = [
    {
      title: "Courses Available",
      value: 250,
      icon: BookOpen,
    },
    {
      title: "Active Students",
      value: 15000,
      icon: Users,
    },
    {
      title: "Expert Instructors",
      value: 120,
      icon: GraduationCap,
    },
    {
      title: "Course Certificates",
      value: 8500,
      icon: Award,
    },
  ];

  return (
    <section className="relative py-24 bg-[#ebeced4d] overflow-hidden">

      {/* Header */}
    

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition p-8 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-[#132573]" />
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900">
                {item.value.toLocaleString()}+
              </h3>

              <p className="mt-2 text-slate-600 font-medium">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}