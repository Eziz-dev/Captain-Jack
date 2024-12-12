import Hero from "../sections/Hero.tsx";
import Divider from "../components/Divider.tsx";
import About from "../sections/About.tsx";
import Carousel from "../components/Carousel.tsx";
import Footer from "./Footer.tsx";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Carousel />
      <Divider />
      <Footer />
    </main>
  );
};

export default MainPage;
