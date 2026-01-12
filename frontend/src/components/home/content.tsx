"use client";

import { ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* 1. Added relative container to position the toast */}
        <div className="relative group overflow-hidden rounded-(--radius)">
          <img
            className="dark:grayscale w-full object-cover"
            src="/content.jpg"
            alt="team image"
            loading="lazy"
          />

          {/* 2. The "Glass" Sonner Toast Overlay */}
          <div
            className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 border border-white/20 transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.05)", // Slightly cleaner white tint
              borderRadius: "12px", // Slightly tighter radius for a smaller box
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              width: "fit-content", // Ensures it only takes up necessary space
            }}
          >
            <Info className="size-3.5 text-white/90 shrink-0" />
            <p className="text-[11px] font-medium text-white/90 tracking-tight whitespace-nowrap">
              Image by freepixel.com
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium text-balance">
            The Local Dev Ecosystem brings together products and platforms.
          </h2>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Local dev is evolving to be more than just a tool. It supports an
              entire ecosystem, from products to the APIs and platforms helping
              developers perform things locally.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <a href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
