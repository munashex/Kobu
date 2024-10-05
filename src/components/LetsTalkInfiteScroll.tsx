import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

const LetsTalkInfiniteScroll = ({ speed = 20000 }) => {
  const [translateX, setTranslateX] = useState(0);
  const text = "Let's Talk";
  const repeatedText = Array(10).fill(text);

  useEffect(() => {
    const animate = () => {
      setTranslateX((prevTranslateX) => {
        if (prevTranslateX <= -100) {
          return 0;
        }
        return prevTranslateX - 1;
      });
    };

    const intervalId = setInterval(animate, speed / 100);

    return () => clearInterval(intervalId);
  }, [speed]);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedText.map((item, index) => (
          <div
            key={index}
            className="flex-none inline-block px-4"
          >
            <Link onClick={scrollToTop} to="/contact" className="text-2xl md:text-4xl hover:underline  inline-flex items-center gap-2 lg:text-6xl font-bold text-[#111111]">
              {item} <FaExternalLinkAlt size={28}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsTalkInfiniteScroll;