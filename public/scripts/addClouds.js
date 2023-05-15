document.addEventListener('DOMContentLoaded', () => {
    const cloudinessSlider = document.getElementById('cloudiness-slider');
    const rainVideo = document.getElementById('rain-video');
    const rainSlider = document.getElementById('rain-slider');

    cloudinessSlider.addEventListener('input', () => {
        const cloudiness = cloudinessSlider.value;

        if (cloudinessSlider.value === '0') {
            rainSlider.value = '0';
            rainVideo.style.display = 'none';
        }
        generateClouds(cloudiness);
    });

    function generateClouds(cloudiness) {
        const container = document.getElementById('container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const clouds = document.getElementById('clouds');
        clouds.innerHTML = '';

        const cloudImages = [
            '/images/clouds/cloud1.png',
            '/images/clouds/cloud2.png',
            '/images/clouds/cloud3.png',
            '/images/clouds/cloud4.png',
            '/images/clouds/cloud5.png',
            '/images/clouds/cloud6.png',
            '/images/clouds/cloud7.png',
            '/images/clouds/cloud8.png',
        ];

        for (let i = 0; i < cloudiness; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');

            const randomImageIndex = Math.floor(Math.random() * cloudImages.length);
            const cloudImagePath = cloudImages[randomImageIndex];
            cloud.style.backgroundImage = `url(${cloudImagePath})`;

            const minCloudWidth = 100;
            const maxCloudWidth = 400;
            const cloudWidth = Math.floor(Math.random() * (maxCloudWidth - minCloudWidth) + minCloudWidth);

            const image = new Image();
            image.src = cloudImagePath;
            const aspectRatio = image.width / image.height;

            const cloudHeight = cloudWidth / aspectRatio;

            const cloudX = Math.floor(Math.random() * (containerWidth - cloudWidth));
            const cloudY = Math.floor(Math.random() * (containerHeight - cloudHeight));

            cloud.style.width = `${cloudWidth}px`;
            cloud.style.height = `${cloudHeight}px`;
            cloud.style.left = `${cloudX}px`;
            cloud.style.top = `${cloudY}px`;

            clouds.appendChild(cloud);
        }
    }

    const defaultCloudiness = 5;
    generateClouds(defaultCloudiness);
});
