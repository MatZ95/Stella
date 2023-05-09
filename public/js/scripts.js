function populateTable() {
    fetch('/stars/get')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(item => {
          const row = tableBody.insertRow();
          const idCell = row.insertCell();
          const nameCell = row.insertCell();
          const typeCell = row.insertCell();
          const actionCell = row.insertCell();
          idCell.innerHTML = item._id;
          nameCell.innerHTML = item.name;
          typeCell.innerHTML = item.type;
          actionCell.innerHTML = "<button onclick=" + "deleteStar(event,'" + item._id + "')" + ">Delete Star</button>";
        });
      })
      .catch(error => console.error(error));
  }

async function deleteStar(event, id) {
  event.preventDefault();

  try {
    const response = await axios.delete(`/stars/delete/${id}`);
    console.log(response.data.message);

    location.reload();
  } catch (error) {
    console.error(error);
  }
}
