const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// Ensure overflow-x is strictly enforced
if (!css.includes('max-width: 100vw;')) {
  css = css.replace(/html, body \{[\s\S]*?\}/, 'html, body {\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100vw;\n  position: relative;\n}');
}

// Remove overflow: hidden from container to avoid clipping shadows, since body handles it
css = css.replace(/\.container \{[\s\S]*?\}/, '.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  box-sizing: border-box;\n}');

// Ensure app card text doesn't overflow
css = css.replace(/\.app-stats \{[\s\S]*?\}/, '.app-stats {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n}');

// Ensure nav and other full-width sections don't overflow
css += `
nav, header, main, section, footer {
  max-width: 100vw;
  box-sizing: border-box;
}
.hero-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
}
.hero-btn {
  max-width: 100%;
}
.app-card {
  max-width: 100%;
  overflow: hidden;
}
.feature-card {
  max-width: 100%;
  overflow: hidden;
}
`;

fs.writeFileSync('src/style.css', css);
