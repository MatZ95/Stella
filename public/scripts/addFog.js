document.addEventListener('DOMContentLoaded', function () {
    const fogVideo = document.getElementById('fog-video');
    const fogSlider = document.getElementById('fog-slider');

    fogSlider.addEventListener('input', function () {
        if (fogSlider.value === '0') {
            fogVideo.style.display = 'none';
        } else {
            fogVideo.style.display = 'block';
        }
    });

    fogVideo.style.display = 'none';
});