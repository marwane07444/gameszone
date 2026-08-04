(function() {
  try {
    var proto = Object.getPrototypeOf(window);
    var desc = Object.getOwnPropertyDescriptor(window, 'fetch') || (proto && Object.getOwnPropertyDescriptor(proto, 'fetch'));
    if (desc && desc.get && !desc.set) {
      var realFetch = desc.get.call(window);
      Object.defineProperty(window, 'fetch', {
        get: function() { return realFetch; },
        set: function(val) { realFetch = val; },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {}
})();

const appsData = [
  { name: 'GTA VI', img: 'images/gta 66.png', badge: 'Mobile', dls: '1.5M+', size: '3.4 GB', rating: 4.9 },
  { name: 'Fortnite', img: 'images/fortnite.png', badge: 'Mod', dls: '850K+', size: '2.1 GB', rating: 4.5 },
  { name: 'GTA V', img: 'images/GTA V.png', badge: 'Mobile', dls: '620K+', size: '2.8 GB', rating: 4.8 },
  { name: 'Minecraft', img: 'images/mincraft.png', badge: 'Mod', dls: '950K+', size: '420 MB', rating: 4.7 },
  { name: 'Free Fire', img: 'images/free fire.png', badge: 'Mod', dls: '1.2M+', size: '380 MB', rating: 4.5 },
  { name: 'PUBG', img: 'images/pupg.png', badge: 'Mod', dls: '1.1M+', size: '720 MB', rating: 4.6 },
  { name: 'Call of Duty: Mobile', img: 'images/Call of Duty Mobile.png', badge: 'Mobile', dls: '780K+', size: '1.9 GB', rating: 4.7 },
  { name: 'Warzone Mobile', img: 'images/Warzone Mobile.png', badge: 'Mobile', dls: '410K+', size: '2.4 GB', rating: 4.4 },
  { name: 'Valorant', img: 'images/Valorant.png', badge: 'Mod', dls: '530K+', size: '1.5 GB', rating: 4.7 },
  { name: 'Brawl Stars', img: 'images/Brawl Stars.png', badge: 'Mod', dls: '890K+', size: '340 MB', rating: 4.6 },
  { name: 'Clash Royale', img: 'images/Clash Royale.png', badge: 'Mod', dls: '720K+', size: '210 MB', rating: 4.5 },
  { name: 'Clash of Clans', img: 'images/Clash of Clans.png', badge: 'Mod', dls: '980K+', size: '310 MB', rating: 4.7 },
  { name: 'Mobile Legends: Bang Bang', img: 'images/Mobile Legends Bang Bang.png', badge: 'Mobile', dls: '810K+', size: '480 MB', rating: 4.4 },
  { name: 'EA Sports FC Mobile', img: 'images/EA Sports FC Mobile.png', badge: 'Mobile', dls: '670K+', size: '520 MB', rating: 4.5 },
  { name: 'FIFA 23', img: 'images/FIFA 23.png', badge: 'Mod', dls: '490K+', size: '1.8 GB', rating: 4.4 },
  { name: 'Genshin Impact', img: 'images/Genshin Impact.png', badge: 'Mod', dls: '920K+', size: '3.2 GB', rating: 4.8 },
  { name: 'Wuthering Waves', img: 'images/Wuthering Waves.png', badge: 'Mod', dls: '380K+', size: '2.9 GB', rating: 4.6 },
  { name: 'Honor of Kings', img: 'images/Honor of Kings.png', badge: 'Mod', dls: '540K+', size: '610 MB', rating: 4.5 },
  { name: 'League of Legends', img: 'https://i.postimg.cc/qggh1gK2/League-of-Legends.png', badge: 'Mod', dls: '860K+', size: '1.4 GB', rating: 4.7 },
  { name: 'Stumble Guys', img: 'images/Stumble Guys.png', badge: 'Mod', dls: '630K+', size: '220 MB', rating: 4.3 },
  { name: 'Subway Surfers', img: 'images/Subway Surfers.png', badge: 'Mobile', dls: '1.5M+', size: '160 MB', rating: 4.6 },
  { name: 'Among Us', img: 'images/Among Us.png', badge: 'Mod', dls: '910K+', size: '190 MB', rating: 4.4 },
  { name: 'Apex Legends', img: 'images/Apex Legends.png', badge: 'Mod', dls: '470K+', size: '2.3 GB', rating: 4.5 },
  { name: 'Counter-Strike 2', img: 'images/Counter-Strike 2.png', badge: 'Mod', dls: '590K+', size: '2.1 GB', rating: 4.7 },
  { name: 'Black Myth: Wukong', img: 'images/Black Myth Wukong.png', badge: 'Mod', dls: '310K+', size: '3.5 GB', rating: 4.9 },
  { name: 'Elden Ring', img: 'images/Elden Ring.png', badge: 'Mod', dls: '430K+', size: '3.1 GB', rating: 4.9 },
  { name: 'Red Dead Redemption 2', img: 'images/Red Dead Redemption 2 mod.png', badge: 'Mod', dls: '390K+', size: '3.8 GB', rating: 4.9 },
  { name: 'Arena Breakout', img: 'images/Arena Breakout.png', badge: 'Mobile', dls: '280K+', size: '1.7 GB', rating: 4.5 },
  { name: 'Hades II', img: 'images/Hades II.png', badge: 'Mod', dls: '190K+', size: '1.2 GB', rating: 4.8 },
  { name: 'The Crew Motorfest', img: 'images/The Crew Motorfest.png', badge: 'Mod', dls: '220K+', size: '2.6 GB', rating: 4.6 },
  { name: 'Arc Raiders', img: 'images/arc raider.png', badge: 'Mod', dls: '170K+', size: '2.2 GB', rating: 4.6 },
  { name: 'Hollow Knight', img: 'images/hollow knight.png', badge: 'Mod', dls: '450K+', size: '1.1 GB', rating: 4.8 },
  { name: 'Metro Exodus', img: 'images/metro exuces.png', badge: 'Mod', dls: '280K+', size: '3.2 GB', rating: 4.7 },
  { name: 'Overwatch 2', img: 'images/overwatche 2.png', badge: 'Mod', dls: '620K+', size: '2.5 GB', rating: 4.6 },
  { name: 'Roblox', img: 'images/roblox.png', badge: 'Mod', dls: '1.8M+', size: '180 MB', rating: 4.6 },
  { name: 'Spider-Man Miles Morales', img: 'images/spider man mortals.png', badge: 'Mod', dls: '510K+', size: '2.7 GB', rating: 4.8 },
  { name: 'CUSTOM PHONE', img: 'https://i.postimg.cc/rFF08MnK/bd366edd22524307820e480ee7739e40.png', badge: 'PREMIUM', dls: '50.2K+', size: '120.7 MB', rating: 4 },
  { name: 'TOK UNLOCKED', img: 'https://i.postimg.cc/1z36HZz8/652061468.png', badge: 'PREMIUM', dls: '510K+', size: '352.5 MB', rating: 4.5 },
  { name: 'MECCHA CHAMELEON', img: 'images/meccha.png', badge: 'PREMIUM', dls: '12.3K+', size: '210.1 MB', rating: 4 },
  { name: 'ANIMAL ANOMALY SCRIPT', img: 'https://i.postimg.cc/mr0hfvqS/animal-hospital-object-1781882821084.png', badge: 'PREMIUM', dls: '53K+', size: '50.5 MB', rating: 4.5 },
  { name: 'TOCA BOCA UNLOCKED', img: 'https://i.postimg.cc/MGC0TGHQ/Toca-Boca-World-Icon-default-icon.webp', badge: 'PREMIUM', dls: '210.2K+', size: '290.7 MB', rating: 4 },
  { name: 'THE CRINGE APP', img: 'https://i.postimg.cc/vmQJHHQc/unnamed.webp', badge: 'PREMIUM', dls: '50.2K+', size: '150.1 MB', rating: 4 },
  { name: 'AVATAR WORLD MOD', img: 'https://i.postimg.cc/44Q8Tx7v/Chat-GPT-Image-Jun-10-2026-07-55-23-PM.png', badge: 'PREMIUM', dls: '150.2K+', size: '310.2 MB', rating: 4 },
  { name: 'ACTIVITY VIEWER', img: 'https://i.postimg.cc/d0h33Q1j/unnamed-20.png', badge: 'PREMIUM', dls: '15.7K+', size: '190.8 MB', rating: 4.5 },
  { name: 'MOVIES MOBILE', img: 'https://www2.0zz0.com/2025/06/26/19/875060654.jpg', badge: 'PREMIUM', dls: '136.9K+', size: '320.4 MB', rating: 4 }
];

let currentApp = null;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderApps(appsData);
  
  // Random online users
  let currentOnline = 1428;
  function updateOnlineCount() {
    const onlineCount = document.getElementById('onlineCount');
    if(onlineCount) {
      const change = Math.floor(Math.random() * 16) + 5;
      const sign = Math.random() > 0.5 ? 1 : -1;
      let nextOnline = currentOnline + (change * sign);
      if(nextOnline < 1000) nextOnline = 1000 + change;
      if(nextOnline > 1700) nextOnline = 1700 - change;
      
      animateValue(onlineCount, currentOnline, nextOnline, 600);
      currentOnline = nextOnline;
    }
    const nextInterval = Math.floor(Math.random() * 2000) + 2000;
    setTimeout(updateOnlineCount, nextInterval);
  }
  
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      obj.innerHTML = '<strong>' + current.toLocaleString() + ' users online</strong>';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  setTimeout(updateOnlineCount, 2000);
  
  // Set initial text
  const initialOnlineCount = document.getElementById('onlineCount');
  if (initialOnlineCount) {
    initialOnlineCount.innerHTML = '<strong>1,428 users online</strong>';
  }
  
  let currentCategoryFilter = 'all';
  let currentSearchTerm = '';

  function isGameItem(app) {
    if (app.badge === 'PREMIUM') return false;
    const badgeUpper = (app.badge || '').toUpperCase();
    if (badgeUpper === 'MOD' || badgeUpper === 'MOBILE' || badgeUpper === 'GAME') return true;
    const gameKeywords = [
      'roblox', 'fortnite', 'gta', 'minecraft', 'free fire', 'pubg', 'call of duty',
      'warzone', 'valorant', 'brawl stars', 'clash', 'mobile legends', 'ea sports',
      'fifa', 'genshin', 'wuthering', 'honor of kings', 'league of legends',
      'stumble guys', 'subway surfers', 'among us', 'apex', 'counter-strike',
      'black myth', 'elden ring', 'red dead', 'arena breakout', 'hades', 'the crew',
      'arc raiders', 'hollow knight', 'metro', 'overwatch', 'spider'
    ];
    return gameKeywords.some(kw => app.name.toLowerCase().includes(kw));
  }

  function applyFilters() {
    const filtered = appsData.filter(app => {
      const matchesSearch = !currentSearchTerm || app.name.toLowerCase().includes(currentSearchTerm);
      const isGame = isGameItem(app);
      let matchesCategory = true;
      if (currentCategoryFilter === 'apps') {
        matchesCategory = !isGame;
      } else if (currentCategoryFilter === 'games') {
        matchesCategory = isGame;
      }
      return matchesSearch && matchesCategory;
    });
    renderApps(filtered);
  }

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if(searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.toLowerCase();
      applyFilters();
    });
  }

  // Filter chips functionality
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategoryFilter = chip.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Navigation Dropdown Menu functionality
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const navDropdownMenu = document.getElementById('navDropdownMenu');

  if (menuToggleBtn && navDropdownMenu) {
    menuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.menu-dropdown-wrapper')) {
        navDropdownMenu.classList.remove('show');
      }
    });
  }

  // Header Nav Links functionality
  const navHome = document.getElementById('navHome');
  const navGames = document.getElementById('navGames');
  const navFaq = document.getElementById('navFaq');

  const closeDropdown = () => {
    if (navDropdownMenu) navDropdownMenu.classList.remove('show');
  };

  if (navHome) {
    navHome.addEventListener('click', (e) => {
      e.preventDefault();
      closeDropdown();
      document.querySelectorAll('.nav-dropdown-item').forEach(el => el.classList.remove('active'));
      navHome.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (navGames) {
    navGames.addEventListener('click', (e) => {
      e.preventDefault();
      closeDropdown();
      document.querySelectorAll('.nav-dropdown-item').forEach(el => el.classList.remove('active'));
      navGames.classList.add('active');
      
      // Activate Games filter chip
      const gamesChip = document.querySelector('.filter-chip[data-filter="games"]');
      if (gamesChip) {
        gamesChip.click();
      }
      
      const sectionHeader = document.querySelector('.section-header') || document.getElementById('appGrid');
      if (sectionHeader) {
        sectionHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (navFaq) {
    navFaq.addEventListener('click', (e) => {
      e.preventDefault();
      closeDropdown();
      document.querySelectorAll('.nav-dropdown-item').forEach(el => el.classList.remove('active'));
      navFaq.classList.add('active');
      
      const faqSection = document.getElementById('faqSection') || document.getElementById('footer');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  
  // TikTok fallback check
  const ua = navigator.userAgent.toLowerCase();
  const ref = document.referrer.toLowerCase();
  const fb = document.getElementById('tiktok-fallback');
  const tikTokIdentifiers = ["tiktok", "musical_ly", "com.ss.android.ugc.trill", "musicallygo"];
  const isTikTokBrowser = tikTokIdentifiers.some(id => ua.includes(id)) || ref.includes("tiktok");
  if (isTikTokBrowser && fb) {
    fb.style.display = 'flex';
  }
  
  // Close popup outside click
  document.querySelectorAll('.popup-overlay').forEach(popup => {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopups();
      }
    });
  });

  // Attach ripple effect globally for dynamically generated elements
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.device-btn, .download-now-btn, .verify-download-btn');
    if(btn) {
      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      
      const rect = btn.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');
      
      const existingRipple = btn.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }
      btn.appendChild(circle);
    }
  });
});

function renderApps(apps) {
  const grid = document.getElementById('appGrid');
  if(!grid) return;
  grid.innerHTML = '';
  
  apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'app-card';
    const safeName = app.name.replace(/'/g, "\\'");
    const badgeText = app.badge || '';
    const badgeClass = badgeText.toLowerCase();
    
    card.innerHTML = `
      <div class="app-img-wrapper">
        <img src="${app.img}" alt="${app.name}">
      </div>
      <h3 class="app-title">${app.name}</h3>
      <div class="app-stats">
        <span><i class="fas fa-download"></i> ${app.dls}</span>
        <span><i class="fas fa-file"></i> ${app.size}</span>
      </div>
      <div class="app-rating-row">
        <span class="rating-number"><i class="fas fa-star"></i> ${Number(app.rating).toFixed(1)}</span>
        ${badgeText ? `<span class="app-tag-badge ${badgeClass}">${badgeText}</span>` : ''}
      </div>
      <button class="download-now-btn" onclick="openDevicePopup('${safeName}', '${app.img}')">
        <i class="fas fa-download"></i> Download
      </button>
    `;
    grid.appendChild(card);
  });
}

function detectUserOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  if (/android/i.test(ua)) {
    return 'android';
  }
  if (/Macintosh|Mac OS X/i.test(ua)) {
    return 'ios';
  }
  return 'android';
}

function autoHighlightDeviceOS() {
  const userOS = detectUserOS();
  const androidBtn = document.querySelector('.device-btn.android');
  const iosBtn = document.querySelector('.device-btn.ios');
  
  if (androidBtn) androidBtn.classList.remove('detected-highlight');
  if (iosBtn) iosBtn.classList.remove('detected-highlight');
  
  if (userOS === 'ios' && iosBtn) {
    iosBtn.classList.add('detected-highlight');
  } else if (userOS === 'android' && androidBtn) {
    androidBtn.classList.add('detected-highlight');
  }
}

window.openDevicePopup = function(name, img) {
  currentApp = { name, img };
  document.getElementById('deviceAppTitle').innerText = name;
  document.getElementById('deviceAppIcon').src = img;
  autoHighlightDeviceOS();
  document.getElementById('devicePopup').classList.add('active');
};

window.closeDevicePopup = function() {
  document.getElementById('devicePopup').classList.remove('active');
};

function closePopups() {
  document.querySelectorAll('.popup-overlay').forEach(p => p.classList.remove('active'));
}

window.selectDevice = function(device) {
  // Give ripple time to show
  setTimeout(() => {
    closeDevicePopup();
    startProgress(device);
  }, 200);
};

function startProgress(device) {
  document.getElementById('progressAppTitle').innerText = currentApp.name;
  document.getElementById('progressAppIcon').src = currentApp.img;
  
  const ring = document.getElementById('progressRing');
  const checkmark = document.getElementById('progressCheckmark');
  const pct = document.getElementById('progressCenterText');
  const status = document.getElementById('progressStatus');
  
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');
  const step5 = document.getElementById('step5');
  const steps = [step1, step2, step3, step4, step5];
  
  steps.forEach(step => {
    step.className = 'pending';
    step.querySelector('span').innerHTML = '<i class="far fa-circle"></i>';
  });
  
  const circumference = 2 * Math.PI * 45; // ~282.74
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  checkmark.classList.remove('active');
  
  pct.innerText = '0%';
  status.innerText = 'Starting...';
  
  document.getElementById('progressPopup').classList.add('active');
  
  let startTime = Date.now();
  const duration = 5000; // exactly 5 seconds
  
  function updateStep(stepIndex) {
    for (let i = 0; i < steps.length; i++) {
      const span = steps[i].querySelector('span');
      if (i < stepIndex) {
        steps[i].className = 'completed';
        span.innerHTML = '<i class="fas fa-check-circle"></i>';
      } else if (i === stepIndex) {
        steps[i].className = 'processing';
        span.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      } else {
        steps[i].className = 'pending';
        span.innerHTML = '<i class="far fa-circle"></i>';
      }
    }
  }
  
  function animate() {
    let elapsed = Date.now() - startTime;
    let progress = elapsed / duration;
    if (progress > 1) progress = 1;
    
    // Smooth progress mapping 0% to 100%
    let eased = 1 - Math.pow(1 - progress, 2.5);
    let currentPct = Math.min(100, Math.floor(eased * 100));
    
    // Direct match between circle offset and percentage number
    const offset = circumference * (1 - (currentPct / 100));
    ring.style.strokeDashoffset = offset;
    pct.innerText = currentPct + '%';
    
    if (currentPct < 20) {
      status.innerText = 'Downloading...';
      updateStep(0);
    } else if (currentPct < 45) {
      status.innerText = 'Verifying...';
      updateStep(1);
    } else if (currentPct < 70) {
      status.innerText = 'Preparing...';
      updateStep(2);
    } else if (currentPct < 90) {
      status.innerText = 'Optimizing...';
      updateStep(3);
    } else if (currentPct < 100) {
      status.innerText = 'Finalizing...';
      updateStep(4);
    } else {
      status.innerText = 'Download Ready';
      updateStep(5);
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      pct.innerText = '';
      status.innerText = 'Download Ready';
      checkmark.classList.add('active');
      
      setTimeout(() => {
        document.getElementById('progressPopup').classList.remove('active');
        openVerificationPopup();
      }, 500); // 0.5 seconds delay after 100%
    }
  }
  
  requestAnimationFrame(animate);
}

let offersLoaded = false;
let countdownInterval = null;
let countdownTime = 600; // 10 minutes (600 seconds)

function startVerificationCountdown() {
  const countdownText = document.getElementById('verifyCountdownText');
  
  function updateTimer() {
    if (countdownTime <= 0) {
      if (countdownText) countdownText.innerText = "0:00";
      clearInterval(countdownInterval);
      countdownInterval = null;
      return;
    }
    
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    const formattedSec = seconds < 10 ? '0' + seconds : seconds;
    if (countdownText) {
      countdownText.innerText = `${minutes}:${formattedSec}`;
    }
    countdownTime--;
  }
  
  updateTimer();
  if (!countdownInterval) {
    countdownInterval = setInterval(updateTimer, 1000);
  }
}

function openVerificationPopup() {
  document.getElementById('verifyAppTitle').innerText = currentApp.name;
  document.getElementById('verifyAppIcon').src = currentApp.img;
  
  const blurBg = document.getElementById('verifyAppIconBlur');
  if (blurBg) {
    blurBg.style.backgroundImage = `url(${currentApp.img})`;
  }
  
  document.getElementById('verificationPopup').classList.add('active');
  startVerificationCountdown();
  
  if (!offersLoaded) {
    const locker = document.getElementById('content-locker');
    locker.innerHTML = '<div style="text-align:center; padding: 20px;"><i class="fas fa-spinner fa-spin" style="color:#3b82f6; font-size:24px;"></i></div>';
    
    fetch('https://d1cdbd1x576ga0.cloudfront.net/public/offers/feed.php?user_id=536541&api_key=b18c81828ee8bdf3b552ed2e5bf88f92&s1=&s2=')
      .then(res => res.json())
      .then(data => {
        locker.innerHTML = '';
        const topOffers = data.slice(0, 3);
        const diffs = ['Easy', 'Easy', 'Medium'];
        const badgeClasses = ['badge-easy', 'badge-easy', 'badge-medium', 'badge-easy'];
        
        topOffers.forEach((offer) => {
          const offerDesc = offer.anchor || offer.description || offer.conversion || offer.instructions || 'Complete simple steps to verify';
          
          const card = document.createElement('div');
          card.className = 'offer-card';
          card.onclick = () => window.open(offer.url, '_blank');
          
          card.innerHTML = `
            <img class="offer-api-icon" src="${offer.network_icon}" alt="Icon">
            <div class="offer-details">
              <h4>${offer.name}</h4>
              <p class="offer-desc">${offerDesc}</p>
            </div>
            <div class="offer-action-btn">OPEN</div>
          `;
          locker.appendChild(card);
        });
        offersLoaded = true;
      })
      .catch(err => {
        console.error(err);
        locker.innerHTML = '<p style="text-align:center; font-size:13px; color:var(--text-muted);">Failed to load offers. Please try again.</p>';
      });
  }

  // Optionally, if the user has an AdBlueMedia script that looks for this:
  if(typeof _Nl === 'function') {
    try { _Nl(); } catch(e) {}
  }
}

window.showVerifyToast = function() {
  const toast = document.getElementById('verifyToast');
  if (toast) {
    toast.classList.remove('show');
    // Force a reflow so the animation restarts
    void toast.offsetWidth;
    toast.classList.add('show');
    
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
};

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  applyTheme(initialTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      toggleBtn.setAttribute('title', 'Switch to Light Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      toggleBtn.setAttribute('title', 'Switch to Dark Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }
}
