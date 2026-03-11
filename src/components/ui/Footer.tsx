const Footer = () => {
  return (
    <footer className="bg-blue-dark text-blue-pale/70">
      <div className="container-max px-4 py-12 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-primary-foreground">
              CENTR<span className="text-accent">AUTOS</span>
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Lava Jato profissional com foco em qualidade, agilidade e satisfação do cliente.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground">Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#agendamento" className="hover:text-accent transition-colors">Agendamento</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Segunda a Sexta: 08h - 18h</li>
              <li>Sábado: 08h - 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-deep/50 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Centrautos Lava Jato. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5500000000000?text=Olá! Vim pelo site e gostaria de informações."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-primary-foreground shadow-lg hover:bg-green-600 transition-colors animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
