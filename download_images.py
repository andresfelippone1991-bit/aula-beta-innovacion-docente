
import os
import requests
from PIL import Image
from io import BytesIO

images = {
    "hero-image": "https://i.ibb.co/sdWBvncn/e01b5fed-5f83-4ba4-914b-1530c72c49b1.png",
    "logo": "https://i.ibb.co/fYnj5qZY/Dise-o-sin-t-tulo.png",
    "game-cordobazo": "https://files.catbox.moe/mxfus4.png",
    "game-edad-media": "https://files.catbox.moe/57wknw.png",
    "game-encrucijada": "https://files.catbox.moe/pix636.png",
    "game-sombras": "https://files.catbox.moe/47xit3.png",
    "game-escasez": "https://files.catbox.moe/45do3y.png"
}

output_dir = "public/images"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for name, url in images.items():
    print(f"Processing {name}...")
    try:
        response = requests.get(url)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGB if necessary (e.g. for PNG with transparency -> WebP supports transparency, but good practice to check mode)
        # WebP supports RGBA, so we can keep it.
        
        output_path = os.path.join(output_dir, f"{name}.webp")
        img.save(output_path, "WEBP", quality=80)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Failed to process {name}: {e}")
