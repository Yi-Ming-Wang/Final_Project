
function getIncidentsHtml(){
    cleardata();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "incidents.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("showDataset").innerHTML = xhr.responseText;
            setTimeout(loaddata1,1000);
        }
    };
    xhr.send();
}

function getSchoolHtml() {
    cleardata();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "school.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("showDataset").innerHTML = xhr.responseText;
            setTimeout(loaddata2,1000);
        }
    };
    xhr.send();
}

function getCrimesHtml() {
    cleardata();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "crimes.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("showDataset").innerHTML = xhr.responseText;
            setTimeout(loaddata3,1000);
        }
    };
    xhr.send();
}

function getPermitsHtml() {
    cleardata();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "permits.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("showDataset").innerHTML = xhr.responseText;
            setTimeout(loaddata4,1000);
        }
    };
    xhr.send();
}
 function cleardata()
 {
     document.getElementById("searchresults1").innerHTML="";
     document.getElementById("searchresults2").innerHTML="";
     document.getElementById("searchresults3").innerHTML="";
     document.getElementById("searchresults4").innerHTML="";
 }
