document.addEventListener('DOMContentLoaded', function () {
    const rainVideo = document.getElementById('rain-video');
    const rainSlider = document.getElementById('rain-slider');
    const cloudinessSlider = document.getElementById('cloudiness-slider');

    rainSlider.addEventListener('input', function () {
        if (rainSlider.value === '0' || cloudinessSlider.value === '0') {
            rainVideo.style.display = 'none';
        } else {
            rainVideo.style.display = 'block';
        }
    });

    rainVideo.style.display = 'none';
});