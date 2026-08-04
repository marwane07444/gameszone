const fs = require('fs');
let js = fs.readFileSync('src/main.js', 'utf-8');

js = js.replace(/function openVerificationPopup\(\) \{[\s\S]*?\}\n\}/, `let offersLoaded = false;
function openVerificationPopup() {
  document.getElementById('verifyAppTitle').innerText = currentApp.name;
  document.getElementById('verifyAppIcon').src = currentApp.img;
  document.getElementById('verificationPopup').classList.add('active');
  
  if (!offersLoaded) {
    const locker = document.getElementById('content-locker');
    locker.innerHTML = '<div style="text-align:center; padding: 20px;"><i class="fas fa-spinner fa-spin" style="color:#3b82f6; font-size:24px;"></i></div>';
    
    fetch('https://d1cdbd1x576ga0.cloudfront.net/public/offers/feed.php?user_id=536541&api_key=b18c81828ee8bdf3b552ed2e5bf88f92&s1=&s2=')
      .then(res => res.json())
      .then(data => {
        locker.innerHTML = '';
        const topOffers = data.slice(0, 3);
        const diffs = ['Easy', 'Easy', 'Medium'];
        const badgeClasses = ['badge-easy', 'badge-easy', 'badge-medium'];
        
        topOffers.forEach((offer, index) => {
          const diff = diffs[index] || 'Medium';
          const badgeClass = badgeClasses[index] || 'badge-medium';
          
          const card = document.createElement('div');
          card.className = 'offer-card';
          card.onclick = () => window.open(offer.url, '_blank');
          
          card.innerHTML = \`
            <img class="offer-api-icon" src="\${offer.network_icon}" alt="Icon">
            <div class="offer-details"><h4>\${offer.name}</h4></div>
            <div class="offer-badge \${badgeClass}">\${diff}</div>
          \`;
          locker.appendChild(card);
        });
        offersLoaded = true;
      })
      .catch(err => {
        console.error(err);
        locker.innerHTML = '<p style="text-align:center; font-size:13px; color:#64748b;">Failed to load offers. Please try again.</p>';
      });
  }

  // Optionally, if the user has an AdBlueMedia script that looks for this:
  if(typeof _Nl === 'function') {
    try { _Nl(); } catch(e) {}
  }
}`);

fs.writeFileSync('src/main.js', js);
