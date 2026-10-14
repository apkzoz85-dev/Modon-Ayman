import { infrastructure, investment, units, fmt } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export function Infrastructure() {
  return (
    <section className="bg-ink-2 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Infrastructure"
            title="بنية تحتية على مستوى مدينة، لا قرية ساحلية"
            sub="ما يميز رأس الحكمة عن باقي الساحل هو حجم البنية التحتية المخططة داخل المشروع نفسه."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {infrastructure.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div className="h-full border-t-2 border-brass-2/60 pt-5">
                <h3 className="text-lg text-paper">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-paper/65">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Investment() {
  return (
    <section id="investment" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="The Case"
            title="لماذا الآن تحديدًا"
            sub="أربع نقاط تحدد الفرق بين الشراء في المرحلة الأولى والشراء بعد اكتمال المدينة."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {investment.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="slab flex h-full gap-6 p-7 shadow-sm">
                <div className="shrink-0">
                  <p className="num text-3xl text-brass">{c.stat}</p>
                  <p className="mt-1 text-xs text-ink/50">{c.unit}</p>
                </div>
                <div>
                  <h3 className="text-lg text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-8 text-ink/70">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  const [a, b] = units;
  const rows: { label: string; a: string; b: string }[] = [
    { label: "يبدأ من", a: `${fmt(a.price)} جنيه`, b: `${fmt(b.price)} جنيه` },
    { label: "المساحة الإجمالية", a: `${a.layouts[0].total} – ${a.layouts[1].total} م²`, b: `${b.layouts[0].total} – ${b.layouts[1].total} م²` },
    { label: "التراسات", a: `${a.layouts[0].terrace} – ${a.layouts[1].terrace} م²`, b: `${b.layouts[0].terrace} – ${b.layouts[1].terrace} م²` },
    { label: "غرف النوم", a: "ماستر + غرفة", b: "ماستر بتراس + غرفتين" },
    { label: "غرفة مربية", a: "بحمام خاص", b: "بحمام خاص" },
    { label: "المتاح", a: `${a.count} وحدة`, b: `${b.count} وحدة` },
    { label: "السداد", a: "مقدم 5% · 8 سنوات", b: "مقدم 5% · 8 سنوات" },
    { label: "الأنسب لـ", a: "أقل نقطة دخول واستثمار إيجاري", b: "العائلات والإقامة الطويلة" },
  ];
  const head = [a, b].map((u) => ({ nameEn: u.bedsEn, name: `شاليه ${u.beds}` }));

  return (
    <section id="compare" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="Side by Side"
            title="غرفتين ولا 3 غرف؟"
            sub="مقارنة مباشرة بين النوعين قبل اتخاذ القرار."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-start">
              <thead>
                <tr>
                  <th className="w-40 border-b border-sand-2 p-4 text-start text-sm font-normal text-ink/50">
                    البند
                  </th>
                  <th className="border-b border-sand-2 p-4 text-start">
                    <span className="num block text-sm tracking-[0.14em] text-brass">
                      {head[0].nameEn}
                    </span>
                    <span className="mt-1 block text-base text-ink">
                      {head[0].name}
                    </span>
                  </th>
                  <th className="border-b border-sand-2 p-4 text-start">
                    <span className="num block text-sm tracking-[0.14em] text-brass">
                      {head[1].nameEn}
                    </span>
                    <span className="mt-1 block text-base text-ink">
                      {head[1].name}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="border-b border-sand-2 p-4 align-top text-sm text-ink/55">
                      {r.label}
                    </td>
                    <td className="border-b border-sand-2 p-4 align-top text-[15px] text-ink">
                      {r.a}
                    </td>
                    <td className="border-b border-sand-2 p-4 align-top text-[15px] text-ink">
                      {r.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <CtaWhatsapp
            message="محتاج استشارة: أنسب لي شاليه غرفتين ولا 3 غرف في يم بوليفارد — مدن رأس الحكمة؟"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
          >
            اطلب استشارة لتحديد الأنسب
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
