import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import typingSound from "../../Music/keyboard-sound-200501.mp3";

const Home = () => {
  const text = [
    "Hi, I am Arivazhagan",
    "Aspiring Software Engineer | Full-Stack Developer | AI & ML Enthusiast"
  ];

  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [typingFirstLine, setTypingFirstLine] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const audioRef = useRef(new Audio(typingSound));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2; // Adjust volume
    audio.playbackRate = 1; // Slow down the sound
    audio.preload = "auto";

    const playSound = () => {
      if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    if (!isTyping) {
      audio.pause(); // Stop sound when typing is done
      return;
    }

    if (typingFirstLine) {
      if (charIndex < text[0].length) {
        const timeout = setTimeout(() => {
          setFirstLine(text[0].substring(0, charIndex + 1) + "|");
          playSound();
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setTypingFirstLine(false);
        setCharIndex(0);
      }
    } else {
      if (charIndex < text[1].length) {
        const timeout = setTimeout(() => {
          setSecondLine(text[1].substring(0, charIndex + 1) + "|");
          playSound();
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false); // Stop typing and sound when complete
      }
    }
  }, [charIndex, typingFirstLine, text, isTyping]);

  return (
    <div className="main-div-home">
      <div className="personal-info">
        <h1 className="typing-text">{firstLine}</h1>
        <h2 className="small-text">{secondLine}</h2>
      </div>
    </div>
  );
};

export default Home;
