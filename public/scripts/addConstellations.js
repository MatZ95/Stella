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
            '/images/stars/1.png',
            '/images/stars/2.png',
            '/images/stars/3.png',
            '/images/stars/4.png',
            '/images/stars/5.png'
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

            const { name, description } = data[i % data.length];

            constellation.title = `Constellation ${i + 1}\nName: ${name}\nDescription: ${description}`;

            document.body.appendChild(constellation);
        }
    })
    .catch(err => console.error(err));
}