import React, { useEffect, useRef, useState } from 'react';

const StatCounter = ({ value, label }) => {
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const statRef = useRef(null);

  useEffect(() => {
    let observer;
    let timer;

    const animateCounter = () => {
      const originalText = String(value);

      if (originalText.includes("/")) {
        const parts = originalText.split("/");
        const firstNum = parseInt(parts[0]) || 0;
        const secondPart = parts[1] || "";

        if (firstNum > 0) {
          let current = 0;
          const increment = Math.ceil(firstNum / 40);
          timer = setInterval(() => {
            current += increment;
            if (current >= firstNum) {
              current = firstNum;
              clearInterval(timer);
            }
            setCurrentDisplay(current + "/" + secondPart);
          }, 30);
        }
        return;
      }

      const targetDigits = originalText.replace(/[^0-9]/g, "");
      const suffix = originalText.replace(/[0-9]/g, "");
      if (!targetDigits) {
        setCurrentDisplay(originalText);
        return;
      }

      let current = 0;
      const targetNum = Number(targetDigits);
      const increment = Math.ceil(targetNum / 40);
      
      timer = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          current = targetNum;
          clearInterval(timer);
        }
        setCurrentDisplay(current + suffix);
      }, 30);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="stat" ref={statRef}>
      <span className="stat__value">{currentDisplay === "0" ? "0" : currentDisplay}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
};

export default StatCounter;
