const numConstellationsInput = document.getElementById('num-constellations');

fetch('/constellations/count')
    .then(res => res.json())
    .then(data => {
        const count = data.count;
        numConstellationsInput.value = count;
        addConstellations(count);
    })
    .catch(err => console.error(err));

function addConstellations(numConstellations) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const constellationImages = [
        '/images/constelation/C1.png',
        '/images/constelation/C2.png',
        '/images/constelation/C3.png',
        '/images/constelation/C4.png',
        '/images/constelation/C5.png'
    ];
    
    fetch('/constellations/constellationsdata')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < numConstellations; i++) {
                const constellation = document.createElement('img');
                constellation.classList.add('constellation');

                const randomImageIndex = Math.floor(Math.random() * constellationImages.length);
                const constellationImagePath = constellationImages[randomImageIndex];
                
                constellation.src = constellationImagePath;

                constellation.style.left = Math.floor(Math.random() * screenWidth) + 'px';
                constellation.style.top = Math.floor(Math.random() * screenHeight) + 'px';

                const { name, description, stars } = data[i % data.length];

                constellation.addEventListener('click', () => {
                    if (constellation.classList.contains('glow')) {
                        constellation.src = constellationImagePath;
                        constellation.classList.remove('glow');
                    } else {
                        constellation.src = constellationGlowImagesPath;
                        constellation.classList.add('glow');
                    }
                });

                // Fetch star data using star IDs
                fetch('/stars/stardata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ starIds: stars })
                })
                .then(res => res.json())
                .then(starData => {
                    const numberOfStars = starData.length;
                    const constellationImageIndex = Math.min(numberOfStars, constellationImages.length - 1);
                    constellation.src = constellationImages[constellationImageIndex];

                    const starNames = starData.map(star => star.name).join(', ');
                    constellation.title = `Constellation ${i + 1}\nName: ${name}\nDescription: ${description}\nStars: ${starNames}`;
                })
                .catch(err => console.error(err));

                document.body.appendChild(constellation);
            }
        })
        .catch(err => console.error(err));
}
