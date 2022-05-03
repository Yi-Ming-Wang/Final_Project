var xhr = new XMLHttpRequest();
var x = x || [];// x could be normal var or act as [].

window.onload=loaddata4;
function loaddata4() {
    xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);


    document.getElementById("class").addEventListener("keyup", function (){ searchClass(this.value);},false);
    document.getElementById("num").addEventListener("keyup", function (){ searchContractor(this.value);},false);
    document.getElementById("permitNum").addEventListener("keyup", function (){ searchCommunity(this.value);},false);
    document.getElementById("address").addEventListener("keyup", function (){ searchAddress(this.value);},false);



    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();
}

function searchClass(value) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by class's name"+"<br>";

    var output="<tr><th>Permit Numbers</th><th>Address</th><th>Contractor</th><th>Community</th><th>Class</th><th>Select</th></tr>";
    var searchName;
    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.workclass;
        if(searchName.startsWith(value))
        {
            output+="<tr><td>"
            output+=obj.permitnum
            output+="</td><td>"
            output+=obj.originaladdress
            output+="</td><td>"
            output+=obj.contractorname
            output+="</td><td>"
            output+=obj.communityname
            output+="</td><td>"
            output+=obj.workclass
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                     + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults4").innerHTML=output;

}

function searchContractor(value2) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by number of units"+"<br>";

    var output="<tr><th>Permit Numbers</th><th>Address</th><th>Contractor</th><th>Community</th><th>Class</th><th>Select</th></tr>";
    var searchName;

    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.housingunits;
        if(searchName.startsWith(value2))
        {
            output+="<tr><td>"
            output+=obj.permitnum
            output+="</td><td>"
            output+=obj.originaladdress
            output+="</td><td>"
            output+=obj.contractorname
            output+="</td><td>"
            output+=obj.communityname
            output+="</td><td>"
            output+=obj.workclass
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults4").innerHTML=output;

}

function searchCommunity(value3) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by permit number"+"<br>";

    var output="<tr><th>Permit Numbers</th><th>Address</th><th>Contractor</th><th>Community</th><th>Class</th><th>Select</th></tr>";
    var searchName;

    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.permitnum
        if(searchName.startsWith(value3))
        {
            output+="<tr><td>"
            output+=obj.permitnum
            output+="</td><td>"
            output+=obj.originaladdress
            output+="</td><td>"
            output+=obj.contractorname
            output+="</td><td>"
            output+=obj.communityname
            output+="</td><td>"
            output+=obj.workclass
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults4").innerHTML=output;

}

function searchAddress(value4) {

    //var x=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML="Search information by address"+"<br>";

    var output="<tr><th>Permit Numbers</th><th>Address</th><th>Contractor</th><th>Community</th><th>Class</th><th>Select</th></tr>";
    var searchName;

    for(var i=0; i<x.length; i++)
    {
        var obj=x[i];
        searchName=obj.originaladdress;
        if(searchName.startsWith(value4))
        {
            output+="<tr><td>"
            output+=obj.permitnum
            output+="</td><td>"
            output+=obj.originaladdress
            output+="</td><td>"
            output+=obj.contractorname
            output+="</td><td>"
            output+=obj.communityname
            output+="</td><td>"
            output+=obj.workclass
            output+="</td><td>"
            output+="<a href=https://www.google.ca/maps/place/" + obj.latitude + "," + obj.longitude + " target=_blank>" + "Click here to see map"
                + "</a>"
            output+="</td></tr>";
        }

    }
    document.getElementById("searchresults4").innerHTML=output;

}