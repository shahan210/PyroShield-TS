import React, { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to handle the scroll to top behavior
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to toggle visibility of the button on scroll
  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <button className="top__btn" onClick={scrollToTop} style={{ display: isVisible ? "scroll__show" : "scroll__hide" }}>
        <FaArrowTurnUp />
      </button>
    </div>
  );
};

export default ScrollUp;
