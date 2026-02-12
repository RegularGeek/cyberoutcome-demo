const SALES_MAILTO =
  "mailto:sales@cyberoutcome.com?subject=Contact%20Cyberoutcome";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
          CONTACT
        </p>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          We’d Love To Hear From You
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Share what you need and we’ll respond with a recommended next step.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-600">Email us directly:</p>
              <a
                href={SALES_MAILTO}
                className="text-base font-semibold text-blue-700 hover:underline"
              >
                sales@cyberoutcome.com
              </a>
            </div>

            <a
              href={SALES_MAILTO}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tip: Your email app will open automatically with a pre-filled subject.
          </p>
        </div>
      </section>
    </main>
  );
}
