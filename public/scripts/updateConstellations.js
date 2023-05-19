function updateConstellation(constellationId) {
    const form = document.getElementById(`edit-form-${constellationId}`);
    const formData = new FormData(form);

    fetch(`/constellations/${constellationId}/edit`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
