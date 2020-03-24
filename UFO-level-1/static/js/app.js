// from data.js
const tableData = data;
console.log(tableData);

// Get a reference to the table body
const tbody = d3.select("tbody");

//Loop Through `data` and console.log each tableData object
tableData.forEach(function(UfoSighting) {
    console.log(UfoSighting);
});

//Use d3 to append one table row `tr` for each UfoSighting value
tableData.forEach(function(UfoSighting) {
    console.log(UfoSighting);
    const row = tbody.append("tr");

    //Use `Object.entries` to console.log each UfoSighting value
    Object.entries(UfoSighting).forEach(function([key, value]) {
        console.log(key, value);
        const cell = row.append("td");
        cell.text(value);
    });
});


// Select the Filter Table button
const filterbutton = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the filter-btn
filterbutton.on("click", function() {
    tbody.html("");
    const DateInput = d3.select("#datetime");
    const ValueInput = DateInput.property("value");
    console.log(ValueInput);
    // Filter data with ValueInput
    const filtereddata = tableData.filter(row => row.datetime == ValueInput);
    console.log(filtereddata);

    filtereddata.forEach(function(selections) {
        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        const row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            const cell = row.append("td");
            cell.text(value);
        });
    });

});
