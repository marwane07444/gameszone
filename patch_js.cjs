const fs = require('fs');
let js = fs.readFileSync('src/main.js', 'utf-8');

js = js.replace(/setInterval\(\(\) => \{\n\s*const onlineCount = document.getElementById\('onlineCount'\);\n\s*if\(onlineCount\) \{\n\s*onlineCount.textContent = Math.floor\(Math.random\(\) \* 200\) \+ 200;\n\s*\}\n\s*\}, 3000\);/, `let currentOnline = 1428;
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
  }`);

// Also fix the duration from 5000 to 6000
js = js.replace(/const duration = 5000; \/\/ exactly 5 seconds/, 'const duration = 6000; // exactly 6 seconds');

fs.writeFileSync('src/main.js', js);
