"use client";

import { Logo } from "@/components/home/logo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const footerLinks = [
  { title: "Features", href: "#" },
  { title: "Solution", href: "#" },
  { title: "About", href: "/about" },
  { title: "Credits", href: "/credits" },
];

export default function Footer() {
  return (
    <footer className="relative w-screen min-h-screen flex flex-col items-center justify-center">
      {/* Center Hero Text */}
      <div className="w-full h-full flex items-center justify-center">
        <TextHoverEffect text="local dev" duration={0.1} />
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-0 w-full px-6 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Logo + Links Row */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-6">
            {/* Logo */}
            <a href="/" aria-label="go home" className="shrink-0">
              <Logo />
            </a>

            {/* Links */}
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <span className="block text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} zzorgg, All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
