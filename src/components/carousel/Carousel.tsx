import { useState } from "react";
import "./Carousel.css";
import ProductGreen from "../../pages/ProductGreen.tsx";
import Button from "../Button.tsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [
    <div className="page">
      <ProductGreen />
    </div>,
    // <div className="page"><ProductOriginal /></div>,
    <div className="page">Page 3</div>,
    <div className="page">Page 4</div>,
  ];

  const nextPage = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mx-auto">
      <div
        className="flex transition ease-in-out delay-75"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {pages.map((page, index) => (
          <div key={index} className="h-screen w-screen">
            {page}
          </div>
        ))}
      </div>

      <Button
        title={<FaChevronLeft />}
        onClick={prevPage}
        disabled={currentIndex === 0}
        className="absolute disabled:bg-gray-400 bg-[#B61C3E] hover:bg-[#A01937] text-white top-2/3 -translate-y-50 left-1.5 cursor-pointer rounded-full z-10 p-3
        md:p-4 md:top-44 md:left-36 lg:left-4 lg:top-24"
      />

      <Button
        title={<FaChevronRight />}
        onClick={nextPage}
        disabled={currentIndex === pages.length - 1}
        className="absolute disabled:bg-gray-400 bg-[#B61C3E] hover:bg-[#A01937] text-white top-2/3 -translate-y-50 right-1.5 cursor-pointer rounded-full z-10 p-3
        md:p-4 md:top-44 md:right-36 lg:right-[41.5rem] lg:top-24"
      />
    </div>
  );
};

export default PageCarousel;
