(function () {
  function playLogoAnimation() {
    try {
      var logoPath = document.getElementById('mmLogoPath');
      if (!logoPath) return;

      var length = logoPath.getTotalLength();
      logoPath.style.setProperty('--path-length', length);
      logoPath.style.strokeDasharray = length;
      logoPath.style.strokeDashoffset = length;

      logoPath.classList.remove('run-draw');
      void logoPath.offsetWidth;
      logoPath.classList.add('run-draw');

      console.log('[mm-logo] animation ran at', new Date().toLocaleTimeString());
    } catch (err) {
      console.error('[mm-logo] animation failed:', err);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    playLogoAnimation();
    setInterval(playLogoAnimation, 10000);
  });
})();
