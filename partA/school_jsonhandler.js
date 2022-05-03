var xhr = new XMLHttpRequest();
var x = x || [];// x could be normal var or act as array.

window.onload=loaddata2;
function loaddata2() {
    xhr.open("GET", "https://data.calgary.ca/resource/fd9t-tdn2.json", true);


    document.getElementById("schoolN").addEventListener("keyup", function (){ searchSchool(this.value);},false);
    document.getElementById("type").addEventListener("keyup", function (){ searchType(this.value);},false);
    document.getElementById("city").addEventListener("keyup", function (){ searchCity(this.value);},false);
    document.getElementById("source").addEventListener("keyup", function (){ searchSource(this.value);},false);



    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();
}

function searchSchool(value)
{

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search information by school name" + "<br>";

    var output = "<tr><th>School Name</th><th>Board</th><th>Type</th><th>School ID</th><th>Data source</th><th>Select</th></tr>";
    var searchName;
    for (var i = 0; i < x.length; i++) {
        var obj = x[i];
        searchName = obj.name;
        if (searchName.startsWith(value)) {
            output += "<tr><td>"
            output += obj.name
            output += "</td><td>"
            output += obj.board
            output += "</td><td>"
            output += obj.type
            output += "</td><td>"
            output += obj.structure_id
            output += "</td><td>"
            output += obj.data_source
            output += "</td><td>"
            output += "<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output += "</td></tr>";
        }
    }
    document.getElementById("searchresults2").innerHTML=output;
}

function searchCity(value)
{

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search information by city" + "<br>";

    var output = "<tr><th>School Name</th><th>Board</th><th>Type</th><th>School ID</th><th>Data source</th><th>Select</th></tr>";
    var searchName;
    for (var i = 0; i < x.length; i++) {
        var obj = x[i];
        searchName = obj.city;
        if (searchName.startsWith(value)) {
            output += "<tr><td>"
            output += obj.name
            output += "</td><td>"
            output += obj.board
            output += "</td><td>"
            output += obj.type
            output += "</td><td>"
            output += obj.structure_id
            output += "</td><td>"
            output += obj.data_source
            output += "</td><td>"
            output += "<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults2").innerHTML=output;
}

function searchType(value)
{

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search information by school type" + "<br>";

    var output = "<tr><th>School Name</th><th>Board</th><th>Type</th><th>School ID</th><th>Data source</th><th>Select</th></tr>";
    var searchName;
    for (var i = 0; i < x.length; i++) {
        var obj = x[i];
        searchName = obj.type;
        if (searchName.startsWith(value)) {
            output += "<tr><td>"
            output += obj.name
            output += "</td><td>"
            output += obj.board
            output += "</td><td>"
            output += obj.type
            output += "</td><td>"
            output += obj.structure_id
            output += "</td><td>"
            output += obj.data_source
            output += "</td><td>"
            output += "<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults2").innerHTML=output;
}

function searchSource(value)
{

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search information by data source" + "<br>";

    var output = "<tr><th>School Name</th><th>Board</th><th>Type</th><th>School ID</th><th>Data source</th><th>Select</th></tr>";
    var searchName;
    for (var i = 0; i < x.length; i++) {
        var obj = x[i];
        searchName = obj.data_source;
        if (searchName.startsWith(value)) {
            output += "<tr><td>"
            output += obj.name
            output += "</td><td>"
            output += obj.board
            output += "</td><td>"
            output += obj.type
            output += "</td><td>"
            output += obj.structure_id
            output += "</td><td>"
            output += obj.data_source
            output += "</td><td>"
            output += "<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults2").innerHTML=output;
}