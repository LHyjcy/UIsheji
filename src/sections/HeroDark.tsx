export function HeroDark() {
  const title = '\u6559\u7a0b \u4e2a\u4eba\u7f51\u7ad9\u5236\u4f5c B7 \u5168\u6d41\u7a0b';

  return (
    <section className="hero-dark" aria-label="Creative Story and Collection">
      <img
        className="hero-dark__image"
        src="/assets/generated/hero-closeup.webp"
        alt="Dark hero composition with red-haired character and tutorial title"
        width={1440}
        height={805}
        decoding="async"
        fetchPriority="high"
      />
      <h1 className="visually-hidden">{title}</h1>
    </section>
  );
}
