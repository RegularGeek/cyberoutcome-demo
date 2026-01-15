"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-[#0B0F14] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#1E5BFF]/15 border border-[#1E5BFF]/30" />
              <div>
                <div className="text-white font-semibold">CyberOutcome</div>
                <div className="text-xs text-white/60">
                  Build. Secure. Scale.
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Enterprise-grade cybersecurity, cloud, and managed services to help
              organisations reduce risk, improve resilience, and scale securely
              across Africa.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  className="hover:text-white"
                  href="mailto:sales@cyberoutcome.com"
                >
                  sales@cyberoutcome.com
                </a>
              </div>
              <div>
                <span className="text-white/50">Phone:</span>{" "}
                <a className="hover:text-white" href="tel:+2340000000000">
                  +234 000 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div id="offices">
            <h4 className="text-sm font-semibold text-white">Our Offices</h4>
            <div className="mt-4 space-y-5 text-sm text-white/70">
              <div>
                <div className="text-white/90 font-medium">Nigeria Office</div>
                <div className="mt-1">
                  63a Mainland Way,<br />
                  Dolphin Estate,<br />
                  Ikoyi, Lagos,<br />
                  Nigeria.
                </div>
              </div>

              <div>
                <div className="text-white/90 font-medium">Ghana Office</div>
                <div className="mt-1">
                  Silver Star Towers,<br />
                  4th Floor, Airport City,<br />
                  Liberation Road,<br />
                  Accra, Ghana.
                </div>
              </div>

              <div>
                <div className="text-white/90 font-medium">Kenya Office</div>
                <div className="mt-1">
                  15th Floor, I&amp;M Towers,<br />
                  Nairobi,<br />
                  Kenya.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="hover:text-white" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#partners">
                  Partners
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Cybersecurity</li>
              <li>Cloud Services</li>
              <li>DevOps & Automation</li>
              <li>Monitoring Tools</li>
              <li>Backup & Disaster Recovery</li>
              <li>Managed Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} CyberOutcome. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-[#1E5BFF] text-white shadow-lg hover:opacity-90"
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
