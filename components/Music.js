"use client";
import { useEffect, useState } from "react";
const Music = () => {
  const [audio] = useState(new Audio("../public/br.mp3")); // Path to your audio file

  useEffect(() => {
    // Play the audio when the component mounts
    audio.play();
    return () => {
      // Pause the audio when the component unmounts
      audio.pause();
    };
  }, [audio]);

  return null; // This component doesn't render any visible content
};

export default Music;
