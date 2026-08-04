const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css += `
/* Verification Popup Styles */
.verify-popup-content {
  padding: 24px;
  max-width: 420px;
  background: var(--surface);
  border-radius: 24px;
}
.verify-header {
  margin-bottom: 20px;
}
.verify-instruction {
  background: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  color: #1e3a8a;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.verify-instruction i {
  color: #3b82f6;
  font-size: 20px;
  flex-shrink: 0;
}
.offers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.offer-card {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}
.offer-card:hover {
  transform: translateY(-2px);
  border-color: #bfdbfe;
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.1);
  background: #f8fafc;
}
.offer-card:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.05);
}
.offer-icon {
  width: 40px;
  height: 40px;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  flex-shrink: 0;
}
.offer-details h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
}
.offer-badge {
  margin-left: auto;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.badge-easy {
  background: #dcfce7;
  color: #166534;
}
.badge-medium {
  background: #fef9c3;
  color: #854d0e;
}

.verify-download-btn {
  width: 100%;
  padding: 16px 20px;
  min-height: 56px;
  border-radius: 18px;
  border: none;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  font-family: var(--font-family);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}
.verify-download-btn:not(.disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
}
.verify-download-btn:not(.disabled):active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}
.verify-download-btn.disabled {
  background: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.8;
}

.verify-toast {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: #ffffff;
  padding: 14px 20px;
  border-radius: 50px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  border: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1e293b;
  font-weight: 600;
  font-size: 14px;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.verify-toast.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.verify-toast i {
  color: #f59e0b;
  font-size: 18px;
}

@media (max-width: 640px) {
  .verify-popup-content { padding: 20px 16px; }
  .offer-card { padding: 12px 14px; gap: 12px; }
  .verify-download-btn { min-height: 52px; font-size: 15px; }
}
`;

fs.writeFileSync('src/style.css', css);
