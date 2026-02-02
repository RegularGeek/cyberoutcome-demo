import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="CyberOutcome Logo"
            width={48}
            height={48}
          />
          <p className="text-sm text-white/70">
            CyberOutcome delivers secure, scalable and future-ready technology
            solutions across Africa.
          </p>
          <p className="text-sm font-medium">
            Your Partner for the Future
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/company">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/regions">Regions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>sales@cyberoutcome.com</li>
            <li>Nigeria • Ghana • Kenya</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-start">
          <Link
            href="/contact"
            className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
          >
            Talk to Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} CyberOutcome. All rights reserved.
      </div>
    </footer>
  );
}
