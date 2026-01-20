import type React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-sm md:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="font-medium text-slate-200">
            HeliosLabs — Engenharia de software e produtos digitais.
          </p>
          <p className="text-[0.7rem] text-slate-500 sm:text-xs">
            © {currentYear} HeliosLabs. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              // href="https://github.com/helioslabs"
              href="https://github.com/EdsonCandido"
              aria-label="GitHub da HeliosLabs (placeholder)"
              className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200 transition hover:border-helios-gold/60 hover:text-helios-gold focus-visible:focus-ring"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/edson-caj"
              aria-label="LinkedIn da HeliosLabs (placeholder)"
              className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200 transition hover:border-helios-gold/60 hover:text-helios-gold focus-visible:focus-ring"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="mailto:edson@helioslabs.com.br"
            className="text-[0.7rem] text-slate-300 underline-offset-4 hover:text-helios-gold hover:underline sm:text-xs"
          >
            edson@helioslabs.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};

