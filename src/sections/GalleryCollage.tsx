import { galleryItems } from '../data/pageContent';

export function GalleryCollage() {
  return (
    <section className="gallery-collage" aria-label="Collection gallery">
      <div className="gallery-collage__label gallery-collage__label--top-left">LQB_2026</div>
      <div className="gallery-collage__label gallery-collage__label--top-right">DESIGNER</div>

      <div className="gallery-collage__stage">
        {galleryItems.map((item) => (
          <img
            key={item.id}
            className="gallery-card"
            src={item.src}
            alt={item.alt}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: `${item.width}%`,
              zIndex: item.z,
              transform: `rotate(${item.rotate}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
