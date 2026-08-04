const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

// The whole SVG is rotated -90deg, which breaks the checkmark orientation.
// Let's remove rotation from the whole SVG and only rotate the ring.
css = css.replace(/\.circular-progress \{\n\s*width: 100%;\n\s*height: 100%;\n\s*transform: rotate\(-90deg\);\n\}/, '.circular-progress {\n  width: 100%;\n  height: 100%;\n}');

css = css.replace(/\.progress-ring \{/, '.progress-ring {\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;');

// Let's also fix the Download Now button styling
css = css.replace(/\.download-now-btn \{[\s\S]*?\.download-now-btn:active \{[\s\S]*?\}/, `.download-now-btn {
  margin-top: auto;
  width: 100%;
  padding: 14px 20px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25), inset 0 2px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}
@media (max-width: 640px) {
  .download-now-btn { padding: 12px 16px; font-size: 14px; border-radius: 16px; }
}
.download-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35), inset 0 2px 0 rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
}
.download-now-btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.1);
}`);

fs.writeFileSync('src/style.css', css);
