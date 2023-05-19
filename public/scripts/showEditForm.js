var editForms = document.querySelectorAll(".edit-form");

editForms.forEach(function (form) {
  form.style.display = "none";
});

// Function to show/hide the edit form
function showEditForm(id) {
  var form = document.getElementById("edit-form-" + id);

  // Toggle the display of the clicked form
  form.style.display = form.style.display === "none" ? "block" : "none";

  // Hide all other edit forms except the clicked form
  editForms.forEach(function (otherForm) {
    if (otherForm !== form) {
      otherForm.style.display = "none";
    }
  });

}