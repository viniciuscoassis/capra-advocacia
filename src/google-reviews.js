import larissaPhoto from "./assets/reviewers/larissa-martins.jpg";
import fernandaPhoto from "./assets/reviewers/fernanda-oliveira.jpg";
import juliaPhoto from "./assets/reviewers/julia-garcia.jpg";

// Public Google Maps reviews checked on 2026-10-03. Curated snapshot, not a live feed.
// Preserve authors' wording. Relative publication dates are retained only as source notes.
export const googleReputation = {
  rating: "5,0",
  count: 60,
  checkedAt: "2026-10-03",
  checkedAtLabel: "03/10/2026",
  url: "https://www.google.com/maps/place/Advogada+C%C3%ADvel+Regiane+Capra+-+especialista+em+direito+Imobili%C3%A1rio/data=!4m2!3m1!1s0x0:0xefe3e46d73eba592",
};

export const googleReviews = [
  {
    id: "larissa-martins", photo: larissaPhoto, author: "Larissa Martins", initials: "LM",
    theme: "Orientação imobiliária", observedAge: "4 meses atrás",
    excerpt: "Me auxiliou em todo o processo com tema imobiliário com muita atenção, clareza e competência.",
    text: "Excelente profissional! Me auxiliou em todo o processo com tema imobiliário com muita atenção, clareza e competência. Demonstrou grande conhecimento na área, sempre explicando tudo de forma objetiva e transmitindo segurança em cada etapa. Além do profissionalismo, o atendimento foi extremamente humano e prestativo. Recomendo de olhos fechados para quem procura uma advogada séria, comprometida e realmente preparada.",
  },
  {
    id: "fernanda-oliveira", photo: fernandaPhoto, author: "fernanda grace mara de oliveira", initials: "FO",
    theme: "Clareza e disponibilidade", observedAge: "4 meses atrás",
    text: "Excelente profissional! Fui bem atendida, a advogada explicou o processo com clareza e respondeu rapidamente às dúvidas, muito solicita e superou minhas expectativas.",
  },
  {
    id: "aline-peres", author: "Aline Patricia Peres", initials: "AP",
    theme: "Atendimento humano", observedAge: "7 meses atrás",
    text: "Excelente profissional, muito inteligente e humana. Muito comprometida, tem muito conhecimento",
  },
  {
    id: "angelo-geraldi", author: "Angelo Junior Geraldi", initials: "AG",
    theme: "Cuidado em cada detalhe", observedAge: "um ano atrás",
    excerpt: "Competente, atenciosa e extremamente paciente, ela analisou meu caso com cuidado, explicou cada detalhe com clareza e conduziu todo o processo com maestria.",
    text: "Tive a felicidade de contar com o trabalho da Dra. Regiane Capra e não poderia estar mais satisfeito! Desde o primeiro contato, ela demonstrou um profissionalismo exemplar, com total domínio sobre o direito imobiliário. Competente, atenciosa e extremamente paciente, ela analisou meu caso com cuidado, explicou cada detalhe com clareza e conduziu todo o processo com maestria. Meu problema era complexo, mas ela soube lidar com cada desafio de forma estratégica e eficiente, garantindo a melhor solução possível. Além de todo o conhecimento técnico, seu atendimento humano e dedicado fez toda a diferença. Recomendo de olhos fechados para quem busca uma advogada especializada, comprometida e que realmente se preocupa com seus clientes! 👏🔝",
  },
  {
    id: "julia-garcia", photo: juliaPhoto, author: "Julia Garcia L", initials: "JG",
    theme: "Uma consulta com calma", observedAge: "6 meses atrás",
    text: "Estive em uma consulta com a dra Regiane e ela foi muito atenciosa, explicou com os trâmites com clareza e paciência. Recomendo muito!",
  },
  {
    id: "raphael-feliciano", author: "Raphael Luhan Feliciano", initials: "RF",
    theme: "Atenção e proatividade", observedAge: "um mês atrás",
    text: "Excelente profissional. Atenciosa e proativa. Recomendo!",
  },
];
