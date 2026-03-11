import { useState } from "react";
import { CalendarDays, Clock, Car, User, Phone } from "lucide-react";

const serviceOptions = [
  "Lavagem Completa",
  "Polimento & Cristalização",
  "Higienização Interna",
  "Proteção Cerâmica",
  "Limpeza de Motor",
  "Revitalização de Pneus",
];

const Scheduling = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    veiculo: "",
    servico: "",
    data: "",
    horario: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar um serviço:\n\n👤 Nome: ${formData.nome}\n📱 Telefone: ${formData.telefone}\n🚗 Veículo: ${formData.veiculo}\n🔧 Serviço: ${formData.servico}\n📅 Data: ${formData.data}\n⏰ Horário: ${formData.horario}`;
    
    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="agendamento" className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary">
            Praticidade
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Agende seu <span className="text-gradient">Serviço</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Preencha o formulário abaixo e envie direto pelo WhatsApp. Retornaremos em minutos!
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Nome */}
              <div className="sm:col-span-2">
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <User size={16} className="text-primary" /> Nome completo
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  maxLength={100}
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <Phone size={16} className="text-primary" /> Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  maxLength={20}
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>

              {/* Veículo */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <Car size={16} className="text-primary" /> Veículo
                </label>
                <input
                  type="text"
                  name="veiculo"
                  required
                  maxLength={100}
                  value={formData.veiculo}
                  onChange={handleChange}
                  placeholder="Ex: Honda Civic 2022"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>

              {/* Serviço */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <CalendarDays size={16} className="text-primary" /> Serviço
                </label>
                <select
                  name="servico"
                  required
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                >
                  <option value="">Selecione o serviço</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Horário */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <Clock size={16} className="text-primary" /> Horário preferido
                </label>
                <select
                  name="horario"
                  required
                  value={formData.horario}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                >
                  <option value="">Selecione</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>

              {/* Data */}
              <div className="sm:col-span-2">
                <label className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <CalendarDays size={16} className="text-primary" /> Data desejada
                </label>
                <input
                  type="date"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-cta-gradient rounded-xl px-8 py-4 font-heading text-base font-bold text-primary-foreground shadow-cta hover:opacity-90 transition-all duration-300"
            >
              {submitted ? "✅ Enviado! Redirecionando..." : "Enviar Agendamento via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
