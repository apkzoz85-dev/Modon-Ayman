"use client";

import { useState } from "react";
import { projects, units, plan, fmt, categories, type Unit } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function Products() {
  return (
    <>
      <section id="products" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Heading
              eyebrow="Now Selling · Wadi Yemm"
              title="شاليهات وتاون هاوس وفلل في وادي يم"
              sub="طرحين داخل نفس المنطقة: شاليهات على البوليفارد الرئيسي، وتاون هاوس وفلل مستقلة في وادي إيست. نفس نظام السداد للكل."
            />
          </Reveal>

          <div className="mt-14 space-y-20">
            {projects.map((p, idx) => {
              const list = units.filter((u) => u.project === p.id);
              return (
                <div
                  key={p.id}
                  className="grid items-center gap-12 lg:grid-cols-2"
                >
                  <Reveal className={idx % 2 ? "lg:order-2" : ""}>
                    <p className="eyebrow">{p.eyebrow}</p>
                    <h3 className="num mt-3 text-2xl tracking-[0.14em] text-ink md:text-3xl">
                      {p.nameEn}
                    </h3>
                    <p className="mt-2 text-2xl text-ink md:text-3xl">
                      {p.tagline}
                    </p>
                    <div className="ribbon-rule my-6 w-28" />
                    <p className="text-[16px] leading-9 text-ink/70">{p.intro}</p>
                    <ul className="mt-6 space-y-2.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[15px] text-ink/75">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 overflow-hidden rounded-lg border border-sand-2">
                      {list.map((u) => (
                        <a
                          key={u.id}
                          href="#units"
                          className="flex items-center justify-between gap-4 border-b border-sand-2 bg-white/60 px-5 py-3 text-[15px] transition last:border-b-0 hover:bg-sand/40"
                        >
                          <span className="text-ink">
                            {u.title}
                            <span className="ms-2 text-xs text-ink/50">
                              {u.count} وحدة
                            </span>
                          </span>
                          <span className="num text-brass">
                            {fmt(u.price)}
                          </span>
                        </a>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-ink/50">
                      مقدم {plan.down}% · تقسيط {plan.years} سنوات · أسعار بداية
                    </p>
                  </Reveal>

                  <Reveal delay={70} className={idx % 2 ? "lg:order-1" : ""}>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="frame col-span-2">
                        <img
                          src={p.images[0]}
                          alt={`${p.name} — وادي يم رأس الحكمة`}
                          loading="lazy"
                          className="h-64 w-full object-cover md:h-80"
                        />
                      </div>
                      {p.images.slice(1).map((src) => (
                        <div key={src} className="frame">
                          <img
                            src={src}
                            alt={p.name}
                            loading="lazy"
                            className="h-40 w-full object-cover md:h-48"
                          />
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FloorPlans />
    </>
  );
}

function FloorPlans() {
  const [uid, setUid] = useState(units[0].id);
  const [li, setLi] = useState(0);
  const u: Unit = units.find((x) => x.id === uid)!;
  const l = u.layouts[Math.min(li, u.layouts.length - 1)];
  const two = l.interior != null;

  return (
    <section id="plans" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="Floor Plans"
            title="المساقط والمساحات"
            sub="المساقط الرسمية من كتيب المطور. الشاليهات بتصميم قياسي وكورنر، والفلل بتصميمين Spanish و Mediterranean."
          />
        </Reveal>

        <div className="mt-9 space-y-3">
          {categories.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center gap-2">
              <span className="w-20 shrink-0 text-xs text-ink/50">{c.plural}</span>
              {units
                .filter((x) => x.category === c.id)
                .map((x) => (
                  <button
                    key={x.id}
                    onClick={() => {
                      setUid(x.id);
                      setLi(0);
                    }}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      uid === x.id
                        ? "bg-ink font-semibold text-paper"
                        : "border border-sand-2 text-ink/70 hover:border-brass"
                    }`}
                  >
                    {x.title}
                  </button>
                ))}
            </div>
          ))}
          {u.layouts.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="w-20 shrink-0 text-xs text-ink/50">التصميم</span>
              {u.layouts.map((x, i) => (
                <button
                  key={x.name}
                  onClick={() => setLi(i)}
                  className={`rounded-full px-5 py-2 text-sm transition ${
                    l === x
                      ? "bg-brass font-semibold text-paper"
                      : "border border-sand-2 text-ink/70 hover:border-brass"
                  }`}
                >
                  {x.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="slab flex items-center justify-center bg-white p-5 shadow-sm lg:col-span-3">
            <img
              key={l.plan}
              src={l.plan}
              alt={`مسقط ${u.title} ${l.name} — وادي يم رأس الحكمة`}
              className="max-h-[620px] w-auto object-contain"
            />
          </div>

          <div className="slab-dark p-7 lg:col-span-2">
            <p className="num text-sm tracking-[0.14em] text-brass-2">
              {u.titleEn} · {l.nameEn}
            </p>
            <h3 className="mt-2 text-2xl text-paper">
              {u.title}
              {u.layouts.length > 1 && ` — ${l.name}`}
            </h3>
            <div
              className={`mt-6 grid gap-px overflow-hidden rounded-lg bg-paper/10 text-center ${
                two ? "grid-cols-3" : "grid-cols-2"
              }`}
            >
              {(two
                ? [
                    ["داخلي م²", l.interior],
                    ["تراسات م²", l.terrace],
                    ["إجمالي م²", l.total],
                  ]
                : [
                    ["إجمالي م²", l.total],
                    ["غرف النوم", u.beds],
                  ]
              ).map(([k, v]) => (
                <div key={String(k)} className="bg-ink/70 px-3 py-4">
                  <p className="num text-2xl text-brass-2">{v}</p>
                  <p className="mt-1 text-xs text-paper/55">{k}</p>
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
              message={`مهتم بـ ${u.title} (${l.name} ${l.total} م²) في وادي يم — مدن رأس الحكمة. برجاء إرسال المسقط والأسعار وخطة السداد.`}
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
