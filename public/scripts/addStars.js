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

        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('img');
          star.classList.add('star');
          star.src = '/images/star-image.png';
          star.style.left = Math.floor(Math.random() * screenWidth) + 'px';
          star.style.top = Math.floor(Math.random() * screenHeight) + 'px';
          document.body.appendChild(star);
        }
      }
