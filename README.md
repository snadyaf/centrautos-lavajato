# 🚗 Centrautos - Lava Jato & Estética Automotiva

> Site institucional responsivo para o lava jato **Centrautos**, desenvolvido com React, TypeScript e Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

## 📋 Sobre o Projeto

Site profissional e responsivo para um lava jato, com foco em conversão de clientes e agendamento de serviços. Desenvolvido como projeto pessoal do curso de Desenvolvimento Fullstack, aplicando boas práticas de componentização, design system e responsividade.

### ✨ Funcionalidades

- **Landing Page responsiva** com design moderno em tons de azul
- **Catálogo de serviços** com cards detalhados (preços, descrições)
- **Formulário de agendamento** com integração direta ao WhatsApp
- **Formulário de contato** para envio de mensagens
- **Botão flutuante do WhatsApp** para atendimento rápido
- **Navegação suave** com scroll entre seções
- **Menu mobile** responsivo com animações
- **Design System** completo com tokens semânticos de cores

### 🎨 Design

- Paleta de cores em **azul escuro, azul médio e azul claro**
- Tipografia: **Montserrat** (headings) + **Open Sans** (body)
- Animações CSS customizadas (fade-in, slide, pulse glow)
- Gradientes e sombras para profundidade visual

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **React 18** | Biblioteca de UI com componentes funcionais |
| **TypeScript** | Tipagem estática para maior segurança |
| **Tailwind CSS 3** | Estilização utilitária com design tokens |
| **Vite** | Build tool para desenvolvimento rápido |
| **Lucide React** | Ícones SVG modernos |

## 📁 Estrutura do Projeto

```
src/
├── assets/            # Imagens e recursos estáticos
├── components/
│   ├── Header.tsx     # Navbar fixa com menu mobile
│   ├── Hero.tsx       # Seção principal com CTA
│   ├── Services.tsx   # Grade de serviços oferecidos
│   ├── Scheduling.tsx # Formulário de agendamento
│   ├── Contact.tsx    # Formulário de contato + info
│   └── Footer.tsx     # Rodapé + botão WhatsApp flutuante
├── pages/
│   └── Index.tsx      # Página principal (one-page)
├── index.css          # Design system (tokens, variáveis CSS)
└── main.tsx           # Entry point
```

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/centrautos-lavajato.git

# Acesse a pasta
cd centrautos-lavajato

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** e se adapta a:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1400px+)

## 🔧 Personalização

Para alterar o número do WhatsApp, busque por `5500000000000` nos componentes e substitua pelo número desejado (com código do país).

## 📄 Licença

Este projeto é de uso livre para fins educacionais e de portfólio.

---

**Desenvolvido como projeto pessoal do curso de Desenvolvimento Fullstack** 🎓
