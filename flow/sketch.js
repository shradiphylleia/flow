
let handPose;
let video;
let hands = [];

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);
}


 let t = 0;

function draw() {
  image(video, 0, 0, width, height);
  let pressurePoint = [0, 1, 2];

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < pressurePoint.length; j++) {
      let k = pressurePoint[j];
      let keypoint = hand.keypoints[k];
      
      let animatedRadius = 5 + 4 * sin(t);

      fill(55, 111, 115);
      circle(keypoint.x, keypoint.y, animatedRadius);
    }
  }

  t += 0.1;
}


function gotHands(results) {
  hands = results;
}
