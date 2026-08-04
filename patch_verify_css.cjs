const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// Update .verify-popup-content
css = css.replace(/\.verify-popup-content \{[\s\S]*?\}/, `.verify-popup-content {
  padding: 24px;
  max-width: 360px;
  background: var(--surface);
  border-radius: 24px;
}`);

// Add scrollable container to .offers-list
css = css.replace(/\.offers-list \{[\s\S]*?\}/, `.offers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px; /* for scrollbar */
}
.offers-list::-webkit-scrollbar {
  width: 4px;
}
.offers-list::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}`);

// Add style for .offer-api-icon
css += `
.offer-api-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);
}
.offer-details h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
  line-height: 1.3;
}
`;

fs.writeFileSync('src/style.css', css);
