"use client";

import {
  units,
  plan,
  fmt,
  waLink,
  categories,
  projectById,
  areaRange,
  type Unit,
} from "@/lib/site";
import { Reveal, Heading } from "./ui";
import { track } from "@/lib/track";

const groupMeta: Record<string, { title: string; sub: string; cols: string }> = {
  chalet: {
    title: "شاليهات يم بوليفارد",
    sub: "على البوليفارد الرئيسي · تراسات خاصة · غرفة مربية",
    cols: "md:grid-cols-2",
  },
  townhouse: {
    title: "تاون هاوس وادي إيست",
    sub: "دورين · جراج سيارتين · حديقة خاصة",
    cols: "md:grid-cols-2",
  },
  villa: {
    title: "فلل وادي إيست المستقلة",
    sub: "حمام سباحة خاص · تصميم Spanish أو Mediterranean",
    cols: "md:grid-cols-3",
  },
};

function UnitCard({ u, wide }: { u: Unit; wide?: boolean }) {
  const p = projectById(u.project);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-paper/10">
      <div className={`relative aspect-[16/10] w-full overflow-hidden ${wide ? "md:aspect-[16/7]" : ""}`}>
        <img
          src={u.image}
          alt={`${u.title} — ${p.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/80 to-transparent" />
        <span className="absolute bottom-3 start-3 rounded-full bg-brass-2 px-3 py-1 text-[11px] font-semibold text-ink">
          {u.count === 1 ? "وحدة واحدة متبقية" : `${u.count} وحدة متاحة`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="num text-[11px] tracking-[0.12em] text-paper/45">
          {u.titleEn}
        </p>
        <h4 className="mt-1 text-xl text-paper">{u.title}</h4>

        <dl className="mt-4 grid grid-cols-3 divide-x divide-x-reverse divide-paper/10 rounded-xl bg-ink/40 py-3 text-center">
          <div className="px-2">
            <dt className="text-[11px] text-paper/50">المساحة</dt>
            <dd className="num mt-1 text-[15px] text-paper">{areaRange(u)}</dd>
            <dd className="text-[10px] text-paper/40">م²</dd>
          </div>
          <div className="px-2">
            <dt className="text-[11px] text-paper/50">غرف النوم</dt>
            <dd className="num mt-1 text-[15px] text-paper">{u.beds}</dd>
          </div>
          <div className="px-2">
            <dt className="text-[11px] text-paper/50">
              {u.layouts.length > 1 ? "التصميمات" : "النوع"}
            </dt>
            <dd className="mt-1 text-[13px] leading-5 text-paper">
              {u.layouts.length > 1 ? u.layouts.length : u.layouts[0].name}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-paper/55">يبدأ من</p>
            <p className="num mt-1 text-2xl text-brass-2">
              {fmt(u.price)}{" "}
              <span className="text-xs text-paper/55">EGP</span>
            </p>
          </div>
          <a
            href="#plans"
            className="shrink-0 text-xs text-paper/60 underline underline-offset-4 hover:text-brass-2"
          >
            المسقط
          </a>
        </div>

        <a
          href={waLink(
            `مهتم بـ ${u.title} في ${p.name} — مدن رأس الحكمة. برجاء إرسال التفاصيل وخطة السداد.`
          )}
          target="_blank"
          rel="noopener"
          onClick={() => track("whatsapp")}
          className="mt-5 block rounded-full bg-brass-2 py-3 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
        >
          التفاصيل والحجز
        </a>
      </div>
    </article>
  );
}

export default function Units() {
  return (
    <section id="units" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="وحدات وأسعار وادي يم"
            sub="أسعار بداية كل نوع. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي من المطور."
          />
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-paper/15 text-center">
            {[
              [`${plan.down}%`, "مقدم"],
              [`${plan.years} سنوات`, "تقسيط"],
              [plan.delivery, "استلام"],
            ].map(([v, k], i) => (
              <div
                key={k}
                className={`px-3 py-4 ${i ? "border-s border-paper/15" : ""}`}
              >
                <p className="num text-xl text-brass-2 md:text-2xl">{v}</p>
                <p className="mt-1 text-xs text-paper/55">{k}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-14">
          {categories.map((c) => {
            const list = units
              .filter((u) => u.category === c.id)
              .sort((a, b) => a.price - b.price);
            const g = groupMeta[c.id];
            return (
              <div key={c.id}>
                <div className="flex flex-wrap items-end justify-between gap-2 border-b border-paper/10 pb-4">
                  <div>
                    <h3 className="text-2xl text-paper">{g.title}</h3>
                    <p className="mt-1 text-sm text-paper/55">{g.sub}</p>
                  </div>
                  <p className="text-xs text-paper/45 md:hidden">
                    اسحب لعرض الكل ←
                  </p>
                </div>

                {/* موبايل: كاروسيل أفقي — ديسكتوب: جريد */}
                <div
                  className={`-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 ${g.cols}`}
                >
                  {list.map((u) => (
                    <div
                      key={u.id}
                      className={`w-[82%] shrink-0 snap-start md:w-auto ${
                        list.length === 1 ? "w-full" : ""
                      }`}
                    >
                      <UnitCard u={u} wide={list.length === 2} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-xs leading-6 text-paper/45">
          الأسعار المعروضة أسعار بداية للوحدة (Starting Price) وتختلف حسب
          المساحة والموقع والدور والتصميم.
        </p>
      </div>
    </section>
  );
}
