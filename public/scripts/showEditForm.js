var currentForm = null; // Variable to keep track of the currently open form

function showEditForm(id) {
  var form = document.getElementById('edit-form-' + id);

  // Close the previous form if it exists
  if (currentForm) {
    currentForm.style.display = "none";
  }

  // Display the selected form
  if (form.style.display === "none") {
    form.style.display = "block";
    currentForm = form; // Update the current form
  } else {
    form.style.display = "none";
    currentForm = null; // Reset the current form
  }
}
