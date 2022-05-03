var xhr = new XMLHttpRequest();
var x = x || [];// x could be normal var or act as [].

window.onload=loaddata1;
function loaddata1() {
    xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);


    document.getElementById("incidentInfo").addEventListener("keyup", function (){ searchInfo(this.value);},false);
    document.getElementById("date").addEventListener("keyup", function (){ searchDate(this.value);},false);
    document.getElementById("countPersons").addEventListener("keyup", function (){ searchCountPersons(this.value);},false);
    document.getElementById("id").addEventListener("keyup", function (){ searchId(this.value);},false);



    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();
}

function searchInfo(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by case informations"+"<br>";

    var output="<tr><th>Incident info</th><th>Description</th><th>Number of persons</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.description;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.incident_info
            output+="</td><td>"
            output+=obj.description
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.start_dt
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults1").innerHTML=output;

}

function searchDate(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by date"+"<br>";

    var output="<tr><th>Incident info</th><th>Description</th><th>Number of persons</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.start_dt;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.incident_info
            output+="</td><td>"
            output+=obj.description
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.start_dt
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults1").innerHTML=output;

}

function searchCountPersons(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by number of persons from case"+"<br>";

    var output="<tr><th>Incident info</th><th>Description</th><th>Number of persons</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.count;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.incident_info
            output+="</td><td>"
            output+=obj.description
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.start_dt
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults1").innerHTML=output;

}

function searchId(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by case ID"+"<br>";

    var output="<tr><th>Incident info</th><th>Description</th><th>Number of persons</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.id;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.incident_info
            output+="</td><td>"
            output+=obj.description
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.start_dt
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults1").innerHTML=output;

}
