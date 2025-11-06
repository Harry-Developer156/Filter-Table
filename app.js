let filterInput = document.getElementById("filterInput");
let addCity = document.getElementById("addCity");
let addCountry = document.getElementById("addCountry");
let dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

// Filter table function
function search() {
    let filterText = filterInput.value.toLowerCase();
    let rows = dataTable.getElementsByTagName("tr");
    let found = false;

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
    }

    for (let i = 0; i < rows.length; i++) {
        let city = rows[i].cells[0].textContent.toLowerCase();
        let country = rows[i].cells[1].textContent.toLowerCase();

        if (filterText === "" || city.includes(filterText) || country.includes(filterText)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    // If no match found
    if (!found && filterText !== "") {
        alert("Sorry no data found!");
    }
}

// Add Data Function
function addData() {
    let city = addCity.value;
    let country = addCountry.value;

    if (city === "" || country === "") {
        alert("Please enter both city and country names.");
        return;
    }

    // Table mei new row add krny k liye
    let newRow = dataTable.insertRow();
    let cityCell = newRow.insertCell(0);
    let countryCell = newRow.insertCell(1);

    cityCell.textContent = city;
    countryCell.textContent = country;

    // Input khali krny k liye
    addCity.value = "";
    addCountry.value = "";
}

