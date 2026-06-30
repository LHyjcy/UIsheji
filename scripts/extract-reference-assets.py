from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
REFERENCE = ROOT / "public" / "assets" / "reference"
GENERATED = ROOT / "public" / "assets" / "generated"


def crop(source: Image.Image, box: tuple[int, int, int, int], name: str) -> None:
    GENERATED.mkdir(parents=True, exist_ok=True)
    image = source.crop(box)
    image.save(GENERATED / name, "WEBP", quality=88, method=6)


def main() -> None:
    final_ref = Image.open(REFERENCE / "final-reference.jpg").convert("RGB")

    crop(final_ref, (0, 0, 1440, 805), "hero-closeup.webp")
    crop(final_ref, (24, 364, 354, 596), "hero-left-card.webp")
    crop(final_ref, (805, 364, 1261, 596), "hero-right-card.webp")
    crop(final_ref, (1300, 364, 1440, 708), "hero-side-card.webp")

    gallery_boxes = [
        (36, 1260, 272, 1432),
        (151, 1134, 354, 1336),
        (304, 1038, 515, 1238),
        (442, 974, 625, 1190),
        (626, 936, 831, 1185),
        (787, 994, 1010, 1195),
        (958, 1083, 1170, 1305),
        (1105, 1134, 1308, 1338),
        (1111, 1268, 1375, 1516),
        (1056, 1396, 1266, 1574),
        (957, 1510, 1197, 1718),
        (776, 1610, 985, 1797),
        (595, 1605, 805, 1908),
        (438, 1609, 674, 1757),
        (286, 1535, 491, 1749),
        (178, 1388, 381, 1588),
    ]
    for index, box in enumerate(gallery_boxes, start=1):
        crop(final_ref, box, f"gallery-{index:02d}.webp")


if __name__ == "__main__":
    main()
