import CaptainJackHeader from "../components/CaptainJackHeader.tsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.tsx";

const Hero = () => {
  const handleMoreBtn = () => {
    //   create route
  };

  return (
    <section
      className="h-screen w-auto mx-auto bg-center bg-cover bg-[url('/hero-bg-mobile.png')]
        md:bg-[url('/hero-bg-tablet.png')] lg:bg-[url('/hero-bg-desktop.png')]"
    >
      <header>
        <nav className="md:flex justify-between">
          <CaptainJackHeader className="basis-2/3 z-10 font-cinzel text-3xl text-center md:text-end font-bold text-white p-3 md:text-4xl lg:p-0 lg:mr-20" />
          <Link
            to="#"
            className="hidden md:block basis-1/3  text-end text-[14px] font-bold font-montserrat text-white px-5 py-3"
          >
            Обратная связь
          </Link>
        </nav>
      </header>
      <div className="text-center text-white lg:mr-[37rem]">
        <h2 className="font-unbounded uppercase  text-4xl mt-16 md:text-5xl md:mt-20 lg:text-[52px]">
          Арома <br /> новинки
        </h2>
        <h3 className="font-montserrat text-center text-white md:mt-3 lg:text-xl lg:mt-4">
          Открой для себя новые вкусы
        </h3>
        <Button
          title="Узнать больше"
          className="bg-[#B61C3E] font-montserrat font-semibold text-white rounded-md px-[64px] py-3 mx-0.5 hover:bg-[#A01937] mt-3 md:mt-5"
          onClick={handleMoreBtn}
        />
      </div>
    </section>
  );
};

export default Hero;
