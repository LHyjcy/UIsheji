import type { CSSProperties } from 'react';
import {
  archiveBlocks,
  creativeCards,
  floatingBlocks,
  getGeneratedImageSize,
  orbitBlocks,
  recentBars,
  splitBlocks,
} from '../data/pageContent';

type AssetImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
};

function AssetImage({ src, alt, style }: AssetImageProps) {
  const size = getGeneratedImageSize(src);

  return (
    <img
      src={src}
      alt={alt}
      width={size.naturalWidth}
      height={size.naturalHeight}
      loading="lazy"
      decoding="async"
      style={style}
    />
  );
}

export function WireframeCompletion() {
  return (
    <>
      <section className="orbit-showcase" aria-label="Creative AI orbit showcase">
        <div className="orbit-showcase__stage">
          {orbitBlocks.map((block) => (
            <div
              key={block.id}
              className={`wire-block wire-block--${block.tone ?? 'mid'} orbit-showcase__block`}
              aria-hidden="true"
              style={{
                left: `${block.left}%`,
                top: `${block.top}%`,
                width: `${block.width}%`,
                height: `${block.height}%`,
                '--block-rotate': `${block.rotate ?? 0}deg`,
              } as CSSProperties}
            />
          ))}
          <div className="orbit-showcase__center">
            <h2>CREATIVE AI</h2>
            <span aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="tone-divider" aria-hidden="true" />

      <section className="recent-works" aria-label="Recent works">
        <div className="recent-works__copy">
          <h2>RECENT WORKS</h2>
          <p>HEY CREATIVEDESIGN</p>
          <p>JUST FOR @FUTURE</p>
        </div>
        <div className="recent-works__bars" aria-hidden="true">
          {recentBars.map((bar) => (
            <span
              key={bar.id}
              className={`recent-works__bar wire-block--${bar.tone}`}
              style={{
                left: `${bar.left}%`,
                width: `${bar.width}%`,
                height: `${bar.height}px`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="manifesto-field" aria-label="Creative manifesto">
        {floatingBlocks.map((block) => (
          <span
            key={block.id}
            className={`wire-block wire-block--${block.tone ?? 'mid'} manifesto-field__block`}
            aria-hidden="true"
            style={{
              left: `${block.left}%`,
              top: `${block.top}%`,
              width: `${block.width}%`,
              height: `${block.height}%`,
            }}
          />
        ))}
        <p>
          EVERYTHING
          <br />
          TO CREATE
          <br />
          ANYTHING
        </p>
      </section>

      <section className="archive-grid" aria-label="Visual archive grid">
        <div className="archive-grid__inner">
          {archiveBlocks.map((block) => (
            block.src && block.alt ? <AssetImage key={block.id} src={block.src} alt={block.alt} /> : null
          ))}
        </div>
      </section>

      <section className="split-feature" aria-label="Creative design work">
        <div className="split-feature__copy">
          <h2>
            CREATIVE DESIGN
            <br />
            WORK
            <br />
            A FUTURE
          </h2>
        </div>
        <div className="split-feature__media">
          {splitBlocks.map((block) => (
            block.src && block.alt ? (
              <AssetImage
                key={block.id}
                src={block.src}
                alt={block.alt}
                style={{
                  left: `${block.left}%`,
                  top: `${block.top}%`,
                  width: `${block.width}%`,
                  height: `${block.height}%`,
                }}
              />
            ) : null
          ))}
        </div>
      </section>

      <section className="creative-deck" aria-label="Creative AI card deck">
        <h2>CREATIVE AI</h2>
        <div className="creative-deck__grid">
          {creativeCards.map((card) => (
            <article key={card.id} className="creative-deck__card">
              <AssetImage src={card.src} alt={card.alt} />
              <div>
                <span aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
        <p>
          STOP OVER THINKING
          <br />
          JUST DO IT
          <br />
          FOR FUTURE
        </p>
      </section>

      <div className="closing-panel" aria-hidden="true" />
    </>
  );
}
