const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// Replace progress ring and wrapper CSS
css = css.replace(/\.circular-progress-wrapper \{[\s\S]*?\.progress-center-text i \{[\s\S]*?\}/, `.circular-progress-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 16px auto 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulseGlow 2s infinite alternate ease-in-out;
}
@keyframes pulseGlow {
  0% { filter: drop-shadow(0 0 12px rgba(96, 165, 250, 0.4)); transform: scale(1); }
  100% { filter: drop-shadow(0 0 24px rgba(37, 99, 235, 0.6)); transform: scale(1.03); }
}
.circular-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.progress-bg {
  fill: none;
  stroke: rgba(226, 232, 240, 0.6);
  stroke-width: 8;
}
.progress-ring {
  fill: none;
  stroke: url(#progressGradient);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.progress-checkmark {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  transition: stroke-dashoffset 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  stroke: #2563eb;
  transform-origin: center;
}
.progress-checkmark.active {
  stroke-dashoffset: 0;
  animation: successPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes successPop {
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.progress-center-text {
  position: absolute;
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  text-align: center;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}
.progress-center-text i {
  color: #2563eb;
  animation: successPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`);

// Inject popup glassmorphism specifically for progressPopup
css += `
#progressPopup .popup-content {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 32px 64px rgba(37, 99, 235, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}
`;

// Replace checklist styles
css = css.replace(/\.progress-status-container \{[\s\S]*?\.progress-checklist li\.completed \{[\s\S]*?\}/, `.progress-status-container {
  text-align: left;
  margin-top: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.05);
}
.progress-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.progress-checklist li {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.6;
}
.progress-checklist li span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  font-size: 15px;
  transition: all 0.3s ease;
}
.progress-checklist li.pending {
  color: var(--text-muted);
  transform: translateX(0);
}
.progress-checklist li.processing {
  color: var(--primary);
  font-weight: 700;
  opacity: 1;
  transform: translateX(6px);
}
.progress-checklist li.processing span {
  color: #60a5fa;
  filter: drop-shadow(0 0 4px rgba(96, 165, 250, 0.5));
}
.progress-checklist li.completed {
  color: #2563eb;
  font-weight: 600;
  opacity: 1;
  transform: translateX(2px);
}
.progress-checklist li.completed span {
  color: #2563eb;
}`);

fs.writeFileSync('src/style.css', css);
