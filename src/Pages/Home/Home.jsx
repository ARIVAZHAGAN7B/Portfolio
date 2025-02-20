import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const text = [
    "Hi, I am Arivazhagan",
    "Aspiring Software Engineer | Full-Stack Developer | AI & ML Enthusiast",
  ];

  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [charIndex, setCharIndex] = useState(0);
  const fullText = text.join("\n"); // Combines text with new line

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        let updatedText = fullText.substring(0, charIndex + 1).split("\n");
        setDisplayedText(updatedText.map((line, index) => line + (index === updatedText.length - 1 ? "|" : ""))); // Cursor moves with text
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <div className="main-div-home">
      <div className="personal-info">
        <h1 className="typing-text">
          {displayedText.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Home;
