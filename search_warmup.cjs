const fs = require('fs');
const contentPath = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\5d49a344-76c9-4f4e-8d31-d1df88b7d56f\\.system_generated\\steps\\13\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// Search for warmup data or script tags containing JSON
console.log('Searching for JSON data tags in HTML...');
const matches = content.match(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log(`Found ${matches.length} application/json script tags:`);

matches.forEach((tag, i) => {
  const idMatch = tag.match(/id="([^"]+)"/i);
  const id = idMatch ? idMatch[1] : `unknown-${i}`;
  console.log(`\nTag ${i + 1}: ID = ${id}, Length = ${tag.length}`);
  if (tag.length < 500) {
    console.log(tag);
  } else {
    console.log(tag.substring(0, 300) + '... [TRUNCATED] ...' + tag.substring(tag.length - 200));
  }
});

// Let's also check if there is any script tag with window.__STATE__ or similar
const stateMatch = content.match(/window\.__[A-Z_]+__/gi);
if (stateMatch) {
  console.log('\nFound window.__STATE__ style variables:', stateMatch);
}
