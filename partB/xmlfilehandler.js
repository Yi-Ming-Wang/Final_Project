
// XML handler var are all global var
var xhr = new XMLHttpRequest();
var doc;// Var of object to store parsed XML data
var nodes;// Set a nodes pointer
var counter = 0; // Set a node counter
var answer;
window.onload=displayXML;

/**
 * Void function to load XML files
 * and sent XML data to caller
 */
function displayXML()
{

    xhr.open("GET", "FinalQuiz.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayQuestions(xhr);// Sent xhr object to calller
        }
    };
    xhr.send();

}

/**
 * Function to let poniter travelled through the loaded XML files
 *
 * @param xhr
 */
function displayQuestions(xhr)
{
    doc = xhr.responseXML;
    nodes = doc.getElementsByTagName("question");// getElementsByTagName act as a Flag.
    answer = doc.getElementsByTagName("rightanswers");
    var quizloop = ""; // Var to append all the created elements.
    var a;
    var b;
    var c;
    var d;
    var designPatternA = "<input type='radio'";
    var designPatternB = "<input type='radio'";
    var designPatternC = "<input type='radio'";
    var designPatternD = "<input type='radio'";


    // Start travelled through every nodes
    for (var i = 0; i < nodes.length; ++i) {
        var QuestionNum = nodes[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;
        //if ('question' === nodes[i].tagName.toLowerCase()) {
            // nodes[i] is a <document>, increment counter
            ++counter;
            // get nodes
            questionName = nodes[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue;
            quizloop += QuestionNum+") "+questionName + "<br>";
            a = designPatternA + " id='q" + counter + "'" +
                                 " name='q" + counter + "'" + " value='a' " + ">" + " (A) ";
            a += nodes[i].getElementsByTagName("a")[0].childNodes[0].nodeValue;
            quizloop += a + "<br>";
            b = designPatternB + " id='q" + counter + "'" +
                " name='q" + counter + "'"  + " value='b' " + ">" + " (B) ";
            b += nodes[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
            quizloop += b + "<br>";
            c = designPatternC + " id='q" + counter + "'" +
                " name='q" + counter + "'" + " value='c' " + ">" +  " (C) ";
            c += nodes[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
            quizloop += c + "<br>";
            d = designPatternD + " id='q" + counter + "'" +
                " name='q" + counter + "'" + " value='d' " + ">" +  " (D) ";
            d += nodes[i].getElementsByTagName("d")[0].childNodes[0].nodeValue;
            quizloop += d + "<br>";


            // suffix = counter; // don't append a number for 0
            /*
            document.getElementById('qname'+suffix).textContent = questionName.textContent;
            document.getElementById('optionA'+suffix).textContent = a.textContent;
            document.getElementById('optionB'+suffix).textContent = b.textContent;
            document.getElementById('optionC'+suffix).textContent = c.textContent;
            document.getElementById('optionD'+suffix).textContent = d.textContent;
            */

        //}

    }
     document.getElementById("qlist").innerHTML = quizloop;

}
// Ref to website https://stackoverflow.com/questions/15612470/loop-through-xml-parser
/**
 * Implement myFunction for onclick event
 */
function myFunction()
{


  var myArray = answer[0].childNodes[0].nodeValue;
  var correctA = myArray.split(',');
  var correct = 0;
  var nodes = doc.getElementsByTagName("question");
  var suffix = -1;
  var objectList = [];
    var qA1 = document.getElementsByName('q1');
    var qA1_value = "error";
    for(var i = 0; i < qA1.length; i++)
    {
        if(qA1[i].checked)
        {
            qA1_value = qA1[i].value;
        }
    }
    objectList.push(qA1_value);
    var qA2 = document.getElementsByName('q2');
    var qA2_value = "error";
    for(var i = 0; i < qA2.length; i++)
    {
        if(qA2[i].checked)
        {
            qA2_value = qA2[i].value;
        }
    }
    objectList.push(qA2_value);
    var qA3 = document.getElementsByName('q3');
    var qA3_value = "error";
    for(var i = 0; i < qA3.length; i++)
    {
        if(qA3[i].checked)
        {
            qA3_value = qA3[i].value;
        }
    }
    objectList.push(qA3_value);
    var qA4 = document.getElementsByName('q4');
    var qA4_value ="error";
    for(var i = 0; i < qA4.length; i++)
    {
        if(qA4[i].checked)
        {
            qA4_value = qA4[i].value;
        }
    }
    objectList.push(qA4_value);
    var qA5 = document.getElementsByName('q5');
    var qA5_value ="error";
    for(var i = 0; i < qA5.length; i++)
    {
        if(qA5[i].checked)
        {
            qA5_value = qA5[i].value;
        }
    }
    objectList.push(qA5_value);

  /*var qA1 = document.querySelector('input[name="q1"]:checked').value;
  objectList.push(qA1);
  var qA2 = document.querySelector('input[name="q2"]:checked').value;
  objectList.push(qA2);
  var qA3 = document.querySelector('input[name="q3"]:checked').value;
  objectList.push(qA3);
  var qA4 = document.querySelector('input[name="q4"]:checked').value;
  objectList.push(qA4);
  var qA5 = document.querySelector('input[name="q5"]:checked').value;
  objectList.push(qA5);
  */


    for(var i = 0; i < nodes .length; i++)
    {
        ++suffix;
        var a = correctA[i];
        var b = objectList[suffix];
        if(a == b)
        {
            correct ++;
        }

    }


    document.getElementById("result").innerHTML = "Grade " + correct + " / " + (nodes .length) ;
}


