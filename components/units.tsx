"use client";

import { useMemo, useState } from "react";
import {
  units,
  plan,
  fmt,
  waLink,
  categories,
  projectById,
  areaRange,
  type Category,
} from "@/lib/site";
import { Reveal, Heading } from "./ui";
import { track } from "@/lib/track";

const tabs: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "كل الوحدات" },
  ...categories.map((c) => ({ id: c.id, label: c.plural })),
];

export default function Units() {
  const [tab, setTab] = useState<"all" | Category>("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const f = tab === "all" ? units : units.filter((u) => u.category === tab);
    return [...f].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [tab, sort]);

  return (
    <section id="units" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="وحدات وأسعار وادي يم"
            sub="أسعار بداية كل نوع على نظام 8 سنوات. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي من المطور."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  tab === t.id
                    ? "bg-brass-2 font-semibold text-ink"
                    : "border border-paper/25 text-paper/75 hover:border-brass-2 hover:text-brass-2"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))}
            className="text-sm text-paper/60 underline underline-offset-8 hover:text-brass-2"
          >
            {sort === "asc" ? "الأقل سعرًا أولًا" : "الأعلى سعرًا أولًا"}
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((u, i) => {
            const p = projectById(u.project);
            return (
              <Reveal key={u.id} delay={(i % 3) * 50}>
                <article className="slab-dark flex h-full flex-col overflow-hidden">
                  <div className="relative h-48 w-full">
                    <img
                      src={u.image}
                      alt={`${u.title} — ${p.name}`}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                    <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">
                      {p.nameEn}
                    </span>
                    <span className="absolute bottom-3 start-3 rounded-full bg-brass-2 px-3 py-1 text-[11px] font-semibold text-ink">
                      {u.count === 1 ? "وحدة واحدة فقط" : `${u.count} وحدة فقط`}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="num text-xs tracking-[0.12em] text-paper/50">
                      {u.titleEn}
                    </p>
                    <h3 className="mt-1 text-xl text-paper">{u.title}</h3>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-ink/50 p-4 text-[13px]">
                      <div>
                        <p className="text-paper/50">المساحة</p>
                        <p className="num mt-1 text-paper">{areaRange(u)} م²</p>
                      </div>
                      <div>
                        <p className="text-paper/50">المقدم</p>
                        <p className="num mt-1 text-paper">{plan.down}%</p>
                      </div>
                      <div>
                        <p className="text-paper/50">التقسيط</p>
                        <p className="num mt-1 text-paper">{plan.years} سنوات</p>
                      </div>
                      <div>
                        <p className="text-paper/50">التسليم</p>
                        <p className="num mt-1 text-paper">{plan.delivery}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs text-paper/55">يبدأ من</p>
                      <p className="num mt-1 text-2xl text-brass-2">
                        {fmt(u.price)}{" "}
                        <span className="text-sm text-paper/60">EGP</span>
                      </p>
                    </div>

                    <div className="mt-auto flex gap-2 pt-6">
                      <a
                        href={waLink(
                          `مهتم بـ ${u.title} في ${p.name} — مدن رأس الحكمة. برجاء إرسال التفاصيل وخطة السداد.`
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
                        القسط
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 text-xs leading-6 text-paper/45">
          الأسعار المعروضة أسعار بداية للوحدة (Starting Price) وتختلف حسب
          المساحة والموقع والدور والتصميم.
        </p>
      </div>
    </section>
  );
}
