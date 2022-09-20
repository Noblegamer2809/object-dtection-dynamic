objects = [];

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(380, 380);
    
}
status="";

img="";

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
        r=random(255)
        g=random(255)
        b=random(255)
        objectDetector.detect(video, gotResults);
    for(b=0; b<objects.length; b++)
    {
    document.getElementById("status").innerHTML="status: objects detected";
    document.getElementById("objects").innerHTML="the number of objects detected are = " + objects.length;
    fill(r,g,b);
    percent = floor(objects[b].confidence*100)
    text(objects[b].label+ " " +percent+"%",objects[b].x+15,objects[b].y+15);
    noFill()
    stroke(r,g,b);
    rect(objects[b].x,objects[b].y,objects[b].width,objects[b].height);
    }
    }

    
}

function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}