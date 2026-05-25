const fs = require('fs');
const content = fs.readFileSync('about2_response.html', 'utf8');

// Find all HTML blocks that start with <div and end with </div> that contain our key images or names
const keys = ['01.jpg', 'IMG-20240629-WA0021.jpg', 'IMG_20190118_171045861.jpg', 'Chouhan', 'Mukherjee', 'Bhabhra'];

keys.forEach(key => {
  const index = content.indexOf(key);
  if (index !== -1) {
    console.log(`\n================== parent analysis for ${key} ==================`);
    // Print 100 characters before the tag containing it
    const start = Math.max(0, index - 300);
    const end = Math.min(content.length, index + 300);
    console.log(content.substring(start, end));
  }
});
