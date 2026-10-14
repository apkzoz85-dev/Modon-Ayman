"use client";

import { units, boulevard, fmt, waLink } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import { track } from "@/lib/track";

export default function Units() {
  return (
    <section id="units" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="أسعار شاليهات يم بوليفارد"
            sub="أسعار بداية كل نوع على نظام 8 سنوات. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي من المطور."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {units.map((u, i) => (
            <Reveal key={u.id} delay={i * 60}>
              <article className="slab-dark flex h-full flex-col overflow-hidden">
                <div className="relative h-60 w-full">
                  <img
                    src={u.image}
                    alt={`شاليه ${u.beds} — يم بوليفارد`}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                  <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">
                    YEMM BOULEVARD
                  </span>
                  <span className="absolute bottom-3 start-3 rounded-full bg-brass-2 px-3 py-1 text-[11px] font-semibold text-ink">
                    {u.count} وحدة فقط
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="num text-xs tracking-[0.14em] text-paper/50">
                    {u.bedsEn}
                  </p>
                  <h3 className="mt-1 text-2xl text-paper">شاليه {u.beds}</h3>

                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-ink/50 p-4 text-[13px] sm:grid-cols-4">
                    <div>
                      <p className="text-paper/50">المساحة</p>
                      <p className="num mt-1 text-paper">
                        {u.layouts[0].total}–{u.layouts[u.layouts.length - 1].total} م²
                      </p>
                    </div>
                    <div>
                      <p className="text-paper/50">المقدم</p>
                      <p className="num mt-1 text-paper">{boulevard.down}%</p>
                    </div>
                    <div>
                      <p className="text-paper/50">التقسيط</p>
                      <p className="num mt-1 text-paper">{boulevard.years} سنوات</p>
                    </div>
                    <div>
                      <p className="text-paper/50">التسليم</p>
                      <p className="num mt-1 text-paper">{boulevard.delivery}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {u.layouts.map((l) => (
                      <span
                        key={l.name}
                        className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/70"
                      >
                        {l.name}: <span className="num">{l.total}</span> م² · تراس{" "}
                        <span className="num">{l.terrace}</span> م²
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-xs text-paper/55">يبدأ من</p>
                    <p className="num mt-1 text-3xl text-brass-2">
                      {fmt(u.price)}{" "}
                      <span className="text-sm text-paper/60">EGP</span>
                    </p>
                  </div>

                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={waLink(
                        `مهتم بشاليه ${u.beds} في يم بوليفارد — مدن رأس الحكمة. برجاء إرسال التفاصيل وخطة السداد.`
                      )}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track("whatsapp")}
                      className="flex-1 rounded-full bg-brass-2 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
                    >
                      التفاصيل والحجز
                    </a>
                    <a
                      href="#plans"
                      className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2"
                    >
                      المسقط
                    </a>
                    <a
                      href="#calc"
                      className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2"
                    >
                      احسب القسط
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs leading-6 text-paper/45">
          الأسعار المعروضة أسعار بداية للوحدة (Starting Price) وتختلف حسب
          المساحة والموقع والدور ونوع الوحدة (قياسي / كورنر).
        </p>
      </div>
    </section>
  );
}
