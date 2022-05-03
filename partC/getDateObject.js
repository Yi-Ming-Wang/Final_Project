// Place additional date function below within this JS files.
window.onload=initfunction;

function initfunction()
{
//date formatting
    var date = new Date()
    var formatted_date = date.getFullYear() + " / " + (date.getMonth() + 1) + " / " + date.getDate()
    //console.log(formatted_date)
    var formatted_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var formatted_output = formatted_time + " On " + formatted_date;

    document.getElementById("dtfield").innerHTML = formatted_output;
}
