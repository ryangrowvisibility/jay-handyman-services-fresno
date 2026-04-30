import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay's Handyman Service — Fresno, CA",
};

const PHONE = "(559) 358-5216";
const PHONE_HREF = "tel:+15593585216";
const ADDRESS = "3075 W Ashlan Ave #26, Fresno, CA 93722";
const HOURS = "Monday — Saturday";
const YELP = "https://www.yelp.com/biz/jay-s-handyman-service-fresno";
const NEXTDOOR = "https://nextdoor.com/pages/jay-handyman-service-llc-fresno-ca/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=3075%20W%20Ashlan%20Ave%2C%20Fresno%2C%20CA%2093722&output=embed";

const services = [
  { name: "Plumbing repair", note: "Leaks, fixtures, valves, supply lines." },
  { name: "Electrical work", note: "Fifteen years on crews before this. Outlets, fixtures, fans, panel-adjacent." },
  { name: "Drywall", note: "Patch holes. Re-tape seams. Float and texture-match." },
  { name: "Wall painting", note: "Touch-up rooms or repaint. Cut lines that hold." },
  { name: "Ceiling fan installation", note: "Boxed delivery, mounted and wired." },
  { name: "Bathroom tile", note: "Shower, tub surround, floor tile. Finished projects on tight timelines." },
  { name: "Furniture assembly", note: "New-house setups. The whole list at once." },
  { name: "Gutter cleaning", note: "Leaves, sediment, splash-block resets." },
  { name: "Power washing", note: "Driveways, patios, fences, exterior siding." },
  { name: "Residential roofing", note: "Patch jobs and small repairs. Larger work referred out." },
  { name: "Residential & commercial repairs", note: "Whatever the building needs that someone else won't show up for." },
];

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Jay's Handyman Service",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3075 W Ashlan Ave #26",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93722",
      addressCountry: "US",
    },
    telephone: PHONE,
    url: "https://jay-handyman-services-fresno.vercel.app",
    priceRange: "$$",
    areaServed: "Fresno, CA",
    foundingDate: "2015",
    sameAs: [YELP, NEXTDOOR],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "13" },
    openingHours: "Mo-Sa",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SIMPLE TOP BAR — distill: no glass, no chrome */}
      <header className="border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-[20px] tracking-[-0.01em] text-ink">
              Jay&apos;s Handyman
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-quiet">
              Fresno
            </span>
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-[13px] tnum text-ink hover:text-accent"
          >
            <PhoneIcon /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO — one sentence, generous whitespace, single CTA */}
      <section className="border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 pt-24 pb-32 lg:pt-36 lg:pb-44">
          <p className="settle text-[11px] uppercase tracking-[0.22em] text-ink-quiet mb-12">
            Fresno · Handyman · Since 2015
          </p>

          <h1 className="settle settle-1 font-display text-[clamp(4rem,13vw,11rem)] leading-[0.92] tracking-[-0.025em] text-ink">
            Most of
            <br />
            <em className="italic font-normal">the list.</em>
          </h1>

          <p className="settle settle-2 mt-14 max-w-[52ch] text-[18px] leading-[1.55] text-ink-soft">
            Plumbing, electrical, drywall, painting, fans, gutters, tile.{" "}
            <span className="text-ink">One number. One person. Ten years on it.</span>
          </p>

          <div className="settle settle-3 mt-14">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[14px] tracking-[0.04em] hover:bg-accent"
            >
              <PhoneIcon className="opacity-90" />
              <span className="tnum">Call Jay · {PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST LINE — single sentence, inline stats */}
      <section className="border-b border-line bg-paper-warm/40">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-8 text-[14px] leading-[1.6] text-ink-soft">
          <p className="font-display italic text-[18px] text-ink leading-[1.45]">
            Ten years in Fresno. Fifteen before that on someone else&apos;s
            electrical crews. Thirteen verified Yelp reviews and counting.
          </p>
        </div>
      </section>

      {/* SERVICES — flat list with hairlines, NO cards */}
      <section id="work" className="border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-quiet mb-6">
                The list
              </p>
              <h2 className="font-display text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.0] tracking-[-0.02em]">
                <em className="italic">What Jay does</em>{" "}
                in a normal week.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-3 text-[15.5px] leading-[1.65] text-ink-soft">
              <p>
                A working list, not a marketing menu. If something here matches
                what you need, call. If your project is a combination of three
                of these — that&apos;s normal too.
              </p>
            </div>
          </div>

          <ul>
            {services.map((s, i) => (
              <li
                key={s.name}
                className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_minmax(220px,1fr)_2fr] gap-x-5 sm:gap-x-8 gap-y-1 py-5 border-t border-line items-baseline"
              >
                <span className="tnum text-[12px] text-ink-quiet pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[clamp(1.25rem,2vw,1.55rem)] leading-tight tracking-[-0.012em] text-ink">
                  {s.name}
                </p>
                <p className="text-[14.5px] leading-[1.55] text-ink-soft sm:text-right sm:max-w-[42ch] sm:justify-self-end col-start-2 sm:col-start-3">
                  {s.note}
                </p>
              </li>
            ))}
            <li className="border-t border-line" aria-hidden="true" />
          </ul>
        </div>
      </section>

      {/* STANDOUT REVIEW — one oversized quote, no grid */}
      <section className="border-b border-line bg-paper-warm/30">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-32 lg:py-44">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-quiet mb-12">
            One job, last summer
          </p>

          <blockquote className="font-display italic font-normal text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-[-0.018em] text-ink max-w-[24ch]">
            New ceiling fans. A whole room repainted. Bathroom tile finished. All
            of it done before the date we&apos;d agreed on.
          </blockquote>

          <p className="mt-12 max-w-[52ch] text-[16px] leading-[1.6] text-ink-soft">
            Multi-task project: install ceiling fans, paint rooms, finish bathroom
            tile. Completed before the expected end date. The customer noted Jay
            was professional, on-time, and thorough. That review is on Yelp; you
            can read it there.
          </p>

          <a
            href={YELP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-ink-soft hover:text-accent underline decoration-line underline-offset-[6px] hover:decoration-accent"
          >
            Read the reviews on Yelp
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* CONTACT — simple stack, single CTA, full-width map below */}
      <section id="contact" className="border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-quiet mb-6">
                Quote
              </p>
              <h2 className="font-display text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.0] tracking-[-0.02em] text-ink">
                Got something <em className="italic">on the list?</em>
              </h2>
              <p className="mt-7 max-w-[42ch] text-[16px] leading-[1.65] text-ink-soft">
                The fastest way to a quote is the phone. Tell Jay what the room
                looks like and what you&apos;re working with — most jobs get a
                price the same day.
              </p>

              <a
                href={PHONE_HREF}
                className="mt-10 inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[14px] tracking-[0.04em] hover:bg-accent"
              >
                <PhoneIcon className="opacity-90" />
                <span className="tnum">Call · {PHONE}</span>
              </a>
            </div>

            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-line">
              <dl className="space-y-6 text-[14.5px]">
                <div className="flex items-start gap-3">
                  <span className="text-ink-quiet pt-1"><PinIcon /></span>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1">Address</dt>
                    <dd className="text-ink">{ADDRESS}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ink-quiet pt-1"><ClockIcon /></span>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1">Hours</dt>
                    <dd className="text-ink">{HOURS}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ink-quiet pt-1"><PhoneIcon /></span>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1">Phone</dt>
                    <dd className="tnum text-ink">{PHONE}</dd>
                  </div>
                </div>
                <div className="pt-2">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-2">Find Jay</dt>
                  <dd className="space-x-5 text-[13.5px]">
                    <a href={YELP} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent underline decoration-line underline-offset-[5px] hover:decoration-accent">
                      Yelp
                    </a>
                    <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent underline decoration-line underline-offset-[5px] hover:decoration-accent">
                      Nextdoor
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Full-width simple map — no double-bezel, no chrome */}
        <div className="border-t border-line">
          <iframe
            src={MAPS_EMBED}
            title="Jay's Handyman Service location"
            width="100%"
            height="360"
            style={{ border: 0, display: "block", filter: "grayscale(0.35) contrast(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER — minimal */}
      <footer className="bg-paper">
        <div className="max-w-[920px] mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 text-[12.5px] text-ink-quiet">
          <p className="font-display text-[16px] tracking-[-0.01em] text-ink">
            Jay&apos;s Handyman Service
          </p>
          <p className="uppercase tracking-[0.18em] text-[10.5px]">
            Fresno, CA · Since 2015
          </p>
          <a href={PHONE_HREF} className="tnum text-ink hover:text-accent">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
