import CaptainJackHeader from "../components/CaptainJackHeader.tsx";
import FooterComponent from "../components/FooterComponent.tsx";
import { Link } from "react-router-dom";
import Divider from "../components/Divider.tsx";

const Footer = () => {
  return (
    <footer className="relative h-screen w-screen bg-center bg-cover bg-[url('/confirmation-page-bg-desktop2.png')]">
      <section className="container mx-auto">
        <CaptainJackHeader className="font-cinzel text-center text-4xl font-bold text-white py-10 md:text-7xl" />
        <div className="mx-auto text-center">
          <FooterComponent
            src="/icon-telegram.png"
            alt="telegram icon"
            link="#"
            linkLabel="@CaptainJack_official_bot"
            p="Мир Капитана и все сокровища здесь!"
          />
          <FooterComponent
            src="/icon-email.png"
            alt="email icon"
            link="#"
            linkLabel="brand@i-tob.ru"
            p="Вы можете поделиться с нами предложениями и пожеланиями, написав нам на почту"
          />
        </div>
          <img src="/chalk.png" alt="chalk" className="absolute -rotate-12 -left-5 w-[235px]"/>
        <div className="flex flex-col font-montserrat text-white text-xs text-center underline gap-4 pt-4 px-3 mt-10 md:text-xl md:pt-44 lg:pt-0">
          <Link to="#">Правила использования сайта</Link>
          <Link to="#">Политика в отношении обработки персональных данных</Link>
          <Link to="#">Положение о конфиденциальности</Link>
          <Link to="#">Риски, связанные со здоровьем</Link>
          <Link to="#">Вопросы и ответы</Link>
        </div>
        <p className="absolute inset-x-0  font-montserrat text-center text-white bottom-5 xl:bottom-6">
          © 2024 Сайт «Captain Jack»
        </p>
        <div className="absolute bottom-0">
          <Divider />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
