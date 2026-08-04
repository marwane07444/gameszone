const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css += `
@media (max-width: 640px) {
  nav {
    padding: 12px 16px;
  }
  .nav-brand {
    font-size: 16px;
    gap: 6px;
  }
  .nav-brand img {
    width: 24px;
    height: 24px;
  }
  .nav-social {
    padding: 4px 8px;
    font-size: 12px;
  }
  .online-users {
    padding: 4px 8px;
    font-size: 11px;
    gap: 4px;
  }
  .hero {
    padding: 32px 16px;
  }
  .hero h1 {
    font-size: clamp(32px, 10vw, 48px);
  }
  .features {
    padding: 48px 16px;
  }
  .feature-card {
    padding: 16px;
  }
}
`;

fs.writeFileSync('src/style.css', css);
