import { useEffect, useRef, useState } from "react";
import regianePhoto from "../regiane.jpg";
import { audiences, methodSteps, services } from "./site-data.js";
import { useSiteMotion } from "./useSiteMotion.js";

const whatsappNumber = "5535991442912";
const defaultWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá, Regiane. Gostaria de apresentar uma situação imobiliária.",
)}`;
const appointmentWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá, Regiane. Gostaria de confirmar um horário de atendimento.",
)}`;
const mapUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Av.%20Jo%C3%A3o%20Pinheiro%2C%20137%20-%20Centro%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037701-387";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Av.%20Jo%C3%A3o%20Pinheiro%2C%20137%20-%20Centro%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037701-387&output=embed";

function pushLeadEvent(channel, service = "") {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    lead_channel: channel,
    lead_service: service,
  });
}

function WhatsappLink({ href = defaultWhatsappUrl, className, children, label }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => pushLeadEvent("whatsapp_direct")}
    >
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <a className="header__logo" href="#top" aria-label="Capra Advocacia — início">
          <span className="header__logo-mark">CA</span>
          <span className="header__logo-lockup">
            <span className="header__logo-text">Capra&nbsp;Advocacia</span>
            <small>Regiane Capra</small>
          </span>
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#metodo">Método</a>
          <a href="#local">Local</a>
          <a href="#contato">Contato</a>
        </nav>
        <WhatsappLink className="header__cta btn btn--small">
          <span className="btn__label">Falar com Regiane</span>
        </WhatsappLink>
        <button
          className={`header__burger${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav className="menu__nav" aria-label="Menu">
          <a href="#sobre" onClick={closeMenu}>
            <em>01</em> Sobre
          </a>
          <a href="#atuacao" onClick={closeMenu}>
            <em>02</em> Atuação
          </a>
          <a href="#metodo" onClick={closeMenu}>
            <em>03</em> Método
          </a>
          <a href="#local" onClick={closeMenu}>
            <em>04</em> Local
          </a>
          <a href="#contato" onClick={closeMenu}>
            <em>05</em> Contato
          </a>
        </nav>
        <div className="menu__foot">
          <span>Poços de Caldas — MG</span>
          <span>OAB/MG 114.383</span>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow reveal-line">
          <span className="hero__eyebrow-dot" />
          Regiane Capra &nbsp;·&nbsp; OAB/MG 114.383 &nbsp;·&nbsp; Advocacia Imobiliária
        </p>
        <h1 className="hero__title" data-split>
          Segurança jurídica para suas decisões <em>imobiliárias</em>
        </h1>
        <div className="hero__bottom">
          <p className="hero__lede" data-split-lines>
            Comprar, vender, alugar ou investir em um imóvel envolve compromissos que
            produzem efeitos por muitos anos. Cada etapa merece análise, clareza e
            prevenção — antes da assinatura.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              <span className="btn__label">Apresentar meu caso</span>
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a className="btn btn--ghost" href="#atuacao">
              <span className="btn__label">Áreas de atuação</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__art" aria-hidden="true">
        <svg
          className="hero__svg"
          viewBox="0 0 640 720"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <line className="draw" x1="0" y1="700" x2="640" y2="700" />
          <path className="draw" d="M180 700 V210 H420 V700" />
          <path className="draw" d="M180 210 L230 150 H370 L420 210" />
          <line className="draw" x1="180" y1="300" x2="420" y2="300" />
          <line className="draw" x1="180" y1="390" x2="420" y2="390" />
          <line className="draw" x1="180" y1="480" x2="420" y2="480" />
          <line className="draw" x1="180" y1="570" x2="420" y2="570" />
          <line className="draw thin" x1="240" y1="230" x2="240" y2="700" />
          <line className="draw thin" x1="300" y1="230" x2="300" y2="700" />
          <line className="draw thin" x1="360" y1="230" x2="360" y2="700" />
          <path className="draw" d="M420 700 V330 H560 V700" />
          <line className="draw thin" x1="420" y1="420" x2="560" y2="420" />
          <line className="draw thin" x1="420" y1="510" x2="560" y2="510" />
          <line className="draw thin" x1="420" y1="600" x2="560" y2="600" />
          <line className="draw thin" x1="490" y1="330" x2="490" y2="700" />
          <path className="draw" d="M60 700 V520 H180" />
          <path className="draw" d="M60 520 L120 460 L180 520" />
          <rect className="draw thin" x="95" y="580" width="50" height="120" />
          <rect className="draw" x="270" y="620" width="60" height="80" />
          <circle className="draw" cx="540" cy="120" r="46" />
          <circle className="draw thin" cx="540" cy="120" r="62" />
        </svg>
        <div className="hero__art-glow" />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Role para explorar</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Compra e venda",
    "Contratos",
    "Locação",
    "Leilões",
    "Análise documental",
    "Proteção patrimonial",
  ];
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {repeatedItems.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            <span>{item}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const [photoVisible, setPhotoVisible] = useState(true);

  return (
    <section className="about" id="sobre">
      <div className="section-head">
        <span className="section-head__index">01</span>
        <span className="section-head__label">Sobre</span>
      </div>
      <div className="about__grid">
        <div className="about__media">
          <figure className="about__portrait">
            {photoVisible && (
              <img
                className="about__photo"
                src={regianePhoto}
                alt="Regiane Capra, advogada e corretora de imóveis, em seu escritório"
                onError={() => setPhotoVisible(false)}
              />
            )}
            <div className="about__portrait-ph">
              <span>RC</span>
              <small>Retrato profissional</small>
            </div>
          </figure>
          <div className="about__badges">
            <div className="badge-card">
              <span className="badge-card__k">OAB/MG</span>
              <span className="badge-card__v">114.383</span>
            </div>
            <div className="badge-card">
              <span className="badge-card__k">Base</span>
              <span className="badge-card__v">Poços de Caldas</span>
            </div>
          </div>
        </div>
        <div className="about__body">
          <h2 className="about__title" data-split>
            Advogada e corretora. <em>Duas leituras</em> da mesma negociação.
          </h2>
          <p className="about__text" data-split-lines>
            Regiane Capra é advogada inscrita na OAB/MG sob o número 114.383 e
            corretora de imóveis, com atuação voltada à segurança jurídica das
            negociações imobiliárias. Integra a equipe da Capra Advocacia, em Poços de
            Caldas–MG.
          </p>
          <p className="about__text" data-split-lines>
            Seu trabalho traduz questões jurídicas complexas em orientações claras:
            compreender documentos, identificar riscos e conduzir cada etapa da
            operação com tranquilidade — para compradores, vendedores, proprietários,
            locatários, investidores e profissionais do setor.
          </p>
          <div className="about__pillars">
            <div className="pillar">
              <span className="pillar__num">A</span>
              <h3>Visão jurídica</h3>
              <p>
                A proteção necessária para reduzir riscos: contratos, documentos,
                pendências e efeitos de cada cláusula.
              </p>
            </div>
            <div className="pillar">
              <span className="pillar__num">B</span>
              <h3>Visão imobiliária</h3>
              <p>
                A viabilidade prática e comercial do negócio, com a experiência de
                quem conhece o mercado por dentro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [openService, setOpenService] = useState(null);

  return (
    <section className="services" id="atuacao">
      <div className="section-head section-head--light">
        <span className="section-head__index">02</span>
        <span className="section-head__label">Áreas de atuação</span>
      </div>
      <h2 className="services__title" data-split>
        Do primeiro documento à <em>assinatura</em>
      </h2>
      <ul className="services__list">
        {services.map((service, index) => {
          const isOpen = openService === index;
          const number = String(index + 1).padStart(2, "0");
          return (
            <li className={`service${isOpen ? " is-open" : ""}`} key={service.title}>
              <button
                className="service__row"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`service-${number}`}
                onClick={() => setOpenService(isOpen ? null : index)}
              >
                <span className="service__num">{number}</span>
                <span className="service__name">{service.title}</span>
                <span className="service__plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="service__body" id={`service-${number}`}>
                <div className="service__body-inner">
                  <p>{service.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Method() {
  return (
    <section className="method" id="metodo">
      <div className="method__sticky">
        <div className="section-head">
          <span className="section-head__index">03</span>
          <span className="section-head__label">Método preventivo</span>
        </div>
        <h2 className="method__title" data-split>
          O melhor conflito é o que <em>nunca acontece</em>
        </h2>
        <p className="method__sub">
          Uma negociação imobiliária não se resume a preço e condições de pagamento.
          O acompanhamento jurídico preventivo existe para que você decida com
          informação — não com sorte.
        </p>
      </div>
      <ol className="method__list">
        {methodSteps.map((step, index) => (
          <li className="method-item" key={step.title}>
            <span className="method-item__num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience">
      <div className="section-head section-head--light">
        <span className="section-head__index">04</span>
        <span className="section-head__label">Para quem</span>
      </div>
      <div className="audience__grid">
        {audiences.map((audience) => (
          <article className="aud-card" key={audience.title}>
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.reportValidity()) return;

    const form = new FormData(formElement);
    const subject = String(form.get("assunto") || "");
    const lines = [
      "Olá, Regiane. Vim pelo site da Capra Advocacia.",
      "",
      `Nome: ${String(form.get("nome") || "")}`,
      `Meu WhatsApp: ${String(form.get("telefone") || "")}`,
      `Assunto: ${subject}`,
      `Resumo: ${String(form.get("mensagem") || "")}`,
    ];
    const params = new URLSearchParams(window.location.search);
    const attribution = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]
      .map((key) => [key, params.get(key)])
      .filter(([, value]) => value);

    if (attribution.length) {
      lines.push(
        "",
        `Origem: ${attribution
          .map(([key, value]) => `${key}=${value}`)
          .join(" | ")}`,
      );
    }

    pushLeadEvent("whatsapp_form", subject);
    setStatus("Abrindo uma conversa segura no WhatsApp…");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form className="lead-form" id="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form__head">
        <span>Contato inicial</span>
        <small>Resposta pelo WhatsApp</small>
      </div>
      <label>
        <span>Seu nome</span>
        <input type="text" name="nome" autoComplete="name" required />
      </label>
      <label>
        <span>Seu WhatsApp</span>
        <input type="tel" name="telefone" autoComplete="tel" inputMode="tel" required />
      </label>
      <label>
        <span>Assunto principal</span>
        <select name="assunto" defaultValue="" required>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Análise documental de imóvel</option>
          <option>Compra ou venda de imóvel</option>
          <option>Contrato imobiliário</option>
          <option>Locação</option>
          <option>Leilão imobiliário</option>
          <option>Organização patrimonial</option>
          <option>Assessoria para corretor ou imobiliária</option>
          <option>Outro assunto</option>
        </select>
      </label>
      <label>
        <span>Resumo da situação</span>
        <textarea
          name="mensagem"
          rows="4"
          maxLength="700"
          placeholder="Descreva apenas o contexto geral, sem dados sensíveis."
          required
        />
      </label>
      <label className="lead-form__consent">
        <input type="checkbox" name="consentimento" required />
        <span>
          Autorizo o contato para retorno sobre esta solicitação e declaro que li o{" "}
          <a href="/privacidade.html" target="_blank" rel="noopener noreferrer">
            Aviso de Privacidade
          </a>
          .
        </span>
      </label>
      <button className="btn btn--form" type="submit">
        <span className="btn__label">Continuar no WhatsApp</span>
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      </button>
      <p className="lead-form__status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

function Contact() {
  return (
    <section className="cta" id="contato">
      <div className="cta__grid">
        <div className="cta__content">
          <p className="cta__eyebrow">Atendimento em Poços de Caldas–MG</p>
          <h2 className="cta__title" data-split>
            Apresente sua situação <em>imobiliária</em>
          </h2>
          <p className="cta__sub">
            Conte brevemente o contexto. As informações serão organizadas em uma
            mensagem para iniciar o atendimento pelo WhatsApp.
          </p>
          <div className="cta__actions">
            <WhatsappLink className="btn btn--light">
              <span className="btn__label">Ir direto ao WhatsApp</span>
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </WhatsappLink>
          </div>
          <p className="cta__note">
            Não envie documentos, senhas ou dados pessoais sensíveis neste primeiro
            contato.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="location" id="local">
      <div className="section-head section-head--light">
        <span className="section-head__index">05</span>
        <span className="section-head__label">Localização</span>
      </div>
      <div className="location__grid">
        <div className="location__content">
          <h2 className="location__title" data-split>
            Localização e <em>atendimento</em>
          </h2>
          <p className="location__intro" data-split-lines>
            A Capra Advocacia atende no Centro de Poços de Caldas. Antes de se
            deslocar, entre em contato para confirmar a disponibilidade e o melhor
            horário.
          </p>
          <div className="location__cards">
            <article className="location-card">
              <span>Endereço</span>
              <strong>
                Av. João Pinheiro, 137 — sala 01
                <br />
                Centro · Poços de Caldas–MG
                <br />
                CEP 37701-387
              </strong>
            </article>
            <article className="location-card">
              <span>Atendimento</span>
              <strong>Presencial em Poços de Caldas, mediante contato prévio.</strong>
            </article>
            <article className="location-card">
              <span>Telefone e WhatsApp</span>
              <strong>(35) 99144-2912</strong>
              <a href="mailto:re.capra@hotmail.com">re.capra@hotmail.com</a>
            </article>
            <article className="location-card">
              <span>Antes de ir</span>
              <strong>
                Confirme o horário e leve somente os documentos previamente
                solicitados.
              </strong>
            </article>
          </div>
          <div className="location__actions">
            <a
              className="btn btn--light"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__label">Traçar rota</span>
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <WhatsappLink
              className="btn btn--ghost-light"
              href={appointmentWhatsappUrl}
            >
              <span className="btn__label">Confirmar pelo WhatsApp</span>
            </WhatsappLink>
          </div>
        </div>

        <div className="location__map">
          <div className="location__map-bar">
            <span>Mapa</span>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              Abrir no Google Maps ↗
            </a>
          </div>
          <iframe
            title="Mapa da Capra Advocacia em Poços de Caldas"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__logo">Capra Advocacia</span>
          <p>
            Regiane Capra · OAB/MG 114.383
            <br />
            Advocacia Imobiliária · Poços de Caldas — Minas Gerais
          </p>
        </div>
        <div className="footer__col">
          <h4>Navegação</h4>
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#metodo">Método</a>
          <a href="#local">Localização</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer__col">
          <h4>Contato</h4>
          <a href="mailto:re.capra@hotmail.com">re.capra@hotmail.com</a>
          <a href="tel:+5535991442912">(35) 99144-2912</a>
          <address>
            Av. João Pinheiro, 137 — sala 01
            <br />
            Centro · Poços de Caldas–MG
            <br />
            CEP 37701-387
          </address>
          <a
            href="https://www.instagram.com/regianecapra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram pessoal
          </a>
          <a
            href="https://www.instagram.com/adv.capra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capra Advocacia
          </a>
          <a href="/privacidade.html">Aviso de Privacidade</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Regiane Capra — OAB/MG 114.383</span>
        <span>Conteúdo informativo, em conformidade com o Código de Ética da OAB.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const appRef = useRef(null);
  useSiteMotion(appRef);

  return (
    <div ref={appRef}>
      <div className="preloader" aria-hidden="true">
        <div className="preloader__inner">
          <span className="preloader__name">Capra&nbsp;Advocacia</span>
          <span className="preloader__tag">
            Regiane Capra · Advocacia Imobiliária
          </span>
        </div>
      </div>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Method />
        <Audience />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsappLink
        className="whatsapp-float"
        label="Iniciar conversa com Regiane pelo WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        <strong>WhatsApp</strong>
      </WhatsappLink>
    </div>
  );
}
