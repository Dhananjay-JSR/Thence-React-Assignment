import { CrownSVG } from "../modules/svg/DefaultSvg";
import HeroImg from "../../assets/HeroImg.png";
import RoundedButton from "../modules/RoundedButton";
import RocketSvg from "../modules/svg/RocketSvg";
import RightArrowSvg from "../modules/svg/RightArrow";
export default function HeroSection() {
  return (
    <section className="max-w-4xl grid lg:grid-cols-2 grid-rows-2 max-lg:gap-16 lg:grid-rows-1 mx-auto mt-16">
      <div className="flex items-center justify-center lg:ml-14">
        <div className="relative ">
          <img
            src={HeroImg}
            alt="Hero Image Girl"
            className="h-96 max-lg:h-56 max-lg:w-56 w-96"
          />
          <Overlay_One />
          <Overlay_Two />
          <Overlay_Three />
        </div>
      </div>
      <div className="flex flex-col  lg:ml-32 max-lg:mx-auto ">
        <div className="w-fit mt-10">
          <div className="font-semibold text-xl w-52 max-lg:w-72">
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-1.5 h-1.5 bg-[#2DA950] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#E4E3E3] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#E4E3E3] rounded-full"></div>
          </div>
        </div>
        <RoundedButton className="bg-black text-white mt-auto flex gap-2 w-fit items-center">
          Explore more <RightArrowSvg />
        </RoundedButton>
      </div>
    </section>
  );
}

function Overlay_Three() {
  return (
    <div className="absolute left-0 bottom-0 -translate-y-8 max-lg:translate-y-3 max-lg:-translate-x-14 -translate-x-8 hover:scale-105 transition-all hover:rotate-3">
      <div className="rounded-full py-2.5 max-lg:px-3 px-5 bg-white  gap-2 text-xs shadow-lg flex w-fit items-center">
        <RocketSvg />
        <div>
          <div className="text-black max-lg:text-base text-lg font-bold font-ManRope">
            10 days
          </div>
          <div className="text-[#828282] max-lg:text-xs font-ManRope font-medium">
            Staff Deployment
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay_One() {
  return (
    <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 hover:scale-105 transition-all hover:rotate-3">
      <div className="h-44 max-lg:h-28  flex  flex-col justify-between max-lg:w-32 w-52 bg-white relative rounded-3xl border max-lg:p-3 p-6 ">
        <CrownSVG />
        <div className="text-4xl max-lg:text-lg font-semibold font-Poppins">
          40%
        </div>
        <div className="text-sm font-ManRope leading-tight max-lg:text-[9px] text-[#828282]">
          Achieved reduction in project execution time by optimising team
          availability
        </div>
      </div>
    </div>
  );
}

function Overlay_Two() {
  return (
    <div className="absolute bottom-0 right-0 translate-x-1/3  translate-y-1/3 hover:scale-105 transition-all hover:rotate-3">
      <div className="h-44 max-lg:h-32 flex  flex-col justify-between w-52 max-lg:w-40 bg-[#002E18] relative rounded-3xl border max-lg:p-3 p-6  border-gray-900">
        <div className="text-4xl max-lg:text-xl font-semibold font-Poppins text-white">
          $0.5{" "}
          <span className="uppercase text-[#A6A3A0] text-sm max-lg:text-xs ">
            million
          </span>
        </div>
        <div className="text-sm font-ManRope text-[#CCCCCC]">
          Reduced client expenses by saving on hiring and employee costs.
        </div>
      </div>
    </div>
  );
}
