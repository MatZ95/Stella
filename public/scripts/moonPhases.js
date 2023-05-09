const moonDiv = document.getElementById('moon');
const moonRange = document.getElementById('moon-phase');
const moonImage = document.getElementById('moon-image');

moonRange.addEventListener('input', () => {
    const phase = moonRange.value;
    const moonImagePath = getMoonImagePath(phase);
    moonDiv.style.backgroundImage = `url(${moonImagePath})`;
    moonImage.src = moonImagePath;
});

function getMoonImagePath(phase) {
    const phaseNames = ['new-moon', 'waxing-crescent', 'first-quarter', 'waxing-gibbous', 'full-moon', 'waning-gibbous', 'last-quarter', 'waning-crescent'];
    const phaseIndex = Math.round(phase / 4);
    const phaseName = phaseNames[phaseIndex % 8];
    return `/images/moon-phases/${phaseName}.png`;
}