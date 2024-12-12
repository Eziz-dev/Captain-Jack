import RedCircle from "../components/RedCircle.tsx";

const ProductGreen = () => {
  return (
    <section className="h-screen w-screen  ">
      <div className="relative h-screen w-auto bg-center bg-cover bg-[url('/Green-min.png')]">
        <div className="relative mx-auto w-[343px] h-[308 px] lg:w-[390px] lg:h-[268px] lg:ml-24 xl:w-[445px]">
          <img src="/signboard.png" alt="signboard"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="absolute top-16 font-unbounded text-3xl text-white text-center lg:text-5xl xl:text-[56px] xl:top-20">
              GREEN
            </h3>
            <div className="font-montserrat font-medium text-white inset-0 flex justify-center">
              <p className="absolute inset-x-0 top-24 left-6 mt-1 lg:top-32 xl:top-36">
                Captain Jack Green - это свежее <br /> прочтение привычных
                вкусов.
              </p>
              <p className="absolute inset-x-0 top-40 left-6 pr-5 lg:top-48 xl:top-52">
                Ароматизированная мешка табаков Вирджиния со свежими нотками
                спелого яблока.
              </p>
            </div>
          </div>
          <img
            src="/apple-blur.png"
            alt="apple-blur"
            className="hidden lg:block lg:absolute lg:w-[53px] lg:-right-20 lg:-bottom-52 xl:-bottom-72 xl:w-[69px]"
          />
        </div>
        <div className="relative container mx-auto mt-32 md:mt-52 lg:mt-0 xl:-mt-6">
          {/*cigarettes*/}
          <div className="relative lg:ml-96 xl:ml-[28rem]">
            <img
              src="/green-ks.png"
              alt="cigarette"
              className="absolute -rotate-4 object-cover z-20 left-[15%] w-[200px] h-[330px]
            md:left-[30%] md:w-[225px] md:h-[400px] lg:left-[35%] xl:w-[252px] xl:h-[450px]"
            />
            <img
              src="/green-ssl.png"
              alt="cigarette"
              className="absolute rotate-4 object-cover z-10 -top-5 left-[40%] w-[200px] h-[330px]
            md:left-[47%] md:w-[225px] md:h-[400px] lg:left-[49%] xl:w-[252px] xl:h-[450px]"
            />
            <div className="absolute left-[15%] top-5 md:left-[30%] lg:left-[35%]">
              <RedCircle label="KS" />
            </div>
            <div className="absolute left-[50%] -top-5 z-0 md:left-[55%] lg:left-[57%]">
              <RedCircle label="SSL" />
            </div>
          </div>

          <img
            src="/apple.png"
            alt="apple"
            className="absolute top-72 right-10 w-[76px] h-[57px] z-30 md:top-96 md:w-[108px] md:h-[81px]
            lg:bottom-0 lg:right-10 xl:-bottom-5"
          />
        </div>
        {/*left bottom corner*/}
        <img
          src="/map.png"
          alt="map"
          className="hidden lg:block lg:absolute lg:object-cover lg:w-[760px] lg: lg:z-10 lg:bottom-0 xl:w-[944px]"
        />
        <img
          src="/chest-malachite.png"
          alt="chest-malachite"
          className="hidden lg:block lg:z-20 lg:absolute lg:w-[365px] lg:bottom-0 xl:w-[454px]"
        />
        <img
          src="/spyglass.png"
          alt="spyglass"
          className="hidden lg:block lg:z-20 lg:absolute lg:w-[365px] lg:bottom-0 lg:left-80 xl:w-[498px] xl:left-96"
        />
      </div>
    </section>
  );
};

export default ProductGreen;
