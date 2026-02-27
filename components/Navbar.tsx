"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkStyle = (href: string) =>
    `text-sm font-medium transition ${
      pathname === href
        ? "text-blue-500"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CyberOutcome Logo"
            width={40}
            height={40}
          />
          <div>
            <p className="text-lg font-semibold">CyberOutcome</p>
            <p className="text-xs text-slate-400">
              Your Partner for the Future
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button className="text-sm font-medium text-white hover:text-blue-400">
              Company ▾
            </button>

            {companyOpen && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl bg-slate-900 p-2 shadow-xl">
                <Link
                  href="/company/about"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  About Us
                </Link>

                <Link
                  href="/company/leadership"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  Leadership
                </Link>

                <Link
                  href="/company/news"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  News & Media
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-medium text-white hover:text-blue-400">
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-3 w-64 rounded-xl bg-slate-900 p-2 shadow-xl">
                <Link
                  href="/services/cybersecurity"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  Cybersecurity
                </Link>

                <Link
                  href="/services/infrastructure"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  Infrastructure
                </Link>

                <Link
                  href="/services/artificial-intelligence"
                  className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-800"
                >
                  Artificial Intelligence
                </Link>
              </div>
            )}
          </div>

          <Link href="/regions" className={linkStyle("/regions")}>
            Regions
          </Link>

          <Link href="/partners" className={linkStyle("/partners")}>
            Partners
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:inline-flex"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
