import type { CSSProperties } from 'react';
import { galleryItems } from '../data/pageContent';

export function GalleryCollage() {
  return (
    <section className="gallery-collage" aria-label="Collection gallery">
      <div className="gallery-collage__label gallery-collage__label--top-left">LQB_2026</div>
      <div className="gallery-collage__label gallery-collage__label--top-right">DESIGNER</div>

      <div className="gallery-collage__stage">
        {galleryItems.map((item, index) => (
          <img
            key={item.id}
            className="gallery-card"
            src={item.src}
            alt={item.alt}
            width={item.naturalWidth}
            height={item.naturalHeight}
            loading="lazy"
            decoding="async"
            tabIndex={0}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: `${item.width}%`,
              zIndex: item.z,
              '--card-rotate': `${item.rotate}deg`,
              '--card-delay': `${index * 70}ms`,
            } as CSSProperties}
          />
        ))}
      </div>
    </section>
  );
}
