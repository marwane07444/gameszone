const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// 1. Spacing reductions
css = css.replace(/padding-top: 48px;\n\s*padding-bottom: 48px;/, 'padding-top: 32px;\n  padding-bottom: 32px;');
css = css.replace(/\.section-title \{\n\s*font-size: 24px;\n\s*font-weight: 800;\n\s*margin-bottom: 32px;/, '.section-title {\n  font-size: 24px;\n  font-weight: 800;\n  margin-bottom: 24px;');
css = css.replace(/\.features \{\n\s*padding: 60px 0;/, '.features {\n  padding: 40px 0;');
css = css.replace(/\.features-grid \{\n\s*display: grid;\n\s*grid-template-columns: repeat\(auto-fit, minmax\(280px, 1fr\)\);\n\s*gap: 32px;/, '.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;');
css = css.replace(/\.feature-card \{\n\s*background: var\(--surface\);\n\s*padding: 32px;/, '.feature-card {\n  background: var(--surface);\n  padding: 24px;');
css = css.replace(/\.app-grid \{\n\s*display: grid;\n\s*grid-template-columns: repeat\(auto-fill, minmax\(150px, 1fr\)\);\n\s*gap: 24px;/, '.app-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 16px;');

// 2. Offer Badge Layout
css = css.replace(/\.offer-badge \{[\s\S]*?\}/, `.offer-badge {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}`);

// Add padding to offer details to avoid badge overlap
css = css.replace(/\.offer-card \{([\s\S]*?)padding: 14px 16px;([\s\S]*?)\}/, '.offer-card {$1padding: 14px 16px;\n  padding-right: 20px;$2}');

// 3. Premium Popup Glow & Shadow
css = css.replace(/\.popup-content \{[\s\S]*?box-shadow: 0 20px 40px rgba\(0,0,0,0\.15\);/, `.popup-content {
  box-sizing: border-box;
  background: var(--surface);
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12), 0 0 60px rgba(59, 130, 246, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);`);

css = css.replace(/#progressPopup \.popup-content \{[\s\S]*?box-shadow: 0 32px 64px rgba\(37, 99, 235, 0\.15\), inset 0 0 0 1px rgba\(255, 255, 255, 0\.5\);/, `#progressPopup .popup-content {
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12), 0 0 60px rgba(59, 130, 246, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);`);

// 4. Premium Icon Wrapper
css += `
.premium-icon-wrapper {
  position: relative;
  width: 94px;
  height: 94px;
  margin-bottom: 16px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-blur-bg {
  position: absolute;
  inset: -10px;
  background-size: cover;
  background-position: center;
  filter: blur(15px);
  opacity: 0.5;
  border-radius: 50%;
  z-index: 0;
  transition: all 0.3s ease;
}
.premium-icon-wrapper .popup-app-icon {
  position: relative;
  z-index: 1;
  width: 94px;
  height: 94px;
  border-radius: 20px;
  margin-bottom: 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0px); }
}
`;

fs.writeFileSync('src/style.css', css);
