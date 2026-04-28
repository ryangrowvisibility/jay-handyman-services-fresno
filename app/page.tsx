import Script from "next/script";

const PHONE = "(559) 358-5216";
const PHONE_HREF = "tel:+15593585216";
const ADDRESS = "3075 W Ashlan Ave #26, Fresno, CA 93722";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Jay%20Handyman%20Services&query_place_id=ChIJ_-pkcklnlIARftK-eV9Zi8s";

const services = [
  { n: "01", t: "Plumbing repairs",     d: "Leaks, fixtures, supply & drain — diagnosed and repaired in one visit." },
  { n: "02", t: "Electrical work",       d: "15 years in the field. Outlets, switches, ceiling fan installs, troubleshooting." },
  { n: "03", t: "Drywall & tile",        d: "Patching, finishing, and bathroom tile work — finished cleanly, often ahead of schedule." },
  { n: "04", t: "Wall painting",         d: "Touch-ups and full rooms — interior wall painting on tight timelines." },
  { n: "05", t: "Ceiling fans & assembly", d: "New ceiling fan installs, indoor furniture assembly, fixture mounting." },
  { n: "06", t: "Gutters & power wash",  d: "Gutter cleaning and exterior power washing for routine home maintenance." },
];

const ld = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Jay Handyman Services",
  "telephone": "+15593585216",
  "address": { "@type": "PostalAddress", "streetAddress": "3075 W Ashlan Ave #26", "addressLocality": "Fresno", "addressRegion": "CA", "postalCode": "93722", "addressCountry": "US" },
  "areaServed": "Fresno and surrounding areas",
  "description": "Jay Handyman Service LLC. 10 years serving Fresno. Owner brings 15 years electrical experience plus 8+ years handyman work. Plumbing, electrical, drywall, painting, fans, gutters, tile.",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "13" }
};

function Wrench({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M22 4a6 6 0 0 0-5.6 8.1L4 24.5 7.5 28l12.4-12.4A6 6 0 1 0 22 4Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Script id="ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <header className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]">
          <div className="flex items-center gap-2 text-ink">
            <Wrench className="h-4 w-4 text-signal" />
            <span>Jay Handyman · Fresno</span>
          </div>
          <a href={PHONE_HREF} className="text-ink hover:text-signal">{PHONE}</a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-20 md:pt-28 pb-16 md:pb-24">
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft mb-8 fade-up">
          Fresno · est. 2014 · 13 Yelp reviews
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-ink leading-[0.95] tracking-tight fade-up"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)", animationDelay: "60ms" }}>
          One person.<br/>
          One number.<br/>
          <span className="italic text-signal">Most of the list.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed fade-up" style={{ animationDelay: "180ms" }}>
          Jay Handyman Service has been quietly working through Fresno&rsquo;s
          home repair backlog for ten years. Plumbing, electrical, drywall,
          ceiling fans, gutters, paint, tile — punctual, thorough, finished
          early more often than not.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 fade-up" style={{ animationDelay: "260ms" }}>
          <a href={PHONE_HREF}
             className="inline-flex items-center gap-3 bg-ink text-canvas px-7 py-4 rounded-full text-base hover:bg-signal transition-colors active:scale-[0.97]">
            Call {PHONE}
          </a>
          <a href="#services"
             className="inline-flex items-center gap-3 border border-ink/30 px-7 py-4 rounded-full text-base hover:border-ink hover:bg-canvas-soft transition-colors">
            See the list
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-line pt-8 gap-y-8">
          {[
            { k: "Years serving Fresno", v: "10" },
            { k: "Yelp reviews",         v: "13" },
            { k: "Years electrical exp.", v: "15" },
            { k: "Trades on the truck",  v: "10+" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft">{s.k}</p>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ink mt-2">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-canvas">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-canvas/60">From a customer</p>
          <blockquote className="mt-6 font-[family-name:var(--font-display)] leading-[1.05] text-canvas"
                      style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)" }}>
            &ldquo;He installed our ceiling fans, painted the rooms, and finished the
            bathroom tile <span className="italic text-copper">before the day we&rsquo;d planned</span>.
            Professional, timely, thorough.&rdquo;
          </blockquote>
          <p className="mt-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-canvas/50">
            Yelp review · paraphrased
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">The list</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-ink leading-[1.02]"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.5rem)" }}>
              What can you cross off today?
            </h2>
            <p className="mt-6 text-ink-soft text-base">
              Most home repair lists have six things on them. Jay covers most of
              them in a single visit — that&rsquo;s the whole reason this
              business exists.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-line border border-line">
            {services.map((s) => (
              <article key={s.n} className="bg-canvas p-7 hover:bg-canvas-soft transition-colors">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-signal">No. {s.n}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-ink">{s.t}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas-soft border-y border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">About Jay Handyman</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-ink leading-[1.02]"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.5rem)" }}>
              An electrician&rsquo;s eye, a handyman&rsquo;s hands.
            </h2>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed">
              The owner of Jay Handyman spent fifteen years as an electrician
              before adding the rest of the trades. That foundation is why the
              wiring on a fan install, the GFI on a bathroom remodel, or a
              flickering circuit in the garage isn&rsquo;t a side note — it&rsquo;s
              the easiest part of the job.
            </p>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">
              Ten years later, the company runs out of West Ashlan in Fresno
              and serves homes across the city and surrounding areas.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="bg-canvas border-2 border-ink/15 p-6 shadow-[6px_8px_0_oklch(0.18_0.018_250_/_0.08)]">
              <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft border-b border-line pb-3">
                <span>Today&rsquo;s ticket</span><span>JHS</span>
              </div>
              <ul className="mt-5 space-y-3 font-[family-name:var(--font-mono)] text-[13px]">
                {[
                  "Replace bathroom faucet cartridge",
                  "Hang two ceiling fans (master, guest)",
                  "Patch & paint hallway drywall",
                  "Re-tile shower threshold",
                  "Power-wash front walk",
                ].map((line, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-4 w-4 border border-ink/40 rounded-sm flex items-center justify-center text-signal">
                      {i < 3 ? "✓" : ""}
                    </span>
                    <span className={i < 3 ? "line-through text-ink-soft" : "text-ink"}>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-line font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                3 of 5 done — &ldquo;before expected&rdquo;
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">Get on the schedule</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-ink leading-[0.98]"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}>
              Easiest call you&rsquo;ll make this week.
            </h2>
            <p className="mt-8 text-ink-soft text-lg max-w-md">
              Read your list off — Jay will tell you what fits in one visit and
              what needs a second day. No upsell.
            </p>
            <a href={PHONE_HREF}
               className="mt-10 inline-flex items-center gap-3 bg-ink text-canvas px-7 py-4 rounded-full text-base hover:bg-signal transition-colors active:scale-[0.97]">
              Call {PHONE}
            </a>
          </div>
          <aside className="md:col-span-5 bg-canvas-soft border border-line rounded-md p-6">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">Office</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">{ADDRESS}</p>
            <div className="mt-6 pt-4 border-t border-line space-y-2 font-[family-name:var(--font-mono)] text-sm">
              <p className="text-ink-soft">Phone</p>
              <a className="text-ink hover:text-signal" href={PHONE_HREF}>{PHONE}</a>
            </div>
            <a href={MAPS} target="_blank" rel="noopener"
               className="mt-6 inline-flex items-center gap-2 text-ink underline underline-offset-4 hover:text-signal text-sm">
              Get directions →
            </a>
          </aside>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-wrap items-center justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-ink-soft gap-4">
          <p>Jay Handyman Service LLC · Fresno, CA · since 2014</p>
          <div className="flex items-center gap-5">
            <a href="https://www.yelp.com/biz/jay-s-handyman-service-fresno" target="_blank" rel="noopener" className="hover:text-ink">Yelp</a>
            <a href="https://nextdoor.com/pages/jay-handyman-service-llc-fresno-ca/" target="_blank" rel="noopener" className="hover:text-ink">Nextdoor</a>
            <a href={PHONE_HREF} className="hover:text-ink">{PHONE}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
