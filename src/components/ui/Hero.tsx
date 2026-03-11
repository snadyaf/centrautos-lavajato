import heroImage from "@/assets/hero-carwash.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Carro sendo lavado no Centrautos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/90 via-transparent to-transparent" />
      </div>

      <div className="relative container-max px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-accent animate-fade-in">
            ✨ Lava Jato Premium
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in-up">
            Seu carro merece o
            <br />
            <span className="text-gradient">melhor cuidado</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-blue-pale/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Na Centrautos, oferecemos serviços de lavagem e estética automotiva com qualidade profissional. 
            Cuidamos do seu veículo como se fosse nosso.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#agendamento"
              className="bg-cta-gradient rounded-xl px-8 py-4 font-heading text-base font-bold text-primary-foreground shadow-cta hover:opacity-90 transition-all duration-300 animate-pulse-glow"
            >
              Agendar Serviço
            </a>
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-accent/40 bg-accent/10 px-8 py-4 font-heading text-base font-bold text-primary-foreground hover:bg-accent/20 transition-all duration-300"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V80H0V40Z" fill="hsl(210 30% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
