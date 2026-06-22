import React, { useState, useEffect } from 'react';

export default function TypingAnimation({ 
  sequence, 
  wrapper = "span", 
  className = "" 
}: { 
  sequence: string[]; 
  wrapper?: keyof React.JSX.IntrinsicElements; 
  className?: string;
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % sequence.length;
    const fullText = sequence[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (isDeleting) {
      setTypingSpeed(50);
    } else {
      setTypingSpeed(150);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const Wrapper = wrapper as any;

  return (
    <Wrapper className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </Wrapper>
  );
}