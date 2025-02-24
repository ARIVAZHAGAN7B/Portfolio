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
  const [audioAllowed, setAudioAllowed] = useState(false); // To allow audio only after user interaction

  const audioRef = useRef(null);

  // Initialize audio on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioRef.current) {
        audioRef.current = new Audio(typingSound);
        audioRef.current.volume = 0.2; // Adjust volume
        audioRef.current.playbackRate = 0.7; // Slow down the sound
        audioRef.current.preload = "auto";
      }
      setAudioAllowed(true); // Allow sound after interaction
    };

    // Listen for a user click to initialize audio
    document.addEventListener("click", initAudio, { once: true });

    return () => {
      document.removeEventListener("click", initAudio);
    };
  }, []);

  useEffect(() => {
    if (!audioAllowed) return; // Don't play audio until user clicks

    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => console.error("Audio play blocked:", error));
      }
    };

    if (!isTyping) {
      if (audioRef.current) audioRef.current.pause(); // Stop sound when typing is done
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
        setIsTyping(false);
      }
    }
  }, [charIndex, typingFirstLine, text, isTyping, audioAllowed]);

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
