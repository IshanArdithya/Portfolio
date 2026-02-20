import { useState, useEffect } from "react";

interface TypewriterOptions {
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
}

export const useTypewriter = (
  text: string | string[],
  { speed = 50, deleteSpeed = 30, delay = 1000, loop = true }: TypewriterOptions = {}
) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const i = loopNum % (Array.isArray(text) ? text.length : 1);
    const fullText = Array.isArray(text) ? text[i] : text;

    const handleType = () => {
      setDisplayText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && displayText === fullText) {
        if (!loop && Array.isArray(text) && loopNum === text.length - 1) return;
        
        setTypingSpeed(delay);
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(speed);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, text, speed, deleteSpeed, delay, loop]);

  return displayText;
};
