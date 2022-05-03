var xhr = new XMLHttpRequest();
var x = x || [];// x could be normal var or act as [].

window.onload=loaddata3;
function loaddata3() {
    xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);


    document.getElementById("sector").addEventListener("keyup", function (){ searchSector(this.value);},false);
    document.getElementById("year").addEventListener("keyup", function (){ searchYear(this.value);},false);
    document.getElementById("month").addEventListener("keyup", function (){ searchMonth(this.value);},false);
    document.getElementById("count").addEventListener("keyup", function (){ searchCount(this.value);},false);



    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();
}

function searchSector(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by area in the city"+"<br>";

    var output="<tr><th>Area</th><th>Community</th><th>Number of crime</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.sector;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.sector
            output+="</td><td>"
            output+=obj.community_name
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.date
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults3").innerHTML=output;

}

function searchYear(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by year"+"<br>";

    var output="<tr><th>Area</th><th>Community</th><th>Number of crime</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.year;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.sector
            output+="</td><td>"
            output+=obj.community_name
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.date
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults3").innerHTML=output;

}

function searchCount(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by number count of crime"+"<br>";

    var output="<tr><th>Area</th><th>Community</th><th>Number of crime</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.count;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.sector
            output+="</td><td>"
            output+=obj.community_name
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.date
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults3").innerHTML=output;

}

function searchMonth(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by month"+"<br>";

    var output="<tr><th>Area</th><th>Community</th><th>Number of crime</th><th>Date</th><th>ID</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.month;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.sector
            output+="</td><td>"
            output+=obj.community_name
            output+="</td><td>"
            output+=obj.count
            output+="</td><td>"
            output+=obj.date
            output+="</td><td>"
            output+=obj.id
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults3").innerHTML=output;

}