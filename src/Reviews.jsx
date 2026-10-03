import { useState } from "react";
import { googleReputation, googleReviews } from "./google-reviews.js";

function Stars() {
  return <span className="review-stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span>;
}

export function ReputationLink() {
  return (
    <a className="hero-reputation" href="#avaliacoes">
      <span className="hero-reputation__score"><Stars /><strong>{googleReputation.rating} no Google</strong><span>· {googleReputation.count} avaliações</span></span>
      <span className="hero-reputation__hint">Conheça as experiências de quem já foi atendido <span aria-hidden="true">↓</span></span>
    </a>
  );
}

function ReviewCard({ review, featured = false }) {
  const [expanded, setExpanded] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <article className={`review-card${featured ? " review-card--featured" : ""}`} aria-label={`Avaliação de ${review.author}`}>
      <div className="review-card__top"><span>{review.theme}</span><Stars /></div>
      <blockquote id={`quote-${review.id}`}>
        <p>“{expanded || !review.excerpt ? review.text : review.excerpt}”</p>
      </blockquote>
      {review.excerpt && (
        <button className="review-card__expand" type="button" aria-expanded={expanded} aria-controls={`quote-${review.id}`} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Ler menos" : "Ler avaliação completa"}<span aria-hidden="true"> {expanded ? "−" : "+"}</span>
        </button>
      )}
      <div className="review-card__author">
        <span className="review-card__avatar" aria-hidden="true">
          {review.photo && !photoFailed ? (
            <img src={review.photo} alt="" width="40" height="40" loading="lazy" onError={() => setPhotoFailed(true)} />
          ) : review.initials}
        </span>
        <div><strong>{review.author}</strong><span>Avaliação no Google{review.excerpt && !expanded ? " · trecho" : ""}</span></div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="reviews" id="avaliacoes" aria-labelledby="reviews-title">
      <div className="reviews__inner">
        <div className="section-head"><span className="section-head__index">05</span><span className="section-head__label">Experiências reais</span></div>
        <div className="reviews__heading">
          <div><h2 id="reviews-title">Como é contar<br />com a <em>Regiane</em></h2><p>Experiências compartilhadas por clientes no Google.</p></div>
          <a className="reviews__rating" href={googleReputation.url} target="_blank" rel="noopener noreferrer" aria-label={`${googleReputation.rating} de 5, ${googleReputation.count} avaliações. Conferir no Google (nova aba)`}>
            <span className="reviews__google">Avaliações no Google <span aria-hidden="true">↗</span></span>
            <div><strong>{googleReputation.rating}</strong><span><Stars /><span>{googleReputation.count} avaliações</span></span></div>
          </a>
        </div>
        <div className="reviews__grid">
          {googleReviews.slice(0, 3).map((review, index) => <ReviewCard key={review.id} review={review} featured={index === 0} />)}
        </div>
        <div id="more-reviews" className={`reviews__grid reviews__more${showAll ? " is-expanded" : ""}`}>
          {googleReviews.slice(3).map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
        <button type="button" className="reviews__toggle btn btn--ghost" aria-expanded={showAll} aria-controls="more-reviews" onClick={() => setShowAll(!showAll)}>{showAll ? "Mostrar menos avaliações −" : "Mostrar mais avaliações +"}</button>
        <div className="reviews__foot">
          <p>Seleção de relatos públicos. Nota e total conferidos em <time dateTime={googleReputation.checkedAt}>{googleReputation.checkedAtLabel}</time>.</p>
          <a href={googleReputation.url} target="_blank" rel="noopener noreferrer">Ver todas as {googleReputation.count} avaliações no Google <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
