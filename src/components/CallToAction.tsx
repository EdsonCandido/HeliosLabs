import type React from 'react';

interface CallToActionProps {
  onContactClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onContactClick }) => {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-helios-gold/35 bg-slate-950/80 p-6 shadow-soft-lg sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-helios-gold">
              Chamada para ação
            </p>
            <h2
              id="cta-title"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Pronto para iluminar o seu próximo produto digital?
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Conte um pouco sobre o seu contexto e desafios. Vamos avaliar juntos o melhor caminho
              para evoluir sua solução com segurança, performance e foco em resultado.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full bg-helios-gold px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-lg transition hover:bg-helios-gold-deep focus-visible:focus-ring"
            >
              Fale com o time
            </button>
            <p className="text-xs text-slate-400 sm:max-w-[15rem]">
              Resposta em até <span className="font-semibold text-helios-gold">1 dia útil</span> em
              horário comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

