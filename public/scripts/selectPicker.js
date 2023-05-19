const maxSelections = 8; // Maximum number of selections

const selectElement = document.querySelector('.selectpicker');
const options = selectElement.options;

selectElement.addEventListener('change', function() {
  const selectedOptions = Array.from(options).filter(option => option.selected);

  if (selectedOptions.length > maxSelections) {
    const deselectedOptions = selectedOptions.slice(maxSelections);
    deselectOptions(deselectedOptions);
  } else {
    enableAllOptions();
  }

  updateRemainingOptions();
});

function deselectOptions(options) {
  options.forEach(option => {
    option.selected = false;
    option.classList.add('deselected');
  });
}

function enableAllOptions() {
  Array.from(options).forEach(option => {
    option.disabled = false;
  });
}

function updateRemainingOptions() {
  const selectedOptions = Array.from(options).filter(option => option.selected);
  const selectedCount = selectedOptions.length;

  Array.from(options).forEach(option => {
    if (selectedCount >= maxSelections && !option.selected) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  });
}
