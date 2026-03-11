import { Droplets, Car, Sparkles, Shield, SprayCan, CircleDot } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Lavagem Completa",
    description: "Lavagem externa e interna detalhada, incluindo painel, bancos e porta-malas. Seu carro sai brilhando.",
    price: "A partir de R$ 60",
  },
  {
    icon: Sparkles,
    title: "Polimento & Cristalização",
    description: "Recuperação do brilho original da pintura com polimento técnico e camada de cristalização protetora.",
    price: "A partir de R$ 150",
  },
  {
    icon: Car,
    title: "Higienização Interna",
    description: "Limpeza profunda de estofados, carpetes e teto com produtos especializados e aspiração completa.",
    price: "A partir de R$ 120",
  },
  {
    icon: Shield,
    title: "Proteção Cerâmica",
    description: "Aplicação de revestimento cerâmico que protege a pintura contra riscos, chuva ácida e raios UV.",
    price: "A partir de R$ 300",
  },
  {
    icon: SprayCan,
    title: "Limpeza de Motor",
    description: "Desengordurante e limpeza técnica do compartimento do motor, com secagem e proteção.",
    price: "A partir de R$ 80",
  },
  {
    icon: CircleDot,
    title: "Revitalização de Pneus",
    description: "Limpeza, hidratação e pretinho nos pneus, devolvendo o aspecto de novo para as rodas.",
    price: "A partir de R$ 40",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary">
            O que oferecemos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Serviços profissionais de estética automotiva para manter seu veículo sempre impecável.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card-gradient p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cta-gradient text-primary-foreground shadow-cta/30">
                <service.icon size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <p className="mt-4 font-heading text-lg font-bold text-primary">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
