x = 0;
y = 0;

drawn_circle = "";
drawn_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
document.getElementById("status").innerHTML = "System is listening pls speak  either circle or rectangle ";
recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHtml = "The speech has been recongnized as: " + content;
    if (content == "circle" || content == "Circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        drawn_circle = "set";
    }

    if (content == "rectangle" || content == "Rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        drawn_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(drawn_circle == "set")
    {
        radius = Math.floor(Math.random * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn "; 
        drawn_circle = "";  

    }

    if(drawn_rect == "set")
    {
        radius = Math.floor(Math.random * 100);
        rect(x,y,100,100);
        document.getElementById("status").innerHTML = "rectangle is drawn "
        drawn_rect = "";
    }
}
