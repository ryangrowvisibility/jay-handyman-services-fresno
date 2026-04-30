import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay's Handyman Service — Fresno, CA",
};

const PHONE = "(559) 358-5216";
const PHONE_HREF = "tel:+15593585216";
const ADDRESS = "3075 W Ashlan Ave #26, Fresno, CA 93722";
const HOURS = "Monday – Saturday";
const YELP = "https://www.yelp.com/biz/jay-s-handyman-service-fresno";
const NEXTDOOR = "https://nextdoor.com/pages/jay-handyman-service-llc-fresno-ca/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=3075%20W%20Ashlan%20Ave%2C%20Fresno%2C%20CA%2093722&output=embed";

const services = [
  { code: "01", title: "Plumbing", body: "Leaks, fixtures, valves, supply lines, garbage disposals. The kind of plumbing that fits in a single visit — not full re-pipes." },
  { code: "02", title: "Electrical", body: "Fifteen years on electrical crews before this. Outlets, fixtures, ceiling fans, switches, panel-adjacent fixes. If the job needs a permit, Jay will tell you and refer it out." },
  { code: "03", title: "Drywall", body: "Patch holes, re-tape seams, float and texture-match. Most patches blend invisibly under a coat of touch-up paint." },
  { code: "04", title: "Wall painting", body: "Touch-up rooms, repaint single walls, finish accent walls. Cut lines that hold. Not whole-house exteriors." },
  { code: "05", title: "Bathroom tile", body: "Shower walls, tub surrounds, floor tile. Finished projects on tight timelines — one customer noted Jay finished theirs before the agreed date." },
  { code: "06", title: "The rest of the list", body: "Furniture assembly, gutter cleaning, power washing, ceiling fan installation, residential roofing patches, and most of the small things in between." },
];

const processSteps = [
  { n: "01", title: "Call", body: "Phone is the fastest way to a quote. Tell Jay what the room looks like and what's wrong with it." },
  { n: "02", title: "Walk", body: "For projects worth quoting in person, Jay comes out, looks at the work, and writes a price the same day or the next." },
  { n: "03", title: "Work", body: "Most single-task jobs schedule the same week — many the same day. Multi-task projects within five to seven days." },
  { n: "04", title: "Pay", body: "After the work is done, not before. Honest pricing on each task, no upcharges, no fictional surcharges." },
];

const testimonials = [
  {
    body: "New ceiling fans. A whole room repainted. Bathroom tile finished. All of it done before the date we'd agreed on.",
    context: "Multi-task · summer 2024",
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

const stats = [
  { num: "10", label: "Years on this number", note: "Founded 2015" },
  { num: "15+", label: "Electrical years before that", note: "On crews, not solo" },
  { num: "13", label: "Verified Yelp reviews", note: "Plus Nextdoor" },
  { num: "1", label: "Person", note: "Jay does the work" },
];

const faqs = [
  { q: "What kind of jobs are too big for Jay?", a: "Whole-house plumbing re-pipes, electrical panel replacements, full kitchen or bathroom remodels, and any job that needs a permit pulled by a contractor with that specific license. Jay will tell you on the phone if your project is too big and refer you to someone who handles it." },
  { q: "Is this a one-person operation?", a: "Yes. Jay does the work himself in almost every case. That is the whole pitch — one number, one person, ten years on it. No subs, no rotating crew, no answering service that doesn't know your job." },
  { q: "How quickly can you start?", a: "Most small jobs schedule the same week — often the same day if it's a single-task call (a leak, a fan install, a drywall patch). Multi-task projects with several rooms or trades usually start within five to seven days." },
  { q: "Do you give free quotes?", a: "Yes for projects worth quoting in person. For very small single-task jobs (one outlet, one leaky faucet, one fan install) Jay can usually quote a price on the phone after you describe the situation in enough detail." },
  { q: "Are you licensed and insured?", a: "Jay carries handyman-scope coverage and the appropriate California licensing for work at this scale. Anything that requires a contractor-license-board permit gets referred to a licensed contractor with that classification." },
  { q: "What areas do you serve?", a: "Fresno and the immediate surrounding areas — Clovis, Sanger, the unincorporated communities west and south. If you are not sure whether your address is in range, call." },
  { q: "Why are reviews on Yelp instead of Google?", a: "Most of the early customers found Jay through Yelp ten years ago and the reviews accumulated there. The Nextdoor page has more recent ones. Both are linked at the bottom of this page." },
];

const PhoneIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PlusMark = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="faq-mark">
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

      {/* HEADER — heavy black bar, sticky */}
      <header className="bg-ink text-paper sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-[22px] tracking-[-0.005em] uppercase font-black">JAY&apos;S HANDYMAN</span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">No. 559 · Fresno</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/65">
            <a href="#list" className="hover:text-orange">List</a>
            <a href="#how" className="hover:text-orange">How</a>
            <a href="#voice" className="hover:text-orange">Reviews</a>
            <a href="#faq" className="hover:text-orange">FAQ</a>
            <a href="#contact" className="hover:text-orange">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-orange text-ink px-3 py-1.5 text-[12px] font-mono tracking-[0.04em] tnum hover:bg-paper">
            <PhoneIcon size={12} /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO — Big Shoulders monolith on white, structural */}
      <section className="bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-x-10 gap-y-12 items-end">
          <div className="lg:col-span-8 settle">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-10">
              Fresno · Handyman · Est. 2015 · One person, one number
            </p>

            <h1 className="bs-display font-display font-black text-[clamp(4.4rem,12vw,11rem)] text-ink max-w-[14ch]">
              Most of
              <br />
              <span className="text-orange">the list,</span>
              <br />
              done right.
            </h1>
          </div>

          <aside className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-rule-strong settle settle-1">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-quiet mb-6">In a sentence</p>
            <p className="text-[16px] leading-[1.6] text-ink-soft max-w-[42ch]">
              Plumbing, electrical, drywall, painting, ceiling fans, bathroom tile, gutters,
              power washing. The kind of short list that fits in a single phone call,
              finished by the same person who answered it.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-9 inline-flex items-baseline gap-3 text-[1.4rem] font-display tnum font-black text-ink hover:text-orange-deep border-b-2 border-rule-heavy hover:border-orange pb-2"
            >
              {PHONE}
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-quiet">Call Jay</span>
            </a>
          </aside>
        </div>

        <div className="dbl-rule" />
      </section>

      {/* STATS — heavy black band, big numerals */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-10">
            {stats.map((s, i) => (
              <div key={i} className={i > 0 ? "lg:border-l lg:border-paper/15 lg:pl-10" : ""}>
                <p className="font-display font-black bs-display text-[clamp(3.4rem,5.6vw,5.4rem)] text-paper tnum">{s.num}</p>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-orange mt-4">{s.label}</p>
                <p className="text-[12.5px] text-paper/60 mt-1.5 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE LIST — service-shop industrial grid */}
      <section id="list" className="bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-6">§ The list</p>
              <h2 className="bs-display font-display font-black text-[clamp(2.8rem,6.4vw,5.4rem)] text-ink max-w-[16ch]">
                A working list, not a marketing menu.
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.65] text-ink-soft">
              <p>
                If your project is two or three of these together, that&apos;s normal. If
                it&apos;s far outside the list, Jay will tell you on the phone — and refer
                you to someone who handles it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule-strong border border-rule-strong">
            {services.map((s) => (
              <article key={s.code} className="bg-paper p-8 lg:p-10 hover:bg-paper-warm">
                <p className="font-mono text-[11px] tnum tracking-[0.22em] uppercase text-orange-deep">{s.code}</p>
                <h3 className="bs-display font-display font-black text-[clamp(1.6rem,2.2vw,2rem)] text-ink mt-4">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-soft mt-5 max-w-[40ch]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW — 4-step process, structured columns */}
      <section id="how" className="bg-paper-warm border-y border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-6">§ How it works</p>
              <h2 className="bs-display font-display font-black text-[clamp(2.8rem,6.4vw,5.4rem)] text-ink max-w-[16ch]">
                Four steps. <span className="text-orange-deep">Same every job.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.65] text-ink-soft">
              <p>
                Most quotes happen the same day. Most jobs start the same week. The phone
                is the fastest way through any of this.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {processSteps.map((s) => (
              <div key={s.n} className="bg-paper border border-rule-strong p-7">
                <p className="font-display font-black bs-display text-[clamp(2.6rem,4vw,3.4rem)] text-orange-deep tnum">{s.n}</p>
                <h3 className="bs-display font-display font-black text-[1.5rem] text-ink mt-4">{s.title}</h3>
                <p className="text-[14px] leading-[1.6] text-ink-soft mt-4">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL-QUOTE — single oversized */}
      <section className="bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-10">§ Voice of the work</p>
          <p className="bs-display font-display font-black text-[clamp(2.8rem,6.4vw,5.4rem)] text-ink max-w-[20ch]">
            &ldquo;{testimonials[0].body}&rdquo;
          </p>
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-quiet mt-8">— {testimonials[0].context}</p>
        </div>
      </section>

      {/* TESTIMONIAL CARDS — supporting */}
      <section id="voice" className="bg-paper-warm border-y border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-10">§ More from customers</p>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
            {testimonials.slice(1).map((t, i) => (
              <figure key={i} className="bg-paper border border-rule-strong p-7 lg:p-8 flex flex-col">
                <p className="text-orange-deep font-mono text-[11px] tracking-[0.22em] uppercase">{t.context}</p>
                <blockquote className="text-[15px] leading-[1.6] text-ink mt-5 flex-1">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Accordion, structural */}
      <section id="faq" className="bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep mb-6">§ Common questions</p>
            <h2 className="bs-display font-display font-black text-[clamp(2.8rem,6.4vw,5.4rem)] text-ink max-w-[16ch]">
              Worth answering before you call.
            </h2>
          </div>

          <div className="border-t-4 border-b-4 border-rule-heavy divide-y divide-rule-strong">
            {faqs.map((f, i) => (
              <details key={i} className="faq" {...(i === 0 ? { open: true } : {})}>
                <summary className="py-6 flex items-baseline justify-between gap-6 hover:text-orange-deep">
                  <h3 className="bs-display font-display font-bold text-[clamp(1.15rem,1.8vw,1.4rem)] tracking-[-0.005em] text-ink flex-1">
                    {f.q}
                  </h3>
                  <span className="text-ink-quiet shrink-0 mt-1.5"><PlusMark /></span>
                </summary>
                <p className="pb-7 text-[15px] leading-[1.7] text-ink-soft max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — heavy black panel with phone as hero */}
      <section id="contact" className="bg-ink text-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-40 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange mb-6">§ Get a quote</p>
            <h2 className="bs-display font-display font-black text-[clamp(3.4rem,7.4vw,6rem)] text-paper">
              One number.
              <br />
              <span className="text-orange">One person.</span>
              <br />
              Ten years.
            </h2>
            <p className="mt-9 text-[16px] leading-[1.65] text-paper/75 max-w-[42ch]">
              Tell Jay what the room looks like and what&apos;s wrong with it. Most quotes
              happen the same day. Most jobs start the same week.
            </p>
          </div>

          <div className="lg:col-span-7">
            <a
              href={PHONE_HREF}
              className="block bg-paper text-ink p-10 lg:p-14 hover:bg-orange transition-colors"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-deep">Call Jay direct</p>
              <p className="bs-display font-display font-black text-[clamp(3.4rem,7vw,5.4rem)] text-ink tnum mt-4">{PHONE}</p>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-quiet mt-6">{HOURS} · {ADDRESS}</p>
            </a>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 text-[13.5px]">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55 mb-1.5">Address</dt>
                <dd className="text-paper">{ADDRESS}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55 mb-1.5">Hours</dt>
                <dd className="text-paper">{HOURS}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55 mb-1.5">Reviews</dt>
                <dd className="flex items-center gap-4">
                  <a href={YELP} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-orange underline decoration-paper/30 underline-offset-[5px] hover:decoration-orange">Yelp</a>
                  <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-orange underline decoration-paper/30 underline-offset-[5px] hover:decoration-orange">Nextdoor</a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55 mb-1.5">Service area</dt>
                <dd className="text-paper">Fresno · Clovis · Sanger</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Map — full-bleed */}
        <div>
          <iframe
            src={MAPS_EMBED}
            title="Jay's Handyman Service location"
            width="100%"
            height="380"
            style={{ border: 0, display: "block", filter: "invert(0.92) hue-rotate(180deg) grayscale(0.5)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-paper border-t border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-ink-quiet">
          <p className="bs-display font-display font-black text-[18px] text-ink uppercase">JAY&apos;S HANDYMAN SERVICE</p>
          <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase">Fresno, CA · Est. 2015 · One person</p>
          <a href={PHONE_HREF} className="font-mono tnum text-[12.5px] text-ink hover:text-orange-deep">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
