peterpan = 0;
harrypotter = 0;

function preload()
{
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(450, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video, 0, 0, 450, 500);
}