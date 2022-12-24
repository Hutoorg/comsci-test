window.addEventListener("load", preventFormSubmit, true);

function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
}

// Send data form the form
function handleFormSubmit(formObject) {
    google.script.run.withSuccessHandler(createTable).processForm(formObject);
    document.getElementById("search-form").reset();
}

// Create table and data in table
function createTable(dataArray) {
    if (dataArray && dataArray !== undefined && dataArray.length != 0) {
        var result = "<table class='table table-sm table-striped table-hover' id='dtable'>" +
            "<thead style='white-space: nowrap'>" +
            "<tr>" +
            "<th scope='col'>No." +
            "<th scope='col'>ID</th>" +
            "<th scope='col'>Name</th>" +

            "</tr>" +
            "</thead>";
        for (var i = 0; i < dataArray.length; i++) {
            result += "<tr>";
            for (var j = 0; j < dataArray[i].length; j++) {
                result += "<td>" + dataArray[i][j] + "</td>";
            }
            result += "</tr>";
        }
        result += "</table>";
        var div = document.getElementById('search-results');
        div.innerHTML = result;
    } else {
        var div = document.getElementById('search-results');
        //div.empty()
        div.innerHTML = "No results!";
    }
}