import HeroSection from "./_components/hero-section";
import CapsuleLists from "./_components/capsule-lists";
import { useSelector } from "react-redux";
import CardDetails from "./_components/capsule-lists/card-details";

const Capsules = () => {
  const overlayState = useSelector((state) => state.overlay.value);

  return (
    <div className="relative">
      <div
        className={`${
          overlayState &&
          "bg-black opacity-50 h-full z-50 w-full absolute top-0 bottom-0 left-0 right-0"
        }`}
      />
      <HeroSection />
      <CapsuleLists />
      <div
        className={`${
          overlayState ? "absolute" : "hidden"
        } z-[999] lg:top-[50rem] md:top-[40rem] md:left-[5.5rem] top-[23rem] w-[77%] lg:w-[30%] shadow-xl bg-primary bg-opacity-60 left-[3rem] lg:left-[40rem]`}
      >
        <CardDetails />
      </div>
    </div>
  );
};

export default Capsules;
