var tableData = data;

// use select to get references to the HTML.
var tbody = d3.select("tbody");
var dateTime = d3.select("#datetime")
var submit = d3.select("#filter-btn")

// Show unfiltered table upon loading page.
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Create a function to update the table.
function updateTable(dataset) {
  // Clear the current table.
  tbody.html('');
  dataset.forEach(function(datetime) {
    var row = tbody.append("tr");
    Object.entries(datetime).forEach(function([key,value])  {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

// Create a Filter by date function by comparing strings for similarity.
function filterByDate(dataset) {
  var filteredData = dataset.filter(function (data) {
    return data.datetime == dateTime.value();
  });
  return filteredData;
}


// Add event listener.
submit.on("click", filterByDate(), {
  // Prevent page from automatically refreshing.
  d3.event.preventDefault();
  // retrieves the date the user has entered into the input box. 
  // Created a local instance of datetime
  var inputElement = dateTime;
  var inputValue = inputElement.property("value");
  // loop through array and check for matching dates.
  var result = filterByDate(data);
  updateTable(result);
});

filter.on("click", handleClick);


