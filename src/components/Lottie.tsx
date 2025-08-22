import React, { useRef, useEffect } from "react";
import lottie, { type AnimationItem } from "lottie-web"; 

interface LottieAnimationProps {
  animationPath?: string; 
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  renderer?: "svg" | "canvas" | "html";
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath = "/logo_lottie.json",
  loop = true,
  autoplay = true,
  speed = 1,
  width = "100%",
  height = "100%",
  className,
  renderer = "svg", // Default to SVG for better scalability
}) => {
  // useRef to hold the DOM element where the animation will be rendered
  const animationContainer = useRef<HTMLDivElement>(null);
  // useRef to hold the Lottie animation instance for control
  const lottieInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Ensure the container exists and lottie is not already loaded
    if (animationContainer.current && !lottieInstance.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: animationContainer.current, // The DOM element to render in
        renderer: renderer,
        loop: loop,
        autoplay: autoplay,
        path: animationPath, // The URL to your Lottie JSON
      });

      // Set animation speed
      if (lottieInstance.current) {
        lottieInstance.current.setSpeed(speed);
      }
    }

    // Cleanup function: destroy the animation instance when the component unmounts
    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
        lottieInstance.current = null; // Clear the ref
      }
    };
  }, [animationPath, loop, autoplay, speed, renderer]); // Dependencies for useEffect

  // If any prop that changes the animation's behavior (like speed, loop, autoplay) changes
  // after initial load, we might want to update the lottie instance.
  // This is a more advanced use case. For simple usage, re-mounting on path change is enough.
  useEffect(() => {
    if (lottieInstance.current) {
      lottieInstance.current.setSpeed(speed);
      // For loop/autoplay, you'd typically need to destroy and re-load
      // or manually control with play()/pause() based on prop changes.
      // For simplicity, this example re-loads only on animationPath change.
      // If loop/autoplay change, the current animation won't reflect it
      // until `animationPath` changes or you add more complex logic here.
    }
  }, [speed]);

  return (
    <div
      ref={animationContainer}
      className={className}
      style={{ width, height, overflow: "hidden" }} // Ensure overflow is hidden
    />
  );
};

export default LottieAnimation;
