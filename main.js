noseX=0;
noseY=0;
function takesnapshot()
{
 save('icecream.png');
}
function preload(){
    nose = loadImage("https://i.postimg.cc/WpQV78qp/clownnose1.png");
}
function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture (VIDEO);
    video.size(600,400);
    video.hide();

    poolcool= ml5.poseNet(video, loaded);
    poolcool.on('pose', GOTPOSES);
}
function loaded()
{
    console.log('Posenet has turned on');
}
function GOTPOSES(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log(" nose y = " + noseY);
    }
}




function draw(){
    image(video,0, 0, 600, 400);
    image(nose, noseX, noseY, 30, 30);
}
