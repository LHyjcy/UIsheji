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

export type PositionedBlock = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate?: number;
  tone?: 'light' | 'mid' | 'dark';
  src?: string;
  alt?: string;
};

export type BarBlock = {
  id: string;
  left: number;
  width: number;
  height: number;
  tone: 'light' | 'mid' | 'dark';
};

export type MediaCard = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 'new-image', src: '/assets/generated/gallery-01.webp', alt: 'Green future poster', left: 2, top: 39, width: 17, naturalWidth: 236, naturalHeight: 172, rotate: 0, z: 2 },
  { id: 'pink-screen', src: '/assets/generated/gallery-02.webp', alt: 'Pink interface card', left: 12, top: 29, width: 15, naturalWidth: 203, naturalHeight: 202, rotate: 0, z: 3 },
  { id: 'orange-device', src: '/assets/generated/gallery-03.webp', alt: 'Orange 3D interface card', left: 22, top: 23, width: 16, naturalWidth: 211, naturalHeight: 200, rotate: -1, z: 4 },
  { id: 'red-studio', src: '/assets/generated/gallery-04.webp', alt: 'Red character studio card', left: 32, top: 19, width: 15, naturalWidth: 183, naturalHeight: 216, rotate: 0, z: 6 },
  { id: 'tone-b7', src: '/assets/generated/gallery-05.webp', alt: 'Tone B7 fashion card', left: 45, top: 15, width: 16, naturalWidth: 205, naturalHeight: 249, rotate: 1, z: 7 },
  { id: 'desk-work', src: '/assets/generated/gallery-06.webp', alt: 'Character at desk card', left: 58, top: 22, width: 17, naturalWidth: 223, naturalHeight: 201, rotate: 0, z: 5 },
  { id: 'green-box', src: '/assets/generated/gallery-07.webp', alt: 'Bright green package card', left: 72, top: 29, width: 16, naturalWidth: 212, naturalHeight: 222, rotate: -1, z: 4 },
  { id: 'blue-design', src: '/assets/generated/gallery-08.webp', alt: 'Blue design card', left: 82, top: 35, width: 15, naturalWidth: 203, naturalHeight: 204, rotate: 0, z: 3 },
  { id: 'mobile-card', src: '/assets/generated/gallery-09.webp', alt: 'Mobile app poster card', left: 80, top: 54, width: 19, naturalWidth: 264, naturalHeight: 248, rotate: 1, z: 5 },
  { id: 'metal-number', src: '/assets/generated/gallery-10.webp', alt: 'Metallic 3D number card', left: 70, top: 65, width: 16, naturalWidth: 210, naturalHeight: 178, rotate: -1, z: 3 },
  { id: 'umbrella-character', src: '/assets/generated/gallery-11.webp', alt: 'Character under umbrella card', left: 63, top: 73, width: 18, naturalWidth: 240, naturalHeight: 208, rotate: 1, z: 4 },
  { id: 'discount-poster', src: '/assets/generated/gallery-12.webp', alt: 'Blue discount poster card', left: 52, top: 78, width: 16, naturalWidth: 209, naturalHeight: 187, rotate: 0, z: 5 },
  { id: 'holiday-poster', src: '/assets/generated/gallery-13.webp', alt: 'Holiday travel poster card', left: 40, top: 76, width: 16, naturalWidth: 210, naturalHeight: 303, rotate: -1, z: 6 },
  { id: 'black-yearbook', src: '/assets/generated/gallery-14.webp', alt: 'Black visual yearbook card', left: 29, top: 76, width: 18, naturalWidth: 236, naturalHeight: 148, rotate: 0, z: 4 },
  { id: 'blue-portrait', src: '/assets/generated/gallery-15.webp', alt: 'Blue portrait card', left: 20, top: 69, width: 15, naturalWidth: 205, naturalHeight: 214, rotate: 1, z: 3 },
  { id: 'hey-board', src: '/assets/generated/gallery-16.webp', alt: 'Colorful project board card', left: 12, top: 60, width: 15, naturalWidth: 203, naturalHeight: 200, rotate: -1, z: 2 },
];

export const orbitBlocks: PositionedBlock[] = [
  { id: 'orbit-1', left: 26, top: 8, width: 13, height: 18, rotate: -14, tone: 'mid' },
  { id: 'orbit-2', left: 43, top: 3, width: 13, height: 18, rotate: 0, tone: 'light' },
  { id: 'orbit-3', left: 60, top: 9, width: 13, height: 18, rotate: 14, tone: 'mid' },
  { id: 'orbit-4', left: 72, top: 26, width: 13, height: 18, rotate: 28, tone: 'dark' },
  { id: 'orbit-5', left: 63, top: 61, width: 13, height: 18, rotate: -16, tone: 'mid' },
  { id: 'orbit-6', left: 43, top: 68, width: 13, height: 18, rotate: 0, tone: 'dark' },
  { id: 'orbit-7', left: 24, top: 61, width: 13, height: 18, rotate: 16, tone: 'mid' },
  { id: 'orbit-8', left: 13, top: 42, width: 13, height: 18, rotate: 28, tone: 'dark' },
];

export const recentBars: BarBlock[] = [
  { id: 'bar-1', left: 5, width: 11, height: 42, tone: 'mid' },
  { id: 'bar-2', left: 12, width: 9, height: 70, tone: 'light' },
  { id: 'bar-3', left: 21, width: 12, height: 58, tone: 'dark' },
  { id: 'bar-4', left: 32, width: 8, height: 40, tone: 'light' },
  { id: 'bar-5', left: 39, width: 15, height: 54, tone: 'mid' },
  { id: 'bar-6', left: 52, width: 10, height: 66, tone: 'light' },
  { id: 'bar-7', left: 60, width: 14, height: 72, tone: 'dark' },
  { id: 'bar-8', left: 73, width: 11, height: 58, tone: 'light' },
  { id: 'bar-9', left: 83, width: 12, height: 44, tone: 'mid' },
  { id: 'bar-10', left: 94, width: 8, height: 60, tone: 'light' },
];

export const floatingBlocks: PositionedBlock[] = [
  { id: 'float-1', left: 7, top: 18, width: 9, height: 24, tone: 'light' },
  { id: 'float-2', left: 25, top: 62, width: 22, height: 15, tone: 'mid' },
  { id: 'float-3', left: 66, top: 23, width: 17, height: 13, tone: 'dark' },
  { id: 'float-4', left: 87, top: 48, width: 12, height: 22, tone: 'light' },
];

export const archiveBlocks: PositionedBlock[] = Array.from({ length: 15 }, (_, index) => ({
  id: `archive-${index + 1}`,
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  tone: index % 2 === 0 ? 'light' : 'mid',
  src: `/assets/generated/gallery-${String((index % 16) + 1).padStart(2, '0')}.webp`,
  alt: `Archive visual tile ${index + 1}`,
}));

export const splitBlocks: PositionedBlock[] = [
  { id: 'split-1', left: 67, top: 38, width: 14, height: 24, src: '/assets/generated/gallery-04.webp', alt: 'Creative work tile' },
  { id: 'split-2', left: 84, top: 12, width: 14, height: 24, src: '/assets/generated/gallery-07.webp', alt: 'Future work tile' },
  { id: 'split-3', left: 84, top: 39, width: 14, height: 24, src: '/assets/generated/gallery-10.webp', alt: 'Studio work tile' },
  { id: 'split-4', left: 84, top: 68, width: 14, height: 24, src: '/assets/generated/gallery-12.webp', alt: 'Collection work tile' },
];

export const creativeCards: MediaCard[] = [
  { id: 'creative-1', src: '/assets/generated/gallery-03.webp', alt: 'Orange interface collection', title: 'STORY' },
  { id: 'creative-2', src: '/assets/generated/gallery-05.webp', alt: 'Tone fashion collection', title: 'TONE' },
  { id: 'creative-3', src: '/assets/generated/gallery-06.webp', alt: 'Desk work collection', title: 'WORK' },
  { id: 'creative-4', src: '/assets/generated/gallery-11.webp', alt: 'Umbrella creative collection', title: 'FUTURE' },
  { id: 'creative-5', src: '/assets/generated/gallery-13.webp', alt: 'Holiday creative collection', title: 'TRAVEL' },
  { id: 'creative-6', src: '/assets/generated/gallery-14.webp', alt: 'Yearbook creative collection', title: 'BOOK' },
];
