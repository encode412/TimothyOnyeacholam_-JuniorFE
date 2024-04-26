import Search from "../../../../components/ui/search";
const HeroSection = () => {

  return (
    <main className="relative">
      <div>
        {" "}
        <div
          className="relative h-[500px] md:h-[40rem] overflow-hidden bg-cover bg-center bg-no-repeat  px-6 py-8 transition-all duration-1000 ease-out  md:px-10 md:py-20 md:pb-0  xl:p-36 xl:pb-0"
          style={{
            backgroundImage: 'url("/home/homebg.jpg")',
          }}
        >
          <div className="absolute bg-opacity-50 bg-black top-0 left-0 right-0 w-full h-[500px] md:h-[40rem]" />
          <div className="mt-20 flex items-center h-full md:h-[500px] ">
            <div className="flex z-20 flex-col w-full space-y-20 text-white transition-all duration-1000 ease-out md:space-y-40 ">
              <div className="animate-slide_up flex h-full flex-col gap-2 lg:w-[40%]">
                <span className="text-3xl font-bold leading-tight md:text-[40px] lg:text-[50px] text-white">
                  Capsules
                </span>

                <Search  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
