// image resolutions
// optimize bg for my display

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CaptainJackHeader from "../components/CaptainJackHeader.tsx";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("confirmation");
  };

  return (
    <section
      className="h-screen w-screen bg-center bg-cover bg-[url('/home-page-bg-mobile.png')]
    md:bg-[url('/home-page-bg-tablet.png')] lg:bg-[url('/home-page-bg-desktop.png')]"
    >
      <CaptainJackHeader className="font-cinzel text-3xl text-center font-bold text-white p-3 md:text-4xl lg:p-0"/>
      <h2
        className="font-unbounded text-white text-center uppercase text-3xl mt-9 md:mt-20 md:ml-[22rem] md:text-4xl lg:ml-24
      xl:text-[48px] xl:leading-[52.76px] xl:mt-[4.3rem] xl:ml-[6.3rem]"
      >
        вперед <br /> на поиски <br /> сокровищ!
      </h2>
      <div className="flex justify-center mt-3 md:ml-[22rem] md:mt-6 lg:ml-[6.5rem]">
        <Button
          title="Перейти в Telegram-бот"
          className="bg-[#B61C3E] hover:bg-[#A01937] text-white text-[14px] font-semibold rounded-lg px-7 py-2 md:px-14 xl:py-2.5"
        />
      </div>
      <div className="flex justify-center mt-[28rem] md:mt-[42rem] lg:ml-[62rem] lg:mt-[12rem]">
        <Button
          title="Перейти на сайт"
          className="bg-[#52212E] hover:bg-[#471D28] text-white text-[14px] font-semibold rounded-lg px-[55px] py-2 md:px-14 xl:py-2.5"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default HomePage;
