const About = () => {
  return (
    <section className="h-screen w-auto mx-auto bg-center bg-cover bg-[url('/about-bg-mobile.png')]
    md:bg-[url('/about-bg-tablet.png')] lg:bg-[url('/about-bg-desktop.png')]">
      <div className="pt-[4.5rem] md:hidden">
        <h2 className="uppercase text-center font-unbounded text-4xl leading-[44px]">
          капитан <br/> джек
        </h2>
        <p className="text-xs leading-6 px-8 pt-1">
          Это смелый и свободолюбивый пират, любящий приключения, эксперименты и
          не привыкший скучать. <br /><br/>
          Он из тех, кто предпочтёт вступить в схватку со стихией, а не
          отсиживаться дома в вязаных носках у камина. <br /><br/>
          Как настоящий морской волк он хорошо разбирается в качественной
          выпивке и табаке. <br /> Поэтому уже давно оценил по достоинству
          сигареты Captain Jack. Так как при их производстве используется
          премиальный табак Вирджиния и исключительно натуральные ароматизаторы.
          <br />
          Captain Jack — выбор ярких личностей, символ свободы, смелости и
          непоколебимой решимости отправиться в новое плавание в поисках
          приключений и сокровищ.
        </p>
      </div>
    </section>
  );
};

export default About;
