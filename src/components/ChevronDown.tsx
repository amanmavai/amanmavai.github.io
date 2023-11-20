import React, {useState} from "react";

const ChevronDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsVisible(true), 4000); // Show after 4 seconds
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-32 w-full justify-center items-end">
      {isVisible && (
        <svg
          role="button"
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down self-end m-auto animate-bounce sm:h-16 sm:w-16 h-8 w-8 mt-5 sm:mt-0"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      )}
    </div>
  );
};

export default ChevronDown;
