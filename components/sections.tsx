import { location, amenities, faqs } from "@/lib/site";
import { Reveal, Heading } from "./ui";

export function Location() {
  return (
    <section id="location" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading
            eyebrow="The Location"
            title={location.headline}
            sub={location.body}
          />
          <ul className="mt-8 space-y-4">
            {location.points.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between border-b border-sand-2 pb-3"
              >
                <span className="text-[15px] text-ink">{p.name}</span>
                <span className="text-sm text-ink/60">{p.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={70}>
          <div className="frame h-full min-h-[340px]">
            <img
              src="/images/masterplan.webp"
              alt="الماستر بلان الرسمي لوادي يم رأس الحكمة"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="The Lifestyle"
            title="مدينة كاملة الخدمات طوال العام"
            sub="مرافق بحرية ورياضية وترفيهية تخدم السكان والزوار على مدار السنة، لا موسمًا واحدًا."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <div className="slab h-full p-6 shadow-sm">
                <h3 className="text-lg text-ink">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-ink/70">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const shots = [
  { src: "/images/blvd-courtyard.webp", alt: "فناء يم بوليفارد وحمام السباحة" },
  { src: "/images/blvd-park.webp", alt: "حدائق يم بوليفارد" },
  { src: "/images/blvd-pool-2.webp", alt: "حمام سباحة بين مباني يم بوليفارد" },
  { src: "/images/blvd-garden.webp", alt: "ممرات مشاة مشجّرة" },
  { src: "/images/we-lagoon.webp", alt: "لاجون وادي إيست" },
  { src: "/images/villa-5br-med.webp", alt: "فيلا Mediterranean بحمام سباحة خاص" },
  { src: "/images/we-pool.webp", alt: "حمام سباحة خاص في فلل وادي إيست" },
  { src: "/images/th-3br-b.webp", alt: "تاون هاوس وادي إيست" },
  { src: "/images/int-villa-living.webp", alt: "ليفينج فيلا وادي إيست" },
  { src: "/images/int-th-dining.webp", alt: "سفرة ومطبخ تاون هاوس" },
  { src: "/images/int-2br-kitchen.webp", alt: "مطبخ شاليه يم بوليفارد" },
  { src: "/images/blvd-sunset.webp", alt: "يم بوليفارد وقت الغروب" },
  { src: "/images/we-streets.webp", alt: "شوارع وادي إيست المشجّرة" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Gallery"
            title="من داخل وادي يم"
            sub="صور رسمية من كتيبات المطور: يم بوليفارد ووادي إيست."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 40}>
              <div className="frame">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-paper py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <Heading eyebrow="FAQ" title="أسئلة متكررة" />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="slab group p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-[17px] text-ink marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-4 text-[15px] leading-8 text-ink/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
