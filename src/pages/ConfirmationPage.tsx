import Button from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import CaptainJackHeader from "../components/CaptainJackHeader.tsx";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleNoBtn = () => {
    navigate("/");
  };

  const handleYesBtn = () => {
    navigate("main");
  };

  return (
    <section className="h-screen w-auto mx-auto bg-center bg-cover bg-[url('/confirmation-page-bg-desktop2.png')]">
      <div className="bg-[url('/texture.png')]">
        <CaptainJackHeader className="z-10 font-cinzel text-3xl text-center font-bold text-white p-3 md:text-4xl lg:p-0" />
      </div>
      <div className="flex mx-auto h-[343px] w-[343px] mt-12 md:h-[492px] md:w-[492px] lg:h-[267px] lg:w-[330px] ">
        <img
          src="/chalk.png"
          alt="18+ chalk"
          className="object-cover w-full h-full"
        />
      </div>
      <h2
        className="font-montserrat font-semibold text-center text-white text-[16px] mt-16
        md:text-[28px] md:leading-[42px] md:px-10 lg:text-[28px] lg:px-24 lg:mt-1"
      >
        Доступ на веб-сайт разрешен только гражданам РФ старше 18 лет,
        являющимся потребителем табака.
      </h2>
      <p
        className="font-montserrat text-[#BFBFBF] text-center text-[14px] px-14 mt-8 leading-[21px]
      md:text-[18px] md:leading-[27px] md:px-40 md:mt-14 lg:px-64 lg:mt-0"
      >
        Я потверждаю что мне есть 18 лет и я являюсь потребителем табака
      </p>
      <div className="flex justify-center mt-10 lg:mt-1">
        <Button
          title="Нет"
          className="bg-[#52212E] font-montserrat font-semibold text-white rounded-md px-[64px] py-3 mx-0.5 hover:bg-[#471D28]"
          onClick={handleNoBtn}
        />
        <Button
          title="Да"
          className="bg-[#B61C3E] font-montserrat font-semibold text-white rounded-md px-[64px] py-3 mx-0.5 hover:bg-[#A01937]"
          onClick={handleYesBtn}
        />
      </div>
    </section>
  );
};

export default ConfirmationPage;
