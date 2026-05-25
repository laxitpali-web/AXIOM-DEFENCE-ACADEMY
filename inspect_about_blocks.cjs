const fs = require('fs');
const content = fs.readFileSync('about2_response.html', 'utf8');

// Sourced jpg image URLs
const images = [
  '01.jpg',
  'IMG-20240629-WA0021.jpg',
  'IMG_20190118_171045861.jpg'
];

images.forEach(img => {
  const index = content.indexOf(img);
  if (index !== -1) {
    console.log(`\n================== BLOCK FOR IMAGE: ${img} ==================`);
    const start = Math.max(0, index - 1200);
    const end = Math.min(content.length, index + 2200);
    console.log(content.substring(start, end));
  } else {
    console.log(`Image not found: ${img}`);
  }
});
