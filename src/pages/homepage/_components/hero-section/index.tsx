import  { useEffect, useState } from "react";
import useInterval from "../../../../hooks/useInterval";
import { heroBgSlides } from "../../../../constants";
import Button from "../../../../components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = ({ handleSearchClick }: any) => {
  const [bgSlides, setBGSlides] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [currentBGSlideIndex, setCurrentBGSlideIndex] = useState(-1);

  useInterval(
    () => {
      const nextIndex =
        currentBGSlideIndex >= bgSlides.length - 1
          ? 0
          : currentBGSlideIndex + 1;
      setCurrentBGSlideIndex(nextIndex);
    },
    bgSlides.length ? 10000 : null
  );

  useEffect(() => {
    setBGSlides(heroBgSlides);
  });

  const handleShowSearch = () => {
    handleSearchClick(showSearch);
    setShowSearch(!showSearch);
  };

  return (
    <main className="relative">
      <div>
        {" "}
        <div
          className="relative md:h-[600px] h-[500px] lg:h-screen overflow-hidden bg-cover bg-center bg-no-repeat  px-6 py-8 transition-all duration-1000 ease-out  md:px-10 md:py-20 md:pb-0  xl:p-36 xl:pb-0"
          style={{
            backgroundImage: `url(${
              bgSlides[currentBGSlideIndex]?.background || "/home/homebg1.jpg"
            })`,
          }}
        >
          <div className="absolute bg-opacity-50 bg-black top-0 left-0 right-0 w-full lg:h-screen md:h-[600px] h-[500px]" />
          <div className="mt-20 flex items-center h-full md:h-[500px] h-[300px] ">
            <div className="flex z-50 flex-col w-full space-y-20 text-white transition-all duration-1000 ease-out md:space-y-40 ">
              <div className="animate-slide_up flex h-full flex-col gap-2 lg:w-[40%]">
                <span className="text-3xl font-bold leading-tight md:text-[40px] lg:text-[50px] text-white">
                  Spacecrafts
                </span>
                <span className="text-base font-medium italic leading-tight text-white">
                  propelling mankind beyond the moon
                </span>
                <Link to={"/capsules"}>
                  <Button
                    children="Search for Rockets 🚀"
                    backgroundColor={"transparent"}
                    onClick={handleShowSearch}
                    className="mt-7  text-sm text-nowrap  w-1/2 font-medium md:mt-10 md:text-base"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto flex items-center h-1/2 justify-center gap-1 pt-8 md:py-8">
            <span
              className={`h-[10px] w-[10px] rounded-full border-[1px] border-solid border-white ${
                currentBGSlideIndex === 0 && "bg-white"
              } delay-250 transition-all ease-linear`}
            ></span>
            <span
              className={`h-[10px] w-[10px] rounded-full border-[1px] border-solid border-white ${
                currentBGSlideIndex === 1 && "bg-white"
              } delay-250 transition-all ease-linear`}
            ></span>
            <span
              className={`h-[10px] w-[10px] rounded-full border-[1px] border-solid border-white ${
                currentBGSlideIndex === 2 && "bg-white"
              } delay-250 transition-all ease-linear`}
            ></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
