const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/<div class="verify-instruction">[\s\S]*?<\/div>/, `<div class="verify-instruction-box">
        <div class="verify-instruction-title"><i class="fas fa-lock"></i> Human Verification</div>
        <div class="verify-instruction-text">Complete a quick, free task below to <strong>unlock your download</strong>.</div>
      </div>`);
fs.writeFileSync('index.html', html);

// 2. Update src/main.js for offer cards
let js = fs.readFileSync('src/main.js', 'utf-8');
js = js.replace(/card\.innerHTML = \`[\s\S]*?\`;/, `card.innerHTML = \`
            <img class="offer-api-icon" src="\${offer.network_icon}" alt="Icon">
            <div class="offer-details">
              <h4>\${offer.name}</h4>
              <p class="offer-anchor">\${offer.anchor || 'Tap to claim your reward...'}</p>
            </div>
            <div class="offer-action-btn">OPEN</div>
            <div class="offer-badge \${badgeClass}">\${diff}</div>
          \`;`);
fs.writeFileSync('src/main.js', js);

// 3. Update src/style.css
let css = fs.readFileSync('src/style.css', 'utf-8');

// Minimize spacing
css = css.replace(/\.verify-popup-content \{\n\s*padding: 24px;/g, '.verify-popup-content {\n  padding: 16px;');
css = css.replace(/\.offers-list \{\n\s*display: flex;\n\s*flex-direction: column;\n\s*gap: 12px;\n\s*margin-bottom: 24px;/g, '.offers-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;');

// Instruction box
css = css.replace(/\.verify-instruction \{[\s\S]*?\}/, `.verify-instruction-box {
  background: #f4f6fb;
  border-left: 4px solid #6366f1;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.verify-instruction-title {
  color: #1e293b;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}
.verify-instruction-title i {
  color: #6366f1;
}
.verify-instruction-text {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
}
.verify-instruction-text strong {
  color: #1e293b;
  font-weight: 700;
}`);

// Offer card details & "OPEN" button
css = css.replace(/\.offer-details h4 \{[\s\S]*?\}/, `.offer-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
.offer-details h4 {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.offer-anchor {
  font-size: 11px;
  color: #94a3b8;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.offer-action-btn {
  border: 1px solid #e2e8f0;
  color: #4f46e5;
  font-size: 11px;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 20px;
  background: #ffffff;
  letter-spacing: 0.5px;
  margin-left: 8px;
}`);

// Offer Badge styling
css = css.replace(/\.offer-badge \{[\s\S]*?\}/, `.offer-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 8px;
  font-weight: 800;
  padding: 2px 5px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}`);

// Make download button grey and small
css = css.replace(/\.verify-download-btn \{[\s\S]*?\}/, `.verify-download-btn {
  width: 100%;
  padding: 10px 16px;
  min-height: 40px;
  border-radius: 10px;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  font-weight: 600;
  font-size: 13px;
  font-family: var(--font-family);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}`);
css = css.replace(/\.verify-download-btn:not\(\.disabled\):hover \{[\s\S]*?\}/, `.verify-download-btn:hover {
  background: #e2e8f0;
  color: #475569;
}`);
css = css.replace(/\.verify-download-btn:not\(\.disabled\):active \{[\s\S]*?\}/, `.verify-download-btn:active {
  background: #cbd5e1;
}`);

// Reduce margin bottom of icon wrapper
css = css.replace(/margin-bottom: 16px;\n\s*border-radius: 20px;/g, 'margin-bottom: 8px;\n  border-radius: 20px;');

fs.writeFileSync('src/style.css', css);
