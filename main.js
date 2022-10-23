noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550, 500);
canvas=createCanvas(500, 500);
canvas.position(560, 150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    document.getElementById("text_size").innerHTML="Width and Height of the text will be ="+difference+"px";
background('#969A97');
textSize(difference);
fill('#FFE787');
text("Hello", 50, 400);
}
function modelLoaded(){
console.log('PoseNet is Initialized!');
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose X= " + noseX+ "Nose Y=" + noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX = " + rightWristX + "difference ="+difference);
}
}