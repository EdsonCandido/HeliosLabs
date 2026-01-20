import type React from 'react';

interface HeroProps {
  onPrimaryCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryCtaClick }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-gradient pb-20 pt-16 text-slate-50 sm:pt-20 lg:pb-28 lg:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-helios-gold/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-4 md:flex-row md:px-6 lg:px-8">
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-helios-gold/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-helios-gold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-helios-gold" />
            Tecnologia que ilumina resultados
          </p>

          <div className="space-y-4">
            <h1
              id="hero-title"
              className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.1rem]"
            >
              HeliosLabs —{' '}
              <span className="bg-gradient-to-r from-helios-gold via-helios-gold-soft to-amber-300 bg-clip-text text-transparent">
                Iluminando o futuro digital.
              </span>
            </h1>
            <p className="text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
              Desenvolvemos produtos digitais escaláveis, com foco em performance, qualidade de
              código e experiência de usuário. Da arquitetura à entrega, somos o parceiro técnico
              para levar sua solução ao próximo nível.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onPrimaryCtaClick}
              className="inline-flex items-center justify-center rounded-full bg-helios-gold px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-lg transition hover:bg-helios-gold-deep focus-visible:focus-ring"
            >
              Agendar conversa
            </button>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-helios-gold/70 hover:text-helios-gold focus-visible:focus-ring"
            >
              Ver serviços
            </a>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:grid-cols-3">
            <div>
              <dt className="font-medium text-slate-200">Foco em performance</dt>
              <dd className="text-slate-400">Arquiteturas otimizadas para escalar com segurança.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Código de alta qualidade</dt>
              <dd className="text-slate-400">Padrões modernos, testes e boas práticas.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Experiência premium</dt>
              <dd className="text-slate-400">UX centrada no usuário, com microinterações suaves.</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto w-full max-w-md shrink-0 md:max-w-sm lg:max-w-md"
          aria-hidden="true"
        >
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft-lg">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span className="ml-2 text-[0.68rem]">helioslabs/app-web</span>
              </span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
                live
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-[0.7rem] text-slate-400">
                <span>Build &amp; Deploy</span>
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  green
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-helios-gold via-amber-400 to-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-[0.7rem]">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-xs font-medium text-slate-100">
                    Lighthouse &gt; <span className="text-helios-gold">90</span>
                  </p>
                  <p className="mt-1 text-[0.65rem] text-slate-400">
                    Foco total em performance, acessibilidade e boas práticas de front-end.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-xs font-medium text-slate-100">Arquitetura escalável</p>
                  <p className="mt-1 text-[0.65rem] text-slate-400">
                    Pronta para crescer com o seu produto, sem surpresas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

