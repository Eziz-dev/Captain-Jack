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
    <section
      className="h-screen w-screen mx-auto bg-center bg-cover xs:bg-[url('/src/assets/images/xs/xs-conf-bg.jpeg')]
    md:bg-[url('/src/assets/images/md/md-conf-bg.jpeg')] lg:bg-[url('/src/assets/images/lg/lg-conf-bg.jpeg')]
    xl:bg-[url('/src/assets/images/xl/xl-conf-bg.jpeg')] 1.5xl:bg-[url('/src/assets/images/1.5xl/1.5xl-conf-bg.jpeg')]
    2xl:bg-[url('/src/assets/images/2xl/2xl-conf-bg.jpeg')] 3xl:bg-[url('/src/assets/images/3xl/3xl-conf-bg.jpeg')]"
    >
      <CaptainJackHeader />
      <h2
        className="font-montserrat  font-semibold text-white text-center xs:text-[16px] xs:leading-6 xs:px-2 xs:mt-[30rem]
        md:text-[28px] md:leading-[42px] md:px-10 md:mt-[35rem] lg:px-24 lg:mt-[24rem] xl:px-56 xl:mt-[22rem]
        1.5xl:text-[32px] 1.5xl:leading-[48px] 1.5xl:mt-[28rem] 2xl:px-72 3xl:mt-[38rem]"
      >
        Доступ на веб-сайт разрешен только гражданам РФ старше 18 лет,
        являющимся потребителем табака.
      </h2>
      <p
        className="font-montserrat text-[#BFBFBF] text-center xs:text-[14px] xs:px-14 xs:mt-8 xs:leading-[21px]
      md:text-[18px] md:leading-[27px] md:px-40 md:mt-14 lg:px-64 xl:px-96 xl:mt-12 1.5xl:text-[20px] 1.5xl:px-[26rem]
      2xl:leading-[30px] 2xl:px-[30rem] 3xl:px-[40rem]"
      >
        Я потверждаю что мне есть 18 лет и я являюсь потребителем табака
      </p>
      <div className="flex justify-center mt-10 lg:mt-8 1.5xl:mt-12">
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
