const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// Add overflow-x: hidden to html, body
if (!css.includes('overflow-x: hidden;')) {
  css = css.replace(/body \{/, 'html, body {\n  overflow-x: hidden;\n  width: 100%;\n}\n\nbody {');
}

// Fix popup widths
css = css.replace(/width: 100%;\n\s*max-width: 340px;/g, 'width: 100%;\n  max-width: 90vw;\n  margin: 0 auto;');
css = css.replace(/\.popup-content \{/g, '.popup-content {\n  box-sizing: border-box;');

// Ensure the container is perfectly constrained
css = css.replace(/\.container \{[\s\S]*?\}/, '.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  box-sizing: border-box;\n  overflow: hidden;\n}');

// Ensure app grid does not overflow on small screens like 320px
css = css.replace(/\@media \(max-width: 640px\) \{\n\s*\.app-grid \{ grid-template-columns: repeat\(2, 1fr\); gap: 12px; \}\n\}/, '@media (max-width: 640px) {\n  .app-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }\n}');

fs.writeFileSync('src/style.css', css);
