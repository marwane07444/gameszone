const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/\.app-img-wrapper img \{[\s\S]*?\}/, `.app-img-wrapper img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 100%;
}`);

css = css.replace(/\.popup-app-icon \{[\s\S]*?\}/, `.popup-app-icon {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);
  margin-bottom: 16px;
}`);

fs.writeFileSync('src/style.css', css);
