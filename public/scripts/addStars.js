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

    fetch('/stars/stardata')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('img');
                star.classList.add('star');
                star.src = '/images/star-image.png';
                star.style.left = Math.floor(Math.random() * screenWidth) + 'px';
                star.style.top = Math.floor(Math.random() * screenHeight) + 'px';

                // get the name and description for this star image
                const { name, description, collection } = data[i % data.length];

                // set the title attribute to display the name and description
                star.title = `Star ${i + 1}\nName: ${name}\nDescription: ${description}\nCollection: ${collection}`;

                document.body.appendChild(star);
            }
        })
        .catch(err => console.error(err));
}
