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
      className="h-screen w-screen bg-center bg-cover xs:bg-[url('/src/assets/images/xs/xs-home-bg.jpeg')] 
    md:bg-[url('/src/assets/images/md/md-home-bg.jpeg')] lg:bg-[url('/src/assets/images/lg/lg-home-bg.jpeg')] 
    xl:bg-[url('/src/assets/images/xl/xl-home-bg.jpeg')] 1.5xl:bg-[url('/src/assets/images/1.5xl/1.5xl-home-bg.jpeg')] 
    2xl:bg-[url('/src/assets/images/2xl/2xl-home-bg.jpeg')] 3xl:bg-[url('/src/assets/images/3xl/3xl-home-bg.jpeg')]"
    >
      <CaptainJackHeader />
      <h2
        className="font-unbounded text-white text-center uppercase text-3xl mt-9 md:mt-20 md:ml-[20.5rem] md:text-4xl 
      lg:ml-36 lg:mt-16 xl:text-[48px] xl:leading-[52.76px] xl:mt-[4.3rem] xl:ml-[6.3rem] 1.5xl:mt-[5.2rem] 1.5xl:ml-14 3xl:text-[56px] 
      3xl:leading-[62.72px] 3xl:ml-80 3xl:mt-[6.2rem]"
      >
        вперед <br /> на поиски <br /> сокровищ!
      </h2>
      <div className="flex justify-center xs:mt-3 md:ml-80 md:mt-6 lg:ml-36 xl:ml-[6.5rem] 1.5xl:ml-16 1.5xl:mt-8 3xl:ml-80">
        <Button
          title="Перейти в Telegram-бот"
          className="bg-[#B61C3E] text-white text-[14px] font-semibold rounded-lg px-7 py-2 md:px-14 xl:py-2.5 3xl:py-3"
        />
      </div>
      <div
        className="flex justify-center xs:mt-[30.5rem] md:mt-[38rem] lg:ml-[46rem] lg:mt-[22.5rem] xl:ml-[59rem] xl:mt-[18rem]
      1.5xl:ml-[70rem] 1.5xl:mt-[26rem] 3xl:ml-[90rem] 3xl:mt-[33rem]"
      >
        <Button
          title="Перейти на сайт"
          className="bg-[#52212E] text-white text-[14px] font-semibold rounded-lg px-[55px] py-2 md:px-14 xl:py-2.5 3xl:py-3"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default HomePage;
