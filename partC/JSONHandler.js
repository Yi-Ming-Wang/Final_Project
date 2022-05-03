var xhr = new XMLHttpRequest();
var x = x || [];// x could be normal var or act as [].
var uniqueItemPhone = "";// This unique phone data act as a pointer or flag, which we can retreat data by travelling through nodes.
window.onload=loaddata;
function loaddata()
{
    xhr.open("GET", "rentalclients.json", true);

    document.getElementById("lastNameInput").addEventListener("keyup", function (){ searchLastName(this.value);},false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();

}

function searchLastName(value)
{
    var output = "<tr><th>Select client</th><th>Last Name</th><th>First Name</th></tr>";
    var searchName;
    var arraySearchItem;
    for(var i=0; i<x.length; i++)
    {
        var obj = x[i];
        searchName = obj.last_name;

        if (searchName.startsWith(value)) {
            var attributeId = obj.phone
            var attributeValue = obj.email
            output += "<tr><td>"
            output += "<input type='radio'"
            output += " id='" + attributeId + "'" + "name='clientInfo'" + " value='" + attributeValue + "'" + ">"
            output += "</td><td>"
            output += obj.last_name
            output += "</td><td>"
            output += obj.first_name;
            output += "</td></tr>"
        }


    }
document.getElementById("searchresults").innerHTML = output;

    var radios = document.getElementsByName("clientInfo");
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            document.getElementById("car_rental").disabled=false;
            arraySearchItem = this.value;
            for (var i = 0; i < x.length; i++)
            {
                var obj = x[i];
                var item = obj.email;
                if(arraySearchItem == item)
                {
                    uniqueItemPhone += obj.phone;
                    var outputItem = "<tr><th>Last Name</th><th>First Name</th><th>address</th><th>State</th><th>Email</th><th>Phone</th></tr>";
                    outputItem  += "<tr><td>"
                    outputItem += obj.last_name
                    outputItem  += "</td><td>"
                    outputItem += obj.first_name
                    outputItem  += "</td><td>"
                    outputItem += obj.address
                    outputItem  += "</td><td>"
                    outputItem += obj.state_prov
                    outputItem  += "</td><td>"
                    outputItem += obj.email
                    outputItem  += "</td><td>"
                    outputItem += obj.phone
                    outputItem += "</td></tr>";

                }
            }
            document.getElementById("showClient").innerHTML = outputItem;
        }
    }

}

function getRental()
{
    /*var compact = 0;
    var midSize = 0;
    var luxury = 0;
    var van = 0;
    */
    var output = "";
    var totalDays = document.getElementById("numDays").value;
    var carRental = document.getElementsByName("type");
    var carRentalValue;
    var typeOfCar = "";
    var rackValue;
    var gpsValue;
    var subTotal;
    var outputItem = "<tr><td>";
    for (var i = 0; i < x.length; i++)
    {
        var obj = x[i];
        var item = obj.phone;
        if( item == uniqueItemPhone)
        {

            outputItem += "Last Name :" + obj.last_name
            outputItem  += "</td></tr><tr><td>"
            outputItem += "First Name :" + obj.first_name
            outputItem  += "</td></tr><tr><td>"
            outputItem += "Your Address :" + obj.address
            outputItem  += "</td></tr><tr><td>"
            outputItem += "State :" + obj.state_prov
            outputItem  += "</td></tr><tr><td>"
            outputItem += "Your Email :" + obj.email
            outputItem  += "</td></tr><tr><td>"
            outputItem += "Your Phone number :" + obj.phone
            outputItem += "</td></tr>";
            document.getElementById("showClientInfo").innerHTML = outputItem;
        }
    }






    for(var i = 0; i < carRental.length; i++)
    {
        if(carRental[i].checked)
        {
            carRentalValue = carRental[i].value;
        }
    }

    if(carRentalValue == 15)
    {
        typeOfCar += "Your Compact total is: ";
    }
    if(carRentalValue == 20)
    {
        typeOfCar += "Your Mid-Size total is: ";
    }
    if(carRentalValue == 35)
    {
        typeOfCar += "Your Luxury total is: ";
    }
    if(carRentalValue == 40)
    {
        typeOfCar += "Your Van total is: ";
    }
    output += typeOfCar + "$ " + (carRentalValue * totalDays) + "<br>";
    subTotal = carRentalValue * totalDays;
    if(document.querySelector('input[name=rack]:checked'))
    {
        rackValue = parseFloat(document.getElementById("rackValue").value);
        rackValue *= totalDays;
        if(rackValue != parseFloat(0))
        {
            output += "<br>" + "Roof Rack as per $5/day Total is: $" + rackValue;
            subTotal += rackValue;
        }
    }
    if(document.querySelector('input[name=gps]:checked'))
    {
        gpsValue = parseFloat(document.getElementById("gpsValue").value);
        if(gpsValue != parseFloat(0))
        {
            output += "<br>" + "GPS $10 Total is: $" + gpsValue;
            subTotal += gpsValue;
        }
    }
    if(document.querySelector('input[name=seat]:checked'))
    {

            output += "<br>" + "Baby seat is for Free!";

    }

    output += "<br><br>" + "Your Sub total is $ " + subTotal  + " with " + totalDays + " day(s) of rental " + "<br>" + "Thank you for rent with us :)";
    document.getElementById("result").innerHTML = output;

}