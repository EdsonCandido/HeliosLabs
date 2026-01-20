import type React from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 focus-visible:focus-ring rounded-full px-2 py-1"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-helios-gold via-helios-gold-soft to-amber-300 text-slate-950 text-sm font-semibold shadow-soft-lg">
            H
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">
            HeliosLabs
          </span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <li>
              <a
                href="#inicio"
                className="transition-colors hover:text-helios-gold focus-visible:focus-ring rounded-full px-2 py-1"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="transition-colors hover:text-helios-gold focus-visible:focus-ring rounded-full px-2 py-1"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="transition-colors hover:text-helios-gold focus-visible:focus-ring rounded-full px-2 py-1"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="transition-colors hover:text-helios-gold focus-visible:focus-ring rounded-full px-2 py-1"
              >
                Contato
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center rounded-full bg-helios-gold px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft-lg transition hover:bg-helios-gold-deep focus-visible:focus-ring"
          >
            Fale Conosco
          </button>
        </div>
      </nav>
    </header>
  );
};

