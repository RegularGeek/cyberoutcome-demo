import Link from "next/link";

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.10),transparent_40%),radial-gradient(circle_at_40%_85%,rgba(99,102,241,0.08),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            COMPANY
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Leadership
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            At Cyberoutcome, leadership isn’t a title, it’s accountability.
            Senior experience where uptime, risk, and trust are non-negotiable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              ← Back to Company
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Talk to leadership
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main text */}
          <article className="lg:col-span-8">
            <div className="prose prose-slate max-w-none">
              <p>
                At Cyberoutcome, leadership isn’t a title, it’s accountability.
                Our executive team brings 80+ combined years of experience in
                technology and cybersecurity, shaped by real responsibility
                across complex environments where uptime, risk, and trust is
                non-negotiable.
              </p>

              <p>
                Cyberoutcome is led by a seasoned executive management team made
                up of former CISOs, CTOs, and CEOs; leaders who have built
                security programs, managed enterprise technology, and navigated
                board-level decisions. We understand what it takes to protect
                critical systems, enable growth, and keep organizations running
                even when threats escalate.
              </p>

              <p>
                What makes our leadership different is practical depth. We have
                led security and technology transformations across regulated
                industries, cloud and hybrid infrastructure, identity and access
                management, data protection, and cyber resilience. We have also
                been in the room during high-pressure moments, major incidents,
                audit findings, vendor failures, and operational disruptions
                where the right decision matters more than theory.
              </p>

              <p>That experience translates into how we operate:</p>

              <ul>
                <li>Clear security strategy tied to business outcomes.</li>
                <li>Solution architecture that works in production.</li>
                <li>Governance that holds up to audits and regulators.</li>
                <li>
                  Delivery discipline that reduces surprises and improves
                  adoption.
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
                If you are looking for a cybersecurity and technology partner
                with leadership that has done the work, led the teams, and owned
                the risk you are in the right place.
              </p>
            </div>
          </article>

          {/* Sidebar card */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                What to expect
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Senior involvement from discovery through delivery. Clear
                decisions, fewer surprises, better outcomes.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Practical strategy
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Align security to business goals and measurable outcomes.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Production-ready architecture
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Designs that survive real usage, audits, and incidents.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Delivery discipline
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Tight execution, predictable timelines, and strong adoption.
                  </p>
                </div>
              </div>

              <Link
                href="/#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Book a leadership call
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
