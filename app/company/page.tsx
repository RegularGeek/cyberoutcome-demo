import Link from "next/link";

const SALES_MAILTO =
  "mailto:sales@cyberoutcome.com?subject=Cyberoutcome%20Enquiry";

export default function CompanyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
          COMPANY
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          About Cyberoutcome
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          We help organisations strengthen cybersecurity, modernize
          infrastructure, and build resilient digital operations across Africa.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={SALES_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </a>

          <Link
            href="/company/leadership"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Leadership
          </Link>
        </div>
      </section>
    </main>
  );
}
