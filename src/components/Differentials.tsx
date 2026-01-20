import type React from 'react';

const differentials = [
  {
    id: 'performance',
    title: 'Performance',
    description:
      'Arquiteturas otimizadas, análise de métricas e foco em carregamento rápido desde o primeiro acesso.',
  },
  {
    id: 'code-quality',
    title: 'Qualidade de código',
    description:
      'Padrões modernos, revisões técnicas e testes automatizados para garantir manutenibilidade.',
  },
  {
    id: 'scalability',
    title: 'Escalabilidade',
    description:
      'Soluções pensadas para crescer com o produto, evitando gargalos futuros e reescritas desnecessárias.',
  },
  {
    id: 'security',
    title: 'Segurança',
    description:
      'Boas práticas de segurança desde o front-end até as integrações, com cuidado especial a dados sensíveis.',
  },
  {
    id: 'ux',
    title: 'Experiência do usuário',
    description:
      'Interfaces intuitivas, acessíveis e consistentes, reduzindo atrito e aumentando conversão.',
  },
];

export const Differentials: React.FC = () => {
  return (
    <section
      aria-labelledby="differentials-title"
      className="bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-helios-gold">
            Diferenciais
          </p>
          <h2
            id="differentials-title"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Tecnologia com rigor técnico, foco em negócio e cuidado com cada detalhe.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Mais do que entregar software, buscamos construir parcerias de longo prazo, com
            transparência, previsibilidade e excelência em cada entrega.
          </p>
        </header>

        <dl className="mt-8 grid gap-5 text-sm text-slate-200 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-helios-gold/50 hover:bg-slate-900"
            >
              <dt className="text-sm font-semibold text-slate-50">{item.title}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

