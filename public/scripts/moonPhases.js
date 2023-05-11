document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const moonRange = document.getElementById('moon-phase');

    moonRange.addEventListener('input', () => {
        const phase = moonRange.value;
        const moonImagePath = getMoonImagePath(phase);
        container.style.backgroundImage = `url(${moonImagePath})`;
    });

    function getMoonImagePath(phase) {
        const phaseNames = ['new-moon', 'waxing-crescent', 'waxing-gibbous', 'first-quarter', 'full-moon', 'last-quarter', 'waning-gibbous', 'waning-crescent'];
        const phaseIndex = Math.round(phase / 4);

        if (phase === '0' || phase === '29') {
            return `/images/moon-phases/new-moon.png`;
        } else if (phase === '15') {
            return `/images/moon-phases/full-moon.png`;
        } else {
            const phaseName = phaseNames[phaseIndex % 8];
            return `/images/moon-phases/${phaseName}.png`;
        }
    }

    const defaultImagePath = getMoonImagePath(15);
    container.style.backgroundImage = `url(${defaultImagePath})`;
});
