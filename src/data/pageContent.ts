export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  naturalWidth: number;
  naturalHeight: number;
  rotate: number;
  z: number;
};

export const galleryItems: GalleryItem[] = [
  { id: 'new-image', src: '/assets/generated/gallery-01.webp', alt: 'Green future poster', left: 2, top: 43, width: 17, naturalWidth: 236, naturalHeight: 172, rotate: 0, z: 2 },
  { id: 'pink-screen', src: '/assets/generated/gallery-02.webp', alt: 'Pink interface card', left: 12, top: 32, width: 15, naturalWidth: 203, naturalHeight: 202, rotate: 0, z: 3 },
  { id: 'orange-device', src: '/assets/generated/gallery-03.webp', alt: 'Orange 3D interface card', left: 22, top: 27, width: 16, naturalWidth: 211, naturalHeight: 200, rotate: -1, z: 4 },
  { id: 'red-studio', src: '/assets/generated/gallery-04.webp', alt: 'Red character studio card', left: 32, top: 23, width: 15, naturalWidth: 183, naturalHeight: 216, rotate: 0, z: 6 },
  { id: 'tone-b7', src: '/assets/generated/gallery-05.webp', alt: 'Tone B7 fashion card', left: 45, top: 19, width: 16, naturalWidth: 205, naturalHeight: 249, rotate: 1, z: 7 },
  { id: 'desk-work', src: '/assets/generated/gallery-06.webp', alt: 'Character at desk card', left: 58, top: 25, width: 17, naturalWidth: 223, naturalHeight: 201, rotate: 0, z: 5 },
  { id: 'green-box', src: '/assets/generated/gallery-07.webp', alt: 'Bright green package card', left: 72, top: 32, width: 16, naturalWidth: 212, naturalHeight: 222, rotate: -1, z: 4 },
  { id: 'blue-design', src: '/assets/generated/gallery-08.webp', alt: 'Blue design card', left: 82, top: 37, width: 15, naturalWidth: 203, naturalHeight: 204, rotate: 0, z: 3 },
];
