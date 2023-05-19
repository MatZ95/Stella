function updateConstellation(constellationId) {
    const form = document.getElementById(`edit-form-${constellationId}`);
    const formData = new FormData(form);

    fetch(`/constellations/${constellationId}/edit`, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Reload the page or perform any other action after successful submission
          location.reload();
        } else {
          throw new Error('Failed to update constellation');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
