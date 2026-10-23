const pixelCount = 20;
const pixels = document.querySelector('.pixels');

for (let index = 0; index < pixelCount; index += 1) {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  pixels.append(pixel);

  const blink = () => {
    pixel.style.left = `${Math.random() * 100}%`;
    pixel.style.top = `${Math.random() * 100}%`;
    pixel.style.opacity = '1';

    const visibleFor = 120 + Math.random() * 780;
    const hiddenFor = 200 + Math.random() * 2300;

    window.setTimeout(() => {
      pixel.style.opacity = '0';
      window.setTimeout(blink, hiddenFor);
    }, visibleFor);
  };

  window.setTimeout(blink, Math.random() * 2500);
}