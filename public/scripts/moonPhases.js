document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const moonRange = document.getElementById('moon-phase');

    moonRange.addEventListener('input', () => {
      const phase = moonRange.value;
      const moonImagePath = getMoonImagePath(phase);
      container.style.backgroundImage = `url(${moonImagePath})`;
    });

    function getMoonImagePath(phase) {
      const phaseNames = ['new-moon', 'waxing-crescent', 'first-quarter', 'waxing-gibbous', 'full-moon', 'waning-gibbous', 'last-quarter', 'waning-crescent'];
      const phaseIndex = Math.round(phase / 4);
      const phaseName = phaseNames[phaseIndex % 8];
      return `/images/moon-phases/${phaseName}.png`;
    }

    const defaultImagePath = getMoonImagePath(0);
    container.style.backgroundImage = `url(${defaultImagePath})`;
  });
