let video;
let poseNet;
let pose;

// var leftBuffer;
// var rightBuffer;

function setup() {
  createCanvas(1200, 500);
  leftBuffer = createGraphics(600, 500);
  rightBuffer = createGraphics(600, 500);
  video = createCapture(VIDEO);
  video.hide();
  // video = createCapture(VIDEO);
  // video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses (poses){
console.log (poses);
if (poses.length > 0) {
  pose =poses[0].pose;
}
}

function modelLoaded (){
  console.log ('poseNet ready');
}


//https://stackoverflow.com/questions/37240287/can-i-create-multiple-canvas-elements-on-same-page-using-p5js
function draw (){
  drawLeftBuffer();
  drawRightBuffer();

  image(leftBuffer, 0, 0);
  image(rightBuffer, 600, 0);
}

function drawLeftBuffer() {

  image(video,0,0,600,500);

  if (pose){
  
     let eyeR = pose.rightEye;
     let eyeL = pose.leftEye;
     let d = dist(eyeR.x, eyeR.y,eyeL.x, eyeL.y);

       fill (255,0,0);
  strokeWeight (2)
  ellipse(pose.nose.x, pose.nose.y, d);

  ellipse(eyeL.x,eyeL.y, d);
  ellipse(eyeR.x, eyeR.y, d);

  ellipse(pose.leftEar.x, pose.leftEar.y, d);
  ellipse(pose.rightEar.x, pose.rightEar.y, d);

  ellipse(pose.leftShoulder.x, pose.leftShoulder.y, d);
  ellipse(pose.rightShoulder.x, pose.rightShoulder.y, d);

  ellipse(pose.leftElbow.x, pose.leftElbow.y, d);
  ellipse(pose.rightElbow.x, pose.rightElbow.y, d);

  ellipse(pose.leftWrist.x, pose.leftWrist.y, d);
  ellipse(pose.rightWrist.x, pose.rightWrist.y, d);

  ellipse(pose.leftHip.x, pose.leftHip.y, d);
  ellipse(pose.rightHip.x, pose.rightHip.y, d);

  ellipse(pose.leftKnee.x, pose.leftKnee.y, d);
  ellipse(pose.rightKnee.x, pose.rightKnee.y, d);

  ellipse(pose.leftAnkle.x, pose.leftAnkle.y, d);
  ellipse(pose.rightAnkle.x, pose.rightAnkle.y, d);
  }

}

  function drawRightBuffer() {

    
    rightBuffer.background(255, 100, 255);
    rightBuffer.fill(0, 0, 0);
     
      rightBuffer.textSize(20);
      rightBuffer.strokeWeight(1);
      rightBuffer.text('type to get started',10, 30 );
  
      push()
          rightBuffer.textSize(200);
          rightBuffer.strokeWeight(1);
          rightBuffer.text(key,200, 200);
         pop()
        

    
    // rightBuffer.textSize(302);
    // rightBuffer.text(key,100, 100);
    
  }
  
// function draw() {
//   image(video,0,0);
  
//   if (pose){
  
//   let eyeR = pose.rightEye;
//   let eyeL = pose.leftEye;
//   let d = dist(eyeR.x, eyeR.y,eyeL.x, eyeL.y)

//   //  for (let i= 0; i < pose.keypoints.length; i++) {
//   //   let x = pose.keypoints [i].position.x;
//   //   let y = pose.keypoint [i].position.y;
//   //   fill (255,0,0);
//   //   stroke (0,0,0);
//   //   strokeWeight (2); 
//   //   ellipse (x,y,20,50);


//   fill (255,0,0);
//   strokeWeight (2)
//   ellipse(pose.nose.x, pose.nose.y, d);

//   ellipse(eyeL.x,eyeL.y, d);
//   ellipse(eyeR.x, eyeR.y, d);

//   ellipse(pose.leftEar.x, pose.leftEar.y, d);
//   ellipse(pose.rightEar.x, pose.rightEar.y, d);

//   ellipse(pose.leftShoulder.x, pose.leftShoulder.y, d);
//   ellipse(pose.rightShoulder.x, pose.rightShoulder.y, d);

//   ellipse(pose.leftElbow.x, pose.leftElbow.y, d);
//   ellipse(pose.rightElbow.x, pose.rightElbow.y, d);

//   ellipse(pose.leftWrist.x, pose.leftWrist.y, d);
//   ellipse(pose.rightWrist.x, pose.rightWrist.y, d);

//   ellipse(pose.leftHip.x, pose.leftHip.y, d);
//   ellipse(pose.rightHip.x, pose.rightHip.y, d);

//   ellipse(pose.leftKnee.x, pose.leftKnee.y, d);
//   ellipse(pose.rightKnee.x, pose.rightKnee.y, d);

//   ellipse(pose.leftAnkle.x, pose.leftAnkle.y, d);
//   ellipse(pose.rightAnkle.x, pose.rightAnkle.y, d);

//   }
// }


