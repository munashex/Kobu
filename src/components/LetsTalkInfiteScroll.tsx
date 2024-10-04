import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedText.map((item, index) => (
          <div
            key={index}
            className="flex-none inline-block px-4"
          >
            <Link to="/contact" className="text-4xl font-bold text-[#111111]">
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsTalkInfiniteScroll;