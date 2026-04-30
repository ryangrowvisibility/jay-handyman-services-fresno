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

const services = [
  {
    title: "Plumbing",
    body: "Leaks, fixtures, valves, supply lines, garbage disposals. The kind of plumbing that fits in a single visit — not full re-pipes.",
  },
  {
    title: "Electrical",
    body: "Fifteen years on electrical crews before this. Outlets, fixtures, ceiling fans, switches, panel-adjacent fixes. If the job needs a permit, Jay will tell you and refer it out.",
  },
  {
    title: "Drywall",
    body: "Patch holes, re-tape seams, float and texture-match. Most patches blend invisibly under a coat of touch-up paint.",
  },
  {
    title: "Wall painting",
    body: "Touch-up rooms, repaint single walls, finish accent walls. Cut lines that hold. Not whole-house exteriors — those go to Dave Parker down the road.",
  },
  {
    title: "Bathroom tile",
    body: "Shower walls, tub surrounds, floor tile. Finished projects on tight timelines. The customer noted in one Yelp review that Jay finished theirs before the date they had agreed on.",
  },
  {
    title: "The list, the rest of",
    body: "Furniture assembly, gutter cleaning, power washing, ceiling fan installation, residential roofing patches, and most of the small things in between. Two or three of these in the same visit is normal.",
  },
];

const processSteps = [
  { n: "One.", body: "Call the number." },
  { n: "Two.", body: "Tell Jay what the room looks like and what's wrong with it." },
  { n: "Three.", body: "Get the work done — same week, usually same day." },
];

const testimonials = [
  {
    body: "New ceiling fans. A whole room repainted. Bathroom tile finished. All of it done before the date we'd agreed on.",
    context: "Multi-task project · summer 2024",
  },
  {
    body: "Professional, on-time, and thorough. The kind of person you call back the next time something goes wrong in the house.",
    context: "Repeat customer · Yelp",
  },
  {
    body: "Answered the phone. Showed up the day he said he would. Did the work for the price he quoted. That's the whole review.",
    context: "Single-visit job · Fresno",
  },
  {
    body: "Hired Jay for a fan install and ended up adding three other small jobs to the visit. He just kept working. Honest pricing on each one.",
    context: "Add-ons · west Fresno",
  },
];

const faqs = [
  {
    q: "What kind of jobs are too big for Jay?",
    a: "Whole-house plumbing re-pipes, electrical panel replacements, full kitchen or bathroom remodels, and any job that needs a permit pulled by a contractor with that specific license. Jay will tell you on the phone if your project is too big and refer you to someone who handles it.",
  },
  {
    q: "Is this a one-person operation?",
    a: "Yes. Jay does the work himself in almost every case. That is the whole pitch — one number, one person, ten years on it. No subs, no rotating crew, no answering service that doesn't know your job.",
  },
  {
    q: "How quickly can you start?",
    a: "Most small jobs schedule the same week — often the same day if it's a single-task call (a leak, a fan install, a drywall patch). Multi-task projects with several rooms or trades usually start within five to seven days.",
  },
  {
    q: "Do you give free quotes?",
    a: "Yes for projects worth quoting in person. For very small single-task jobs (one outlet, one leaky faucet, one fan install) Jay can usually quote a price on the phone after you describe the situation in enough detail.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Jay carries handyman-scope coverage and the appropriate California licensing for work at this scale. Anything that requires a contractor-license-board permit gets referred to a licensed contractor with that classification.",
  },
  {
    q: "What areas do you serve?",
    a: "Fresno and the immediate surrounding areas — Clovis, Sanger, the unincorporated communities west and south. If you are not sure whether your address is in range, call.",
  },
  {
    q: "Why are reviews on Yelp instead of Google?",
    a: "Most of the early customers found Jay through Yelp ten years ago and the reviews accumulated there. The Nextdoor page has more recent ones. Both are linked at the bottom of this page.",
  },
];

const stats = [
  { num: "10", label: "Years on this number", note: "Founded 2015" },
  { num: "15+", label: "Electrical years before that", note: "On crews, not solo" },
  { num: "13", label: "Verified Yelp reviews", note: "Plus Nextdoor" },
  { num: "1", label: "Person", note: "Jay does the work" },
];

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PlusMark = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="faq-mark">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER — minimal, single line */}
      <header className="border-b border-line">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-6 flex items-baseline justify-between">
          <a href="/" className="font-display italic text-[20px] text-espresso">
            Jay&apos;s Handyman Service
          </a>
          <nav className="hidden md:flex items-baseline gap-6 text-[12px] text-espresso-quiet">
            <a href="#list" className="hover:text-rust">The list</a>
            <a href="#how" className="hover:text-rust">How</a>
            <a href="#voice" className="hover:text-rust">Reviews</a>
            <a href="#faq" className="hover:text-rust">FAQ</a>
            <a href="#contact" className="hover:text-rust">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="tnum text-[14px] text-espresso hover:text-rust">
            {PHONE}
          </a>
        </div>
      </header>

      {/* HERO — Centered Typographic Monolith, but with content density below */}
      <section className="border-b border-line">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <h1 className="settle font-display font-normal text-[clamp(2.6rem,7.4vw,5.8rem)] leading-[1.04] tracking-[-0.022em] text-espresso max-w-[18ch]">
            Jay does most of the list,{" "}
            <em className="italic text-rust">himself,</em> in Fresno,
            since 2015.
          </h1>

          <p className="settle settle-1 mt-14 text-[18px] leading-[1.7] text-espresso-soft max-w-[58ch]">
            Plumbing, electrical, drywall, painting, ceiling fans, bathroom tile,
            furniture assembly, gutters, power washing, residential roofing
            patches. <em className="italic text-espresso">The kind of short list that fits in a single phone call,</em> finished
            by the same person who answered it.
          </p>

          <p className="settle settle-2 mt-7 text-[18px] leading-[1.7] text-espresso-soft max-w-[58ch]">
            Ten years on this number. Fifteen years on someone else&apos;s
            electrical crews before that. Thirteen Yelp reviews and counting,
            most of them from people who called back for a second job.
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

      {/* THE LIST — Editorial Service Articles, restrained per distill */}
      <section id="list" className="border-b border-line bg-ivory-warm/40">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-10">
            The list
          </p>

          <p className="font-display italic text-[clamp(1.4rem,2.6vw,1.85rem)] leading-[1.4] text-espresso max-w-[42ch] mb-14">
            A working list, not a marketing menu. If your project is two or three
            of these together, that&apos;s normal. If it&apos;s far outside the
            list, Jay will tell you on the phone.
          </p>

          <ul className="divide-y divide-line">
            {services.map((s) => (
              <li key={s.title} className="py-7 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-10 gap-y-2">
                <p className="font-display text-[1.4rem] tracking-[-0.01em] text-espresso leading-tight">{s.title}</p>
                <p className="text-[15.5px] leading-[1.65] text-espresso-soft max-w-[52ch]">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW — three short italic lines */}
      <section id="how" className="border-b border-line">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-10">
            How it works
          </p>

          <ol className="space-y-7 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35] text-espresso max-w-[36ch]">
            {processSteps.map((s, i) => (
              <li key={i}><em className="italic text-rust">{s.n}</em> {s.body}</li>
            ))}
          </ol>

          <p className="mt-14 text-[14.5px] leading-[1.65] text-espresso-soft max-w-[44ch]">
            Most quotes happen the same day. Most jobs start the same week. The
            phone is the fastest way through any of this — Jay rarely returns
            email faster than text or call.
          </p>
        </div>
      </section>

      {/* VOICE — single oversized pull-quote + supporting cards */}
      <section id="voice" className="border-b border-line bg-ivory-warm/40">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-12">
            One job, last summer
          </p>

          <blockquote className="font-display italic font-normal text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-[-0.018em] text-espresso max-w-[24ch]">
            &ldquo;{testimonials[0].body}&rdquo;
          </blockquote>

          <p className="mt-12 max-w-[52ch] text-[15.5px] leading-[1.65] text-espresso-soft">
            Multi-task project: install ceiling fans, paint rooms, finish bathroom
            tile. Completed before the expected end date. The customer noted Jay
            was professional, on-time, and thorough. That review is on{" "}
            <a href={YELP} target="_blank" rel="noopener noreferrer" className="text-espresso hover:text-rust underline decoration-line-strong underline-offset-[5px] hover:decoration-rust">Yelp</a>;
            you can read it there.
          </p>

          <div className="mt-16 pt-12 border-t border-line grid sm:grid-cols-3 gap-10">
            {testimonials.slice(1).map((t, i) => (
              <figure key={i}>
                <blockquote className="font-display italic text-[1.05rem] leading-[1.5] text-espresso max-w-[28ch]">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.18em] text-espresso-quiet">{t.context}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — restrained four-stat row */}
      <section className="border-b border-line">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[clamp(2.2rem,3.6vw,3rem)] leading-none text-espresso tnum">{s.num}</p>
                <p className="text-[10.5px] uppercase tracking-[0.22em] text-espresso-quiet mt-4">{s.label}</p>
                <p className="text-[12px] text-espresso-soft mt-1.5 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Inline Q&A grid (lighter than accordion per distill) */}
      <section id="faq" className="border-b border-line bg-ivory-warm/40">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-quiet mb-12">
            Common questions
          </p>

          <div className="divide-y divide-line border-t border-b border-line-strong">
            {faqs.map((f, i) => (
              <details key={i} className="faq" {...(i === 0 ? { open: true } : {})}>
                <summary className="py-6 flex items-baseline justify-between gap-6 hover:text-rust">
                  <h3 className="font-display text-[clamp(1.1rem,1.7vw,1.3rem)] tracking-[-0.005em] leading-tight text-espresso flex-1">
                    {f.q}
                  </h3>
                  <span className="text-espresso-quiet shrink-0 mt-1.5"><PlusMark /></span>
                </summary>
                <p className="pb-7 text-[15px] leading-[1.7] text-espresso-soft max-w-[60ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — one phone, address, hours, map */}
      <section id="contact" className="border-b border-line">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-28 lg:py-36">
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

      {/* FOOTER */}
      <footer className="bg-ivory">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 text-[12.5px] text-espresso-quiet">
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
