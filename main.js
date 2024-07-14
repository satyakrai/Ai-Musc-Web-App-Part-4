song="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
score_leftWrist=0;
status="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function gotPoses(results){
    console.log(results);
    leftWrist_score=results[0].pose.keypoints[9].score;
    console.log(leftWrist_score);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("LeftWristX="+leftWristX+"LeftWristY="+leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+leftWristX+"rightWristY="+rightWristY);
    rightWrist_score=results[0].pose.keypoints[10].score;
    console.log(rightWrist_score);

}

function modelLoaded(){
    console.log("Posenet is initialized!");
}
function draw(){
    image(video,0,0,600,500);
    song.isPlaying(leftWristY);
    fill("#FF0000");
    stroke("#FF0000");
    if(score_leftWrist>=0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop()
        if(song==false){
        song2.play()
        document.getElementById("heading").innerHTML("Song 1")

        }
    }
}

function preload(){
    song=loadSound("music2.mp3");
    song2=loadSound("music.mp3");
}
