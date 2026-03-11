import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#agendamento", label: "Agendamento" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-dark/95 backdrop-blur-md border-b border-blue-deep/50">
      <div className="container-max flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#inicio" className="font-heading text-2xl font-extrabold tracking-tight text-primary-foreground">
          CENTR<span className="text-accent">AUTOS</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-blue-pale hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta-gradient rounded-lg px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground shadow-cta hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-dark/98 backdrop-blur-md border-t border-blue-deep/50 animate-fade-in">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-blue-pale hover:bg-blue-deep/50 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um serviço."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-cta-gradient rounded-lg px-4 py-3 text-center font-heading text-sm font-bold text-primary-foreground shadow-cta"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
