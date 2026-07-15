"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
const { user, logout } = useAuth();

  const [role, setRole] = useState("");

// Get User Role
useEffect(() => {
  const getRole = async () => {
    try {
      if (!user?.email) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user.email}`
      );

      const data = await res.json();

      setRole(data?.role?.toLowerCase() || "");
    } catch (err) {
      console.error(err);
    }
  };

  getRole();
}, [user]);

// Navbar Scroll Effect
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
 const handleLogout = () => {
  logout();
  router.push("/");
};

 const getDashboardRoute = () => {
  switch (role) {
    case "admin":
      return "/dashboard/admin";

    case "instructor":
      return "/dashboard/instructor";

    default:
      return "/dashboard/student";
  }
};

  return (
   <nav
  className={` w-full z-[9999] transition-all duration-300 ${
    scrolled
      ? "bg-[#00001b]/95 backdrop-blur-md shadow-lg py-2"
      : "bg-transparent py-4"
  }`}
>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
         <Image
          src="/assets/logo.svg" 
          width={24}
          height={24}
          style={{ height: "auto" }} alt="logo"
          />
          <span className="font-extrabold text-2xl text-black">
  Escul
</span>
        </Link>

        {/* DESKTOP MENU */}
       <div className="hidden md:flex items-center gap-8 text-black font-medium">
          <Link href="/">Home</Link>

          <Link href="/courses">Courses</Link>

          <Link href="/instructors">Instructors</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          {user && (
            <Link href={getDashboardRoute()}>
              Dashboard
            </Link>
          )}
        </div>

        {/* AUTH SECTION */}
        <div className=" md:flex items-center gap-4">

          {!user ? (
            <>
              <Link href="/login"><button className="text-white">Login</button></Link>

              <Link href="/register">
                <button className="bg-[#132573] text-white rounded-full px-6">
                 Join Us
                </button>
              </Link>
            </>
          ) : (
            <div className="relative group">

              {/* USER */}
             <div className="flex items-center gap-2 cursor-pointer">
              <Image
              src={user?.image || "/assets/avatar.png"}
              width={35}
              height={35}
              alt="user"
              className="rounded-full"
            />

            <span className="text-white text-sm font-medium">
              {user?.name}
            </span>
            </div>

              {/* DROPDOWN */}
              <div className="absolute right-0 top-6 hidden group-hover:flex flex-col bg-white shadow-xl rounded-xl w-52 overflow-hidden">

             

                <Link
                  href={getDashboardRoute()}
                  className="px-4 py-3 flex items-center gap-2 hover:bg-gray-100"
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-3 flex items-center gap-2 text-red-500 hover:bg-red-50 text-left"
                >
                  <LogOut size={16} />
                  Logout
                </button>

              </div>
            </div>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#132573] text-white shadow-lg"
>
  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
</button>
      </div>

      {/* MOBILE MENU */}
     {isMenuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 rounded-b-3xl overflow-hidden animate-in slide-in-from-top duration-300">

    {/* User Info */}
        {user && (
          <div className="p-5 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/avatar.png"
                width={50}
                height={50}
                alt="user"
                className="rounded-full border-2 border-[#132573]"
              />

              <div>
                <h4 className="font-semibold text-slate-900">
                  {user.name}
                </h4>

                <p className="text-xs text-slate-500">
                  {user.email}
                </p>

                <p className="text-xs text-blue-600 capitalize">
                  {role}
                </p>
              </div>
            </div>
          </div>
        )}

    {/* Navigation */}
    <div className="p-4 space-y-2">

  <Link
    href="/"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-100"
  >
    Home
  </Link>

  <Link
    href="/courses"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-100"
  >
    Courses
  </Link>

  <Link
    href="/instructors"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-100"
  >
    Instructors
  </Link>

  <Link
    href="/about"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-100"
  >
    About
  </Link>

  <Link
    href="/contact"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-100"
  >
    Contact
  </Link>

  {user && (
    <>
      <Link
        href={getDashboardRoute()}
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-blue-700"
      >
        <LayoutDashboard size={18} />
        Dashboard
      </Link>

      <Link
        href="/profile"
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-100"
      >
        <User size={18} />
        Profile
      </Link>
    </>
  )}

</div>

    {/* Auth Section */}
    <div className="p-4 border-t border-slate-100">
  {!user ? (
    <div className="grid grid-cols-2 gap-3">
      <Link
        href="/login"
        onClick={() => setIsMenuOpen(false)}
      >
        <button className="w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50">
          Login
        </button>
      </Link>

      <Link
        href="/register"
        onClick={() => setIsMenuOpen(false)}
      >
        <button className="w-full py-3 rounded-xl bg-[#132573] text-white font-semibold hover:bg-[#0f1f5c]">
          Join Us
        </button>
      </Link>
    </div>
  ) : (
    <button
      onClick={async () => {
        setIsMenuOpen(false);
        await handleLogout();
      }}
      className="w-full py-3 rounded-xl bg-red-50 text-red-600 font-semibold flex items-center justify-center gap-2 hover:bg-red-100 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  )}
</div>

  </div>
)}
    </nav>
  );
}