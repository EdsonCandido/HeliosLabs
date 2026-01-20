import type React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="border-y border-slate-800 bg-slate-950/90 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-helios-gold">
              Sobre a HeliosLabs
            </p>
            <h2
              id="about-title"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Engenharia de software com visão de produto e obsessão por qualidade.
            </h2>
          </header>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              A HeliosLabs é uma empresa de tecnologia especializada em desenvolvimento de software,
              soluções digitais e produtos escaláveis. Atuamos como parceiro técnico de times que
              precisam ganhar velocidade sem abrir mão de qualidade.
            </p>
            <p>
              Combinamos boas práticas de engenharia, arquitetura moderna e um olhar atento para
              experiência do usuário. Entregamos produtos que são fáceis de evoluir, monitorar e
              operar em produção.
            </p>
            <p>
              Trabalhamos com empresas em diferentes estágios — de startups a times estabelecidos —
              ajudando a desenhar, construir e escalar soluções digitais que geram impacto real nos
              resultados do negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

