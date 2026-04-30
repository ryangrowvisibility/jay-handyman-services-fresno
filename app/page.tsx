import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay's Handyman Service — Fresno, CA",
};

const PHONE = "(559) 358-5216";
const PHONE_HREF = "tel:+15593585216";
const ADDRESS = "3075 W Ashlan Ave #26, Fresno, CA 93722";
const HOURS = "Monday through Saturday";
const YELP = "https://www.yelp.com/biz/jay-s-handyman-service-fresno";
const NEXTDOOR = "https://nextdoor.com/pages/jay-handyman-service-llc-fresno-ca/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=3075%20W%20Ashlan%20Ave%2C%20Fresno%2C%20CA%2093722&output=embed";

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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header — minimal, single line, italic title */}
      <header className="border-b border-line">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-6 flex items-baseline justify-between">
          <a href="/" className="font-display italic text-[20px] text-espresso">
            Jay&apos;s Handyman Service
          </a>
          <a href={PHONE_HREF} className="tnum text-[14px] text-espresso hover:text-rust">
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero — single block of prose, no eyebrow tags, no card aside, no flat list */}
      <section className="border-b border-line">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <h1 className="settle font-display font-normal text-[clamp(2.6rem,7.4vw,5.8rem)] leading-[1.04] tracking-[-0.022em] text-espresso max-w-[18ch]">
            Jay does most of the list,{" "}
            <em className="italic text-rust">himself,</em> in Fresno,
            since 2015.
          </h1>

          <p className="settle settle-1 mt-14 text-[18px] leading-[1.7] text-espresso-soft max-w-[58ch]">
            Plumbing repair. Electrical (fifteen years on crews before this).
            Drywall and texture. Wall painting. Ceiling fan installation. Bathroom
            tile. Furniture assembly. Gutters. Power washing. The kind of
            short-list that fits in a single phone call, finished by the same
            person who answered it.
          </p>

          <p className="settle settle-2 mt-7 text-[18px] leading-[1.7] text-espresso-soft max-w-[58ch]">
            One customer hired Jay to install ceiling fans, paint rooms, and
            finish bathroom tile in the same project — and he came in{" "}
            <em className="italic text-espresso">before</em> the date they had
            agreed on. Thirteen Yelp reviews say the same thing in different
            ways.
          </p>

          <p className="settle settle-3 mt-14">
            <a
              href={PHONE_HREF}
              className="inline-flex items-baseline gap-3 text-[1.5rem] font-display tnum text-espresso hover:text-rust border-b border-line-strong hover:border-rust pb-1"
            >
              {PHONE}
              <span className="text-[12px] uppercase tracking-[0.18em] text-espresso-quiet">
                Call Jay
              </span>
            </a>
          </p>
        </div>
      </section>

      {/* The list — a single readable paragraph, no numbers, no chips, no rows */}
      <section className="border-b border-line bg-ivory-warm/40">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-10">
            The list, in one sentence
          </p>
          <p className="font-display italic text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.4] text-espresso max-w-[42ch]">
            Plumbing, electrical, drywall, painting, ceiling fans, bathroom tile,
            furniture assembly, gutters, power washing, residential roofing
            patches, and most of the small things in between.
          </p>
          <p className="mt-10 text-[15px] leading-[1.65] text-espresso-soft max-w-[52ch]">
            If your project is two or three of these together, that is normal.
            If it is something close to one of them, call and ask. If it is far
            outside the list, Jay will tell you so on the phone.
          </p>
        </div>
      </section>

      {/* How it works — three short lines, large type, no boxes */}
      <section className="border-b border-line">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-10">
            How it works
          </p>

          <ol className="space-y-7 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35] text-espresso max-w-[26ch]">
            <li><em className="italic text-rust">One.</em> Call.</li>
            <li><em className="italic text-rust">Two.</em> Tell Jay what the room looks like.</li>
            <li><em className="italic text-rust">Three.</em> Get the work done.</li>
          </ol>

          <p className="mt-12 text-[14.5px] leading-[1.6] text-espresso-soft max-w-[44ch]">
            Most quotes happen the same day. Most jobs start the same week.
          </p>
        </div>
      </section>

      {/* Where + how to reach — italic prose, not a contact card grid */}
      <section className="border-b border-line bg-ivory-warm/40">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-10">
            Where to find Jay
          </p>

          <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.4] text-espresso max-w-[40ch]">
            The shop is at <em className="italic">3075 W Ashlan Ave, Suite 26, Fresno</em> — open
            Monday through Saturday. The phone is the fastest way to a quote.
          </p>

          <a
            href={PHONE_HREF}
            className="mt-10 inline-block bg-espresso text-ivory px-8 py-4 text-[14px] tracking-[0.04em] hover:bg-rust"
          >
            <span className="tnum">Call · {PHONE}</span>
          </a>

          <p className="mt-16 text-[13.5px] leading-[1.7] text-espresso-soft">
            Reviews live on{" "}
            <a href={YELP} target="_blank" rel="noopener noreferrer" className="text-espresso hover:text-rust underline decoration-line-strong underline-offset-[5px] hover:decoration-rust">
              Yelp
            </a>{" "}
            and{" "}
            <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="text-espresso hover:text-rust underline decoration-line-strong underline-offset-[5px] hover:decoration-rust">
              Nextdoor
            </a>. Address: <span className="text-espresso">{ADDRESS}</span>. Hours: <span className="text-espresso">{HOURS}</span>.
          </p>
        </div>

        {/* Full-width simple map */}
        <div className="border-t border-line">
          <iframe
            src={MAPS_EMBED}
            title="Jay's Handyman Service location"
            width="100%"
            height="320"
            style={{ border: 0, display: "block", filter: "sepia(0.15) saturate(0.9) contrast(0.96)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 text-[12.5px] text-espresso-quiet">
          <p className="font-display italic text-[16px] text-espresso">Jay&apos;s Handyman Service</p>
          <p>Fresno, CA · Since 2015</p>
          <a href={PHONE_HREF} className="tnum text-espresso hover:text-rust">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
