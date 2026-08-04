const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace(/<div class="popup-overlay" id="verificationPopup">[\s\S]*?<\/div>\n\s*<\/div>\n\s*<\/div>/, `<div class="popup-overlay" id="verificationPopup">
    <div class="popup-content verify-popup-content">
      <div class="popup-header verify-header">
        <img id="verifyAppIcon" src="" class="popup-app-icon" alt="App Icon">
        <h3 id="verifyAppTitle" class="popup-app-title">App Title</h3>
      </div>
      
      <div class="verify-instruction">
        <i class="fas fa-info-circle"></i>
        <span>Complete one quick offer below to unlock your download.</span>
      </div>

      <div class="content-locker-container">
        <!-- AdBlueMedia Content Locker -->
        <div id="content-locker" class="offers-list">
          <div class="offer-card">
            <div class="offer-icon"><i class="fas fa-gamepad"></i></div>
            <div class="offer-details"><h4>Play a game & reach level 10</h4></div>
            <div class="offer-badge badge-easy">Easy</div>
          </div>
          <div class="offer-card">
            <div class="offer-icon"><i class="fas fa-mobile-alt"></i></div>
            <div class="offer-details"><h4>Install and run this app</h4></div>
            <div class="offer-badge badge-easy">Easy</div>
          </div>
          <div class="offer-card">
            <div class="offer-icon"><i class="fas fa-tasks"></i></div>
            <div class="offer-details"><h4>Complete a quick survey</h4></div>
            <div class="offer-badge badge-medium">Medium</div>
          </div>
        </div>
      </div>
      
      <div class="verify-footer">
        <button class="verify-download-btn disabled" onclick="showVerifyToast()">
          <i class="fas fa-download"></i> Download
        </button>
      </div>
    </div>
  </div>

  <div id="verifyToast" class="verify-toast">
    <i class="fas fa-exclamation-triangle"></i>
    <span>Please verify that you are human first.</span>
  </div>`);

fs.writeFileSync('index.html', html);
