import { infrastructure, investment, units, fmt, categories, projectById, countBy, plan } from "@/lib/site";
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
  const cols = categories.map((c) => {
    const list = units.filter((u) => u.category === c.id);
    const totals = list.flatMap((u) => u.layouts.map((l) => l.total));
    const beds = list.map((u) => u.beds);
    return { c, list, minA: Math.min(...totals), maxA: Math.max(...totals), minB: Math.min(...beds), maxB: Math.max(...beds) };
  });
  const range = (a: number, b: number) => (a === b ? `${a}` : `${a} – ${b}`);
  const rows: { label: string; v: string[] }[] = [
    { label: "المشروع", v: cols.map((x) => projectById(x.list[0].project).name) },
    { label: "تبدأ من", v: cols.map((x) => `${fmt(Math.min(...x.list.map((u) => u.price)))} جنيه`) },
    { label: "المساحة", v: cols.map((x) => `${range(x.minA, x.maxA)} م²`) },
    { label: "غرف النوم", v: cols.map((x) => range(x.minB, x.maxB)) },
    { label: "المتاح", v: cols.map((x) => `${countBy(x.c.id)} وحدة`) },
    { label: "مميزات", v: ["تراسات خاصة · غرفة مربية · بوليفارد ريتيل", "جراج سيارتين · حديقة · مكتب / غرفة أرضي", "حمام سباحة خاص · غرفة سائق ومربية · ضيوف"] },
    { label: "السداد", v: cols.map(() => `مقدم ${plan.down}% · ${plan.years} سنوات`) },
    { label: "الأنسب لـ", v: ["أقل نقطة دخول واستثمار إيجاري", "العائلات ومساحة بسعر أقل من الفيلا", "خصوصية كاملة وسكن عائلي فاخر"] },
  ];

  return (
    <section id="compare" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="Side by Side"
            title="شاليه ولا تاون هاوس ولا فيلا؟"
            sub="مقارنة مباشرة بين الأنواع الثلاثة المطروحة في وادي يم."
          />
        </Reveal>

        <div className="mt-10 space-y-4 md:hidden">
          {cols.map((x, ci) => (
            <Reveal key={x.c.id} delay={ci * 50}>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-xl text-ink">{x.c.plural}</h3>
                <dl className="mt-3 divide-y divide-sand-2">
                  {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="shrink-0 text-ink/50">{r.label}</dt>
                      <dd className="text-end text-ink">{r.v[ci]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="hidden md:block">
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-start">
              <thead>
                <tr>
                  <th className="w-36 border-b border-sand-2 p-4 text-start text-sm font-normal text-ink/50">
                    البند
                  </th>
                  {cols.map((x) => (
                    <th key={x.c.id} className="border-b border-sand-2 p-4 text-start">
                      <span className="block text-lg text-ink">{x.c.plural}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="border-b border-sand-2 p-4 align-top text-sm text-ink/55">
                      {r.label}
                    </td>
                    {r.v.map((v, i) => (
                      <td key={i} className="border-b border-sand-2 p-4 align-top text-[15px] text-ink">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <CtaWhatsapp
            message="محتاج استشارة: أنسب لي شاليه ولا تاون هاوس ولا فيلا في وادي يم — مدن رأس الحكمة؟"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
          >
            اطلب استشارة لتحديد الأنسب
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
