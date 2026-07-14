import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Courses",
        href: "/courses",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Admissions",
        href: "/admission",
      },
      {
        title: "Events",
        href: "/events",
      },
      {
        title: "Support",
        href: "/support",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <GraduationCap className="h-7 w-7 text-primary" />
              <span>Escul</span>
            </Link>

            <p className="mt-4 text-sm text-muted-foreground">
              Empowering students through quality education, expert teachers,
              and modern online learning.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to receive updates about courses and events.
            </p>

            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Escul. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#">
              <FaFacebookF className="h-5 w-5 hover:text-primary transition" />
            </Link>

            <Link href="#">
              <FaInstagram className="h-5 w-5 hover:text-primary transition" />
            </Link>

            <Link href="#">
              <FaLinkedinIn className="h-5 w-5 hover:text-primary transition" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}