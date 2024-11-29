

const MainPage = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/src/assets/images/dark-wood-table-vertical-3.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-auto mx-auto"
    >
      <nav
        style={{
          backgroundImage: "url('/src/assets/images/CJ_header1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*<HamburgerDropdownMenu className= />*/}
      </nav>
      <div className="flex ml-28 pt-28">
        <h2 className="font-unbounded text-white text-4xl text-center uppercase">
          Арома <br /> новинки
        </h2>
      </div>
    </section>
  );
};

export default MainPage;
