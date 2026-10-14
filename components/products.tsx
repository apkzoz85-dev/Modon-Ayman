"use client";

import { useState } from "react";
import { boulevard, units, fmt } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function Products() {
  return (
    <>
      <section id="products" className="bg-paper py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Yemm Boulevard Apartments</p>
            <h2 className="num mt-3 text-2xl tracking-[0.14em] text-ink md:text-3xl">
              {boulevard.nameEn}
            </h2>
            <p className="mt-2 text-2xl text-ink md:text-3xl">
              {boulevard.tagline}
            </p>
            <div className="ribbon-rule my-6 w-28" />
            <p className="text-[16px] leading-9 text-ink/70">{boulevard.intro}</p>
            <ul className="mt-6 space-y-2.5">
              {boulevard.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-sand-2 pt-5">
              <div>
                <p className="text-xs text-ink/55">المقدم</p>
                <p className="num mt-1 text-lg text-ink">{boulevard.down}%</p>
              </div>
              <div>
                <p className="text-xs text-ink/55">التقسيط</p>
                <p className="num mt-1 text-lg text-ink">
                  {boulevard.years} <span className="text-sm text-ink/60">سنوات</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-ink/55">المتاح</p>
                <p className="mt-1 text-[15px] text-ink">
                  {units.map((u) => `${u.count} ${u.beds}`).join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="grid grid-cols-2 gap-3">
              <div className="frame col-span-2">
                <img
                  src="/images/blvd-street.webp"
                  alt="بوليفارد وادي يم — ممرات مشاة وريتيل"
                  className="h-64 w-full object-cover md:h-80"
                />
              </div>
              <div className="frame">
                <img
                  src="/images/blvd-pool.webp"
                  alt="حمام سباحة يم بوليفارد"
                  loading="lazy"
                  className="h-40 w-full object-cover md:h-48"
                />
              </div>
              <div className="frame">
                <img
                  src="/images/blvd-terrace.webp"
                  alt="تراس شاليه يم بوليفارد"
                  loading="lazy"
                  className="h-40 w-full object-cover md:h-48"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FloorPlans />
    </>
  );
}

function FloorPlans() {
  const [uid, setUid] = useState(units[0].id);
  const [li, setLi] = useState(0);
  const u = units.find((x) => x.id === uid)!;
  const l = u.layouts[li];

  return (
    <section id="plans" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="Floor Plans"
            title="المساقط والمساحات"
            sub="كل نوع متاح بتصميمين: قياسي وكورنر. الكورنر بنفس التقسيم مع تراسات أكبر."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-2">
          {units.map((x) => (
            <button
              key={x.id}
              onClick={() => {
                setUid(x.id);
                setLi(0);
              }}
              className={`rounded-full px-5 py-2 text-sm transition ${
                uid === x.id
                  ? "bg-ink font-semibold text-paper"
                  : "border border-sand-2 text-ink/70 hover:border-brass"
              }`}
            >
              شاليه {x.beds}
            </button>
          ))}
          <span className="mx-2 hidden w-px bg-sand-2 sm:block" />
          {u.layouts.map((x, i) => (
            <button
              key={x.name}
              onClick={() => setLi(i)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                li === i
                  ? "bg-brass font-semibold text-paper"
                  : "border border-sand-2 text-ink/70 hover:border-brass"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="slab flex items-center justify-center bg-white p-5 shadow-sm lg:col-span-3">
            <img
              key={l.plan}
              src={l.plan}
              alt={`مسقط شاليه ${u.beds} ${l.name} — يم بوليفارد`}
              className="max-h-[560px] w-auto object-contain"
            />
          </div>

          <div className="slab-dark p-7 lg:col-span-2">
            <p className="num text-sm tracking-[0.14em] text-brass-2">
              {u.bedsEn} · {l.name === "كورنر" ? "CORNER" : "STANDARD"}
            </p>
            <h3 className="mt-2 text-2xl text-paper">
              شاليه {u.beds} — {l.name}
            </h3>
            <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-paper/10 text-center">
              {[
                ["داخلي", l.interior],
                ["تراسات", l.terrace],
                ["إجمالي", l.total],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink/70 px-3 py-4">
                  <p className="num text-2xl text-brass-2">{v}</p>
                  <p className="mt-1 text-xs text-paper/55">{k} م²</p>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2.5">
              {u.rooms.map((r) => (
                <li key={r} className="flex gap-3 text-[15px] text-paper/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-2" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-paper/10 pt-5">
              <p className="text-xs text-paper/55">يبدأ من</p>
              <p className="num mt-1 text-3xl text-brass-2">
                {fmt(u.price)} <span className="text-sm text-paper/60">EGP</span>
              </p>
            </div>
            <CtaWhatsapp
              message={`مهتم بشاليه ${u.beds} (${l.name} ${l.total} م²) في يم بوليفارد — مدن رأس الحكمة. برجاء إرسال المسقط والأسعار وخطة السداد.`}
              className="mt-6 inline-block rounded-full bg-brass-2 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brass-2/85"
            >
              اطلب المسقط والمتاح
            </CtaWhatsapp>
          </div>
        </div>
      </div>
    </section>
  );
}
