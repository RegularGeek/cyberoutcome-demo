export const metadata = {
  title: "Leadership | CyberOutcome",
  description:
    "Meet the leadership behind CyberOutcome — experienced executives driving security and technology outcomes across Africa.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top spacing in case navbar is fixed */}
      <div className="pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            COMPANY
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Leadership
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            At Cyberoutcome, leadership isn’t a title, it’s accountability. Our
            executive team brings 80+ combined years of experience in technology
            and cybersecurity, shaped by real responsibility across complex
            environments where uptime, risk, and trust is non-negotiable.
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-700">
            <p>
              Cyberoutcome is led by a seasoned executive management team made up
              of former CISOs, CTOs, and CEOs; leaders who have built security
              programs, managed enterprise technology, and navigated board-level
              decisions. We understand what it takes to protect critical
              systems, enable growth, and keep organizations running even when
              threats escalate.
            </p>

            <p>
              What makes our leadership different is practical depth. We have
              led security and technology transformations across regulated
              industries, cloud and hybrid infrastructure, identity and access
              management, data protection, and cyber resilience. We have also
              been in the room during high-pressure moments, major incidents,
              audit findings, vendor failures, and operational disruptions where
              the right decision matters more than theory.
            </p>

            <p>That experience translates into how we operate:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Clear security strategy tied to business outcomes.</li>
              <li>Solution architecture that works in production.</li>
              <li>Governance that holds up to audits and regulators.</li>
              <li>
                Delivery discipline that reduces surprises and improves adoption.
              </li>
            </ul>

            <p>
              Cyberoutcome’s leadership stays close to execution. We partner
              directly with clients from discovery to design, implementation,
              and ongoing improvement so you get senior expertise where it
              counts. Whether you are strengthening your cyber resilience,
              modernizing identity security, securing cloud adoption, or
              reducing exposure across endpoints and data, Cyberoutcome brings
              the experience to guide decisions and deliver outcomes.
            </p>

            <p>
              If you are looking for a cybersecurity and technology partner with
              leadership that has done the work, led the teams, and owned the
              risk you are in the right place.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>

            <a
              href="/company/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
