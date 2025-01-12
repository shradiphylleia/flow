import React, { useEffect } from 'react';
import { setupP5 } from '../sketch.js';

const HandPoseSketch = () => {
  useEffect(() => {
    // Initialize the p5.js sketch
    setupP5('canvas-container');

    // Cleanup the p5.js instance when the component unmounts
    return () => {
      const canvasContainer = document.getElementById('canvas-container');
      if (canvasContainer) {
        canvasContainer.innerHTML = ''; // Remove all children (including canvas)
      }
    };
  }, []);

  return <div id="canvas-container" style={{ position: 'relative', width: '640px', height: '480px' }}></div>;
};

export default HandPoseSketch;
