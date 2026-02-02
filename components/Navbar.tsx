"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type DropdownItem = {
  label: string;
  href: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Accepts refs that can be null (normal in React).
 * This fixes the TS build error you saw on Vercel.
 */
function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void
) {
  useEffect(() => {
    function handle(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onOutside();
    }

    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [ref, onOutside]);
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cx(
        "text-sm font-medium transition",
        active ? "text-white" : "text-white/80 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useOutsideClick(wrapRef, () => setOpen(false));

  const isAnyActive = items.some((i) => pathname === i.href);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cx(
          "inline-flex items-center gap-1 text-sm font-medium transition",
          isAnyActive ? "text-white" : "text-white/80 hover:text-white"
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label}
        <span className={cx("transition-transform", open && "rotate-180")}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F14]/95 shadow-2xl backdrop-blur"
        >
          <div className="p-2">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cx(
                    "block rounded-xl px-3 py-2 text-sm transition",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const nav: NavItem[] = [{ label: "Home", href: "/" }];

  const company: DropdownItem[] = [
    { label: "About Us", href: "/company" },
    { label: "Leadership", href: "/company#leadership" },
    { label: "News & Media", href: "/company#news" },
  ];

  const services: DropdownItem[] = [
    { label: "All Services", href: "/services" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Infrastructure", href: "/services/infrastructure" },
    { label: "DevOps", href: "/services/devops" },
  ];

  const regions: DropdownItem[] = [
    { label: "Our Locations", href: "/regions" },
    { label: "Nigeria", href: "/regions#nigeria" },
    { label: "Ghana", href: "/regions#ghana" },
    { label: "Kenya", href: "/regions#kenya" },
  ];

  const partners: DropdownItem[] = [{ label: "Partners", href: "/partners" }];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* Replace this with your real logo <Image /> if you want */}
          <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold">
            C
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold">CyberOutcome</div>
            <div className="text-xs text-white/60">
              Your Partner for the Future
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href}>
              {n.label}
            </NavLink>
          ))}

          <Dropdown label="Company" items={company} />
          <Dropdown label="Services" items={services} />
          <Dropdown label="Regions" items={regions} />
          <Dropdown label="Partners" items={partners} />
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
