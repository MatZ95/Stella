const dropdownToggle = document.querySelector('.dropdown-toggle');
const checkboxes = document.querySelectorAll('input[name="constellationStars"]');
const MAX_SELECTIONS = 5;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', function(event) {
    event.stopPropagation();

    const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (selectedCheckboxes.length > MAX_SELECTIONS) {
      this.checked = false;
      return;
    }

    updateDropdownToggleText(selectedCheckboxes.length);
  });
});

function updateDropdownToggleText(selectedCount) {
  if (selectedCount === 0) {
    dropdownToggle.innerText = 'Select Stars';
  } else if (selectedCount === 1) {
    dropdownToggle.innerText = '1 Star Selected';
  } else {
    dropdownToggle.innerText = `${selectedCount} Stars Selected`;
  }
}

// Prevent closing the dropdown when clicking inside
document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
  event.stopPropagation();
});
