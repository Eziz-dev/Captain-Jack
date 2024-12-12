import RedCircle from "../components/RedCircle.tsx";

const ProductOriginal = () => {
  return (
    <section className="h-screen w-screen  ">
      <div className="relative h-screen w-auto bg-center bg-cover bg-[url('/Green-min.png')]">
        <div className="relative mx-auto w-[343px] h-[308 px] lg:w-[390px] lg:h-[268px] lg:ml-24 xl:w-[445px]">
          <img src="/signboard.png" alt="signboard" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="absolute top-16 font-unbounded text-3xl text-white text-center lg:text-5xl xl:text-[56px] xl:top-20">
              ORIGINAL
            </h3>
            <div className="font-montserrat font-medium text-white inset-0 flex justify-center">
              <p className="absolute top-28 left-6 mt-1 lg:pr-4 lg:top-32 xl:top-36">
                Captain Jack Original это ароматные ноты шоколада и деликатный
                вкус, полученный благодаря смягчённой мешке качественных табаков
                Вирджиния.
              </p>
            </div>
          </div>

        </div>
        <div className="relative container mx-auto mt-32 md:mt-52 lg:mt-0 xl:-mt-6">
          {/*cigarette*/}
          <div className="relative flex justify-center lg:ml-96 xl:ml-[28rem]">
            <img
              src="/original-ks.png"
              alt="cigarette"
              className="object-cover rotate-6 z-20 w-[200px] h-[330px]
            md:left-[30%] md:w-[225px] md:h-[400px] lg:left-[35%] xl:w-[252px] xl:h-[450px] 2xl:h-[550px]"
            />
            <div className="absolute left-[55%] top-1 md:left-[52%] lg:left-[35%] xl:left-[37%] xl:top-7 2xl:left-[42%] 2xl:top-10">
              <RedCircle label="KS" />
            </div>
          </div>

          <img
            src="/chocolate.png"
            alt="chocolate"
            className="absolute top-72 right-10 w-[70px] z-30 md:top-[26rem] md:right-52
            lg:bottom-0 lg:right-10 xl:-bottom-5"
          />
          <img
            src="/chocolate-left.png"
            alt="chocolate"
            className="hidden md:block absolute w-[70px] z-30 md:top-60 md:left-40
            lg:bottom-0 lg:right-10 xl:-bottom-5 xl:left-96"
          />
          <img
            src="/chocolate-right.png"
            alt="chocolate"
            className="hidden md:block absolute w-[70px] z-30 md:top-80 md:right-40
            lg:bottom-0 lg:right-10 xl:-bottom-5"
          />
        </div>
        {/*left bottom corner*/}
        <img
          src="/map.png"
          alt="map"
          className="hidden md:block md:absolute md:object-cover md:w-[500px] md:bottom-0 lg:w-[640px] lg:z-10  xl:w-[760px] 2xl:w-[865px]"
        />
        <img
          src="/chest-gold.png"
          alt="chest-gold"
          className="hidden md:block md:z-20 md:absolute md:w-[230px] md:bottom-0 lg:w-[280px] 2xl:w-[400px]"
        />
        <img
          src="/spyglass.png"
          alt="spyglass"
          className="hidden md:block md:z-20 md:absolute md:bottom-0 md:w-[280px] md:left-44 lg:left-80 xl:w-[401px] xl:left-96 2xl:w-[450px]"
        />
      </div>
    </section>
  );
};

export default ProductOriginal;
