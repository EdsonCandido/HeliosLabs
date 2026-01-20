import type React from 'react';

const services = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description:
      'Aplicações web modernas, responsivas e acessíveis, usando tecnologias como React e Next.js.',
    icon: (
      <svg
        className="h-6 w-6 text-helios-gold"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M4 5a2 2 0 0 1 2-2h3.5a1 1 0 1 1 0 2H6v12h12V9.5a1 1 0 0 1 2 0V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
        />
        <path
          fill="currentColor"
          d="M10.879 11.293a1 1 0 0 0-1.415 1.414l1.414 1.415a1 1 0 0 0 1.415 0l4.95-4.95a1 1 0 1 0-1.414-1.414l-4.243 4.242-1.707-1.707Z"
        />
      </svg>
    ),
  },
  {
    id: 'mobile',
    title: 'Aplicações Mobile',
    description:
      'Apps híbridos e PWAs com experiência nativa, performance alta e foco em conversão.',
    icon: (
      <svg
        className="h-6 w-6 text-helios-gold"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M8 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8Zm0 2h8a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1Zm-1 5h10v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7Zm5 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        />
      </svg>
    ),
  },
  {
    id: 'api',
    title: 'APIs & Integrações',
    description:
      'APIs bem definidas, documentadas e seguras, conectando seus produtos a serviços críticos.',
    icon: (
      <svg
        className="h-6 w-6 text-helios-gold"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M7 3a4 4 0 0 0-4 4v2.5A2.5 2.5 0 0 0 5.5 12H7v1a4 4 0 0 0 4 4h2v-2h-2a2 2 0 0 1-2-2v-1h4v-2H7V7a2 2 0 0 1 2-2h2V3H9a4 4 0 0 0-2 0ZM13 7v2h4v2a2 2 0 0 1-2 2h-2v2h2a4 4 0 0 0 4-4v-1h1.5A2.5 2.5 0 0 0 23 9.5V7a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4Z"
        />
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Pipelines de CI/CD, automação de deploy e observabilidade para produtos em produção.',
    icon: (
      <svg
        className="h-6 w-6 text-helios-gold"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M9.5 3A4.5 4.5 0 0 0 5.07 6.23 4 4 0 0 0 4 14h4.5a1 1 0 1 0 0-2H6a2 2 0 0 1-.21-3.99 1 1 0 0 0 .84-.74A2.5 2.5 0 0 1 9.5 5H10a1 1 0 0 0 .96-.73A2.5 2.5 0 0 1 15 5.5V7a1 1 0 0 0 1 1h1.5A2.5 2.5 0 0 1 20 10.5V11a1 1 0 1 0 2 0v-.5A4.5 4.5 0 0 0 17.5 6H17a4.5 4.5 0 0 0-4.26-3H9.5Z"
        />
        <path
          fill="currentColor"
          d="M7.5 15a1 1 0 0 0-1 1v1.086a2 2 0 0 0 .586 1.414l1.414 1.414A2 2 0 0 0 9.914 20H11.5a1 1 0 1 0 0-2H9.914l-1.414-1.414V16a1 1 0 0 0-1-1Zm9 0a1 1 0 0 0-1 1v.586L14.086 18H12.5a1 1 0 1 0 0 2h2.586a2 2 0 0 0 1.414-.586l1.414-1.414A2 2 0 0 0 18.5 16.086V16a1 1 0 0 0-1-1Z"
        />
      </svg>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="border-y border-slate-800 bg-slate-950/80 py-14 sm:py-16 lg:py-20"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-helios-gold">
            Serviços
          </p>
          <h2
            id="services-title"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Soluções digitais de ponta a ponta, pensadas para escalar com o seu negócio.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Atuamos em todo o ciclo de desenvolvimento: do discovery à operação em produção. Cada
            projeto é desenhado com foco em resultado, confiabilidade e experiência de uso.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-helios-gold/60 hover:ring-helios-gold/20"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/90 shadow-inner shadow-slate-900/60 ring-1 ring-slate-700/80">
                {service.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-50 sm:text-base">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

