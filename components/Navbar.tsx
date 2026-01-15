"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavItem =
  | { label: string; href: string }
  | { label: string; items: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    items: [
      { label: "Why Choose Us", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Services Overview", href: "/#services" },
      { label: "Professional Services", href: "/#services" },
      { label: "PMO", href: "/#services" },
      { label: "Managed Services", href: "/#services" },
    ],
  },
  {
    label: "Regions",
    items: [
      { label: "Regions Overview", href: "/regions" },
      { label: "Nigeria", href: "/regions#nigeria" },
      { label: "Ghana", href: "/regions#ghana" },
      { label: "Kenya", href: "/regions#kenya" },
    ],
  },
  {
    label: "Partners",
    items: [
      { label: "Trusted By", href: "/#partners" },
      { label: "Locations", href: "/regions#locations" },
    ],
  },
];

function isDropdown(item: NavItem): item is Extract<NavItem, { items: any }> {
  return (item as any).items?.length > 0;
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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

          <div className="flex items-center gap-3">
            <a
              href="mailto:sales@cyberoutcome.com"
              className="text-black/70 hover:text-black"
            >
              ✉ sales@cyberoutcome.com
            </a>
          </div>
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
              if (!isDropdown(item)) {
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

              const isOpen = open === item.label;

              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpen(isOpen ? null : item.label)}
                    className="text-sm text-white/80 hover:text-white transition inline-flex items-center gap-2"
                  >
                    {item.label}
                    <span className={`text-white/60 ${isOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div className="absolute top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[#0B0F14] shadow-xl overflow-hidden">
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

          {/* Right CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden md:inline-flex rounded-full bg-[#1E5BFF] px-5 py-2 text-sm font-semibold hover:opacity-90"
            >
              Get in touch
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-4 space-y-2">
              {NAV.map((item) => {
                if (!isDropdown(item)) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-white/85 bg-white/5 hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="px-4 py-3 text-sm font-medium text-white">
                      {item.label}
                    </div>
                    <div className="pb-2">
                      {item.items.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center rounded-xl bg-[#1E5BFF] px-4 py-3 text-sm font-semibold hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
