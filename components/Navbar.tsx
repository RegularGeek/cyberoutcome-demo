"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type ChildLink = { label: string; href: string };
type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; items: ChildLink[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "About CyberOutcome", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Services Overview", href: "/services" },
      { label: "Professional Services", href: "/services" },
      { label: "PMO", href: "/services" },
      { label: "Managed Services", href: "/services" },
    ],
  },
  {
    label: "Regions",
    href: "/regions",
    items: [
      { label: "Regions Overview", href: "/regions" },
      { label: "Nigeria", href: "/regions#nigeria" },
      { label: "Ghana", href: "/regions#ghana" },
      { label: "Kenya", href: "/regions#kenya" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    items: [
      { label: "Trusted By", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function hasItems(item: NavItem): item is Extract<NavItem, { items: ChildLink[] }> {
  return Array.isArray((item as any).items);
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header ref={wrapperRef} className="sticky top-0 z-50">
      {/* Top mini bar */}
      <div className="bg-white text-[#0B0F14] border-b border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 text-black/70">
            <span>📍 Nigeria • Ghana • Kenya</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Enterprise Cybersecurity & Cloud</span>
          </div>

          <a
            href="mailto:sales@cyberoutcome.com"
            className="text-black/70 hover:text-black"
          >
            ✉ sales@cyberoutcome.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#0B0F14] text-white border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#1E5BFF]/20 border border-[#1E5BFF]/30" />
            <div className="leading-tight">
              <div className="font-semibold">CyberOutcome</div>
              <div className="text-xs text-white/60">Build. Secure. Scale.</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((item) => {
              const isOpen = open === item.label;

              if (!hasItems(item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative flex items-center gap-2">
                  {/* Make top label clickable */}
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition"
                    onClick={() => setOpen(null)}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown toggle */}
                  <button
                    onClick={() => setOpen(isOpen ? null : item.label)}
                    className="text-sm text-white/70 hover:text-white transition"
                    aria-label={`${item.label} menu`}
                  >
                    ▾
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-white/10 bg-[#0B0F14] shadow-xl overflow-hidden">
                      <div className="py-2">
                        {item.items.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(null)}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E5BFF] px-5 py-2 text-sm font-semibold hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
