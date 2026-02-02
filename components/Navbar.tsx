"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      { label: "Cybersecurity", href: "/services" },
      { label: "Managed Services", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
    ],
  },
  {
    label: "Regions",
    href: "/regions",
    items: [
      { label: "Nigeria", href: "/regions#nigeria" },
      { label: "Ghana", href: "/regions#ghana" },
      { label: "Kenya", href: "/regions#kenya" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-50">
      <div className="bg-[#0B0F14] border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CyberOutcome Logo"
              width={44}
              height={44}
              priority
            />
            <div className="leading-tight">
              <div className="font-semibold text-white">CyberOutcome</div>
              <div className="text-xs text-white/60">
                Your Partner for the Future
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex gap-8">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white"
                  onClick={() => setOpen(null)}
                >
                  {item.label}
                </Link>

                {"items" in item && (
                  <button
                    className="ml-1 text-white/60"
                    onClick={() =>
                      setOpen(open === item.label ? null : item.label)
                    }
                  >
                    ▾
                  </button>
                )}

                {"items" in item && open === item.label && (
                  <div className="absolute left-0 mt-3 w-56 rounded-xl bg-[#0B0F14] border border-white/10 shadow-lg">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpen(null)}
                        className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-[#1E5BFF] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
