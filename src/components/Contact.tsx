import type React from 'react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="bg-slate-950 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-start">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-helios-gold">
              Contato
            </p>
            <h2
              id="contact-title"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Vamos conversar sobre o seu projeto.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Preencha os dados abaixo com um breve contexto e retornaremos com os próximos passos.
              Se preferir, envie um e-mail diretamente para{' '}
              <a
                href="mailto:contato@helioslabs.com.br"
                className="font-medium text-helios-gold underline-offset-4 hover:underline"
              >
                contato@helioslabs.com.br
              </a>
              .
            </p>
          </header>

          <form
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft-lg sm:p-6"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);

              const name = (data.get('name') || '').toString();
              const email = (data.get('email') || '').toString();
              const company = (data.get('company') || '').toString();
              const message = (data.get('message') || '').toString();

              const textLines = [
                'Olá, gostaria de falar com a HeliosLabs sobre um projeto.',
                '',
                name && `Nome: ${name}`,
                email && `E-mail: ${email}`,
                company && `Empresa: ${company}`,
                '',
                'Contexto do projeto:',
                message || '(sem detalhes adicionais)',
              ].filter(Boolean);

              const text = encodeURIComponent(textLines.join('\n'));
              const phone = '5584996459911'; // +55 84 99645-9911
              const url = `https://wa.me/${phone}?text=${text}`;

              // window.location.href = url;
              window.open(url, '_blank');
            }}
            aria-label="Formulário de contato comercial"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-100 sm:text-sm"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus-visible:focus-ring placeholder:text-slate-500"
                placeholder="Como podemos te chamar?"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-100 sm:text-sm"
              >
                E-mail profissional
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus-visible:focus-ring placeholder:text-slate-500"
                placeholder="voce@empresa.com"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="company"
                className="text-xs font-medium text-slate-100 sm:text-sm"
              >
                Empresa (opcional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus-visible:focus-ring placeholder:text-slate-500"
                placeholder="Nome da empresa ou projeto"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-100 sm:text-sm"
              >
                Contexto do projeto
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus-visible:focus-ring placeholder:text-slate-500"
                placeholder="Conte brevemente sobre o produto, objetivos e principais desafios."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-helios-gold px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-lg transition hover:bg-helios-gold-deep focus-visible:focus-ring sm:w-auto"
            >
              Enviar mensagem
            </button>

            <p className="text-[0.7rem] text-slate-400">
              Ao enviar, abriremos uma conversa com a HeliosLabs no WhatsApp usando os dados
              informados acima.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

