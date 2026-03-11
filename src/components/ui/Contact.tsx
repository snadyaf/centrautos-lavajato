import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Mensagem do site Centrautos:\n\n👤 Nome: ${formData.nome}\n📧 Email: ${formData.email}\n💬 Mensagem: ${formData.mensagem}`;
    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
    setFormData({ nome: "", email: "", mensagem: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary">
            Fale conosco
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-primary-foreground">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Telefone</h3>
                <p className="text-muted-foreground">(00) 00000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-primary-foreground">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">E-mail</h3>
                <p className="text-muted-foreground">contato@centrautos.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-primary-foreground">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Endereço</h3>
                <p className="text-muted-foreground">Rua Exemplo, 123 - Centro<br />Cidade - Estado</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card-gradient p-8 shadow-card"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-heading text-sm font-semibold text-foreground">Nome</label>
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
              <div>
                <label className="mb-2 block font-heading text-sm font-semibold text-foreground">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-sm font-semibold text-foreground">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 bg-cta-gradient rounded-xl px-8 py-4 font-heading text-base font-bold text-primary-foreground shadow-cta hover:opacity-90 transition-all duration-300"
            >
              <Send size={18} />
              {submitted ? "Mensagem enviada!" : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
