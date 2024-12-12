import RedCircle from "../components/RedCircle.tsx";

const ProductRuby = () => {
  return (
    <section className="h-screen w-screen  ">
      <div className="relative h-screen w-auto bg-center bg-cover bg-[url('/Green-min.png')]">
        <div className="relative mx-auto w-[343px] h-[308 px] lg:w-[390px] lg:h-[268px] lg:ml-24 xl:w-[445px]">
          <img src="/signboard.png" alt="signboard" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="absolute top-16 font-unbounded text-3xl text-white text-center lg:text-5xl xl:text-[56px] xl:top-20">
              RUBY
            </h3>
            <div className="font-montserrat font-medium text-white inset-0 flex justify-center">
              <p className="absolute text-base inset-x-0 leading-5 top-24 left-6 mt-1 lg:pr-4 lg:top-32 xl:top-36">
                Captain Jack Ruby – это сбалансированная классика с лёгким
                ароматом вишни.
              </p>
              <p className="absolute inset-x-0 top-40 leading-5 left-6 pr-5 lg:top-48 xl:top-52">
                Выдержанный табак Вирджиния ненавязчиво оттеняется благородными
                сладкими нотами с привкусом миндальной косточки.
              </p>
            </div>
          </div>
        </div>
        <div className="relative container mx-auto mt-32 md:mt-52 lg:mt-0 xl:-mt-6">
          {/*cigarette*/}
          <div className="relative flex justify-center lg:ml-96 xl:ml-[28rem]">
            <img
              src="/ruby-ks.png"
              alt="cigarette"
              className="object-cover rotate-6 z-20 w-[200px] h-[330px]
            md:left-[30%] md:w-[225px] md:h-[400px] lg:left-[35%] xl:w-[252px] xl:h-[450px] 2xl:h-[550px]"
            />
            <div className="absolute left-[55%] top-1 md:left-[52%] lg:left-[35%] xl:left-[37%] xl:top-7 2xl:left-[42%] 2xl:top-10">
              <RedCircle label="KS" />
            </div>
          </div>

          <img
            src="/cherry.png"
            alt="cherry and almond"
            className="absolute top-72 right-10 w-[110px] z-30 md:top-[26rem] md:right-52
            lg:bottom-0 lg:right-10 xl:-bottom-10"
          />
          {/*left bottom corner*/}
        </div>
        <img
          src="/map.png"
          alt="map"
          className="hidden md:block md:absolute md:object-cover md:w-[500px] md:bottom-0 lg:w-[640px] lg:z-10  xl:w-[760px] 2xl:w-[865px]"
        />
        <img
          src="/chest-ruby.png"
          alt="chest-ruby"
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

export default ProductRuby;
