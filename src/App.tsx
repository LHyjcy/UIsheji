import { HeroDark } from './sections/HeroDark';
import { GalleryCollage } from './sections/GalleryCollage';
import { WireframeCompletion } from './sections/WireframeCompletion';

export default function App() {
  return (
    <main className="page-shell">
      <HeroDark />
      <GalleryCollage />
      <WireframeCompletion />
    </main>
  );
}
