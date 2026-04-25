const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const res = await fetch('https://newcarmobile.in/our-fleet/');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const images = [];
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.includes('data:image') && !images.includes(src)) {
      images.push(src);
    }
  });
  
  fs.writeFileSync('images.json', JSON.stringify(images, null, 2));
}

scrape();
