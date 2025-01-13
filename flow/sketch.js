
export function setupP5(sketchContainerId) {
  new p5((p) => {
    let video;
    let handPose;
    let hands = [];

    p.preload = () => {
      // Load the handPose model
      handPose = ml5.handPose(video, () => {
        console.log('HandPose model loaded');
      });
    };

    p.setup = () => {
      const canvas = p.createCanvas(640, 480);
      canvas.parent(sketchContainerId); // Attach canvas to the React container
      video = p.createCapture(p.VIDEO);
      video.size(640, 480);
      video.hide();

      // Start the detection loop
      detectHands();
    };

    const detectHands = () => {
      handPose.detect(video, (results) => {
        hands = results; // Update hands with the latest prediction
        detectHands(); // Keep detecting
      });
    };

    p.draw = () => {
      p.background(220);
      p.image(video, 0, 0, p.width, p.height);

      // Draw hand landmarks if available
      if (hands.length > 0) {
        hands.forEach((hand) => {
          hand.landmarks.forEach((landmark) => {
            p.fill(0, 255, 0);
            p.noStroke();
            p.ellipse(landmark[0], landmark[1], 10, 10); // Draw a circle for each landmark
          });
        });
      }
    };
  });
}
