// Place additional date function below within this JS files.
window.onload=initfunction;

function initfunction()
{
//date formatting
    var date = new Date()
    var formatted_date = date.getFullYear() + " / " + (date.getMonth() + 1) + " / " + date.getDate()
    //console.log(formatted_date)

    document.getElementById("dtfield").innerHTML = formatted_date;
}
