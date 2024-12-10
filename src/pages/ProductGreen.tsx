const ProductGreen = () => {
  return (
    <section
      className="flex flex-col mx-auto h-screen w-screen bg-center bg-cover bg-[url('/product-green-bg-mobile.png')]
    md:bg-[url('/product-green-bg-tablet.png')] lg:bg-[url('/product-green-bg-desktop.png')]"
    >
      <h2 className="font-unbounded text-center text-white text-3xl uppercase mt-20 md:text-5xl lg:text-start lg:ml-44 lg:mt-5">
        green
      </h2>
      <div className="font-montserrat font-medium text-white px-12 md:px-56 lg:text-start lg:pr-96 lg:mr-96">
        <p className="py-3">
          Captain Jack Green - это свежее прочтение привычных вкусов.
        </p>
        <p>
          Ароматизированная мешка табаков Вирджиния со свежими нотками спелого
          яблока.
        </p>
      </div>
    </section>
  );
};

export default ProductGreen;
