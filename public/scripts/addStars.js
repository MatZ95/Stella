const numStarsInput = document.getElementById('num-stars');

fetch('/stars/count')
    .then(res => res.json())
    .then(data => {
        const count = data.count;
        numStarsInput.value = count;
        addStars(count);
    })
    .catch(err => console.error(err));

function addStars(numStars) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const starImages = [
        '/images/stars/1.png',
        '/images/stars/2.png',
        '/images/stars/3.png',
        '/images/stars/4.png',
        '/images/stars/5.png'
    ];

    const glowImages = [
        '/images/stars/6.png',
        '/images/stars/7.png',
        '/images/stars/8.png',
        '/images/stars/9.png',
        '/images/stars/10.png'
    ];

    fetch('/stars/stardata')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('img');
                star.classList.add('star');

                const randomImageIndex = Math.floor(Math.random() * starImages.length);
                const starImagePath = starImages[randomImageIndex];
                const glowImagePath = glowImages[randomImageIndex];

                star.src = starImagePath;

                star.style.left = Math.floor(Math.random() * screenWidth) + 'px';
                star.style.top = Math.floor(Math.random() * screenHeight) + 'px';

                const { name, description, constellation } = data[i % data.length];

                star.title = `Star ${i + 1}\nName: ${name}\nDescription: ${description}`;

                star.addEventListener('click', () => {
                    if (star.classList.contains('glow')) {
                        star.src = starImagePath;
                        star.classList.remove('glow');
                    } else {
                        star.src = glowImagePath;
                        star.classList.add('glow');
                    }
                });

                document.body.appendChild(star);
            }
        })
        .catch(err => console.error(err));
}
