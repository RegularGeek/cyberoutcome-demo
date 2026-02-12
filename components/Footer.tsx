import Link from "next/link";
import Image from "next/image";

const SALES_MAILTO =
  "mailto:sales@cyberoutcome.com?subject=Cyberoutcome%20Enquiry";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-start gap-3">
              <Image
                src="/logo.png"
                alt="Cyberoutcome"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <p className="text-lg font-semibold leading-tight">
                  Cyberoutcome
                </p>
                <p className="text-sm text-white/70">Your Partner for the Future</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
              Cyberoutcome delivers secure, scalable and future-ready technology
              solutions across Africa.
            </p>

            <p className="mt-6 text-sm font-semibold">Your Partner for the Future</p>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <p className="text-base font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link className="hover:text-white" href="/company">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/regions">
                  Regions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-base font-semibold">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                <a className="hover:text-white" href={SALES_MAILTO}>
                  sales@cyberoutcome.com
                </a>
              </p>
              <p>Nigeria • Ghana • Kenya</p>
            </div>

            <div className="mt-6">
              <a
                href={SALES_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Cyberoutcome. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
