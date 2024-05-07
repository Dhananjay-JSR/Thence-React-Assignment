import { CrownSVG } from "../modules/svg/DefaultSvg";
import HeroImg from "../../assets/HeroImg.png";
import RoundedButton from "../modules/RoundedButton";
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
          <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2">
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
          <div className="absolute bottom-0 right-0 translate-x-1/3  translate-y-1/3">
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

          <div className="absolute left-0 bottom-0 -translate-y-8 max-lg:translate-y-3 max-lg:-translate-x-14 -translate-x-8">
            <div className="rounded-full py-2.5 max-lg:px-3 px-5 bg-white  gap-2 text-xs shadow-lg flex w-fit items-center">
              <svg
                className="w-10 h-10 max-lg:w-6 max-lg:h-6"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.39"
                  cx="26.1875"
                  cy="26.71"
                  r="26"
                  fill="#DDEFE0"
                />
                <path
                  d="M23.1587 33.9525C23.11 34.1462 21.8912 38.71 15.1875 38.71C14.9223 38.71 14.6679 38.6046 14.4804 38.4171C14.2928 38.2295 14.1875 37.9752 14.1875 37.71C14.1875 31.0062 18.7512 29.7875 18.945 29.7387C19.2024 29.6744 19.4748 29.715 19.7023 29.8515C19.9299 29.9881 20.0938 30.2094 20.1581 30.4669C20.2224 30.7243 20.1818 30.9967 20.0453 31.2242C19.9087 31.4517 19.6874 31.6157 19.43 31.68C19.3175 31.7112 16.6275 32.4975 16.235 36.6625C20.4 36.27 21.1875 33.585 21.22 33.46C21.2863 33.2029 21.452 32.9827 21.6807 32.8477C21.9094 32.7128 22.1823 32.6743 22.4394 32.7406C22.6965 32.8069 22.9167 32.9726 23.0516 33.2013C23.1865 33.43 23.225 33.7029 23.1587 33.96V33.9525ZM34.7837 25.5275L34.1875 26.1237V33.415C34.189 33.6786 34.138 33.9399 34.0376 34.1837C33.9372 34.4275 33.7893 34.6489 33.6025 34.835L29.3125 39.1225C29.1275 39.3088 28.9074 39.4566 28.665 39.5575C28.4226 39.6583 28.1626 39.7101 27.9 39.71C27.6833 39.7099 27.468 39.6749 27.2625 39.6062C26.9096 39.4895 26.5964 39.2764 26.3583 38.991C26.1202 38.7056 25.9666 38.3593 25.915 37.9912L25.2437 33.18L19.7175 27.6537L14.9087 26.9825C14.5402 26.9308 14.1933 26.7773 13.9072 26.5392C13.6212 26.3012 13.4072 25.988 13.2894 25.6349C13.1716 25.2819 13.1546 24.903 13.2404 24.5408C13.3262 24.1787 13.5113 23.8477 13.775 23.585L18.0625 19.295C18.2486 19.1082 18.47 18.9603 18.7137 18.8599C18.9575 18.7594 19.2188 18.7085 19.4825 18.71H26.7737L27.37 18.1137C30.705 14.78 34.7225 14.6362 36.2962 14.73C36.7838 14.7596 37.2437 14.9667 37.5891 15.3121C37.9345 15.6575 38.1416 16.1174 38.1712 16.605C38.2625 18.1737 38.1187 22.1925 34.785 25.5275H34.7837ZM24.7737 20.71H19.4825L15.1875 25.0025L19.8312 25.65L24.7737 20.71ZM32.1875 28.1237L27.2462 33.065L27.8962 37.71L32.1875 33.415V28.1237Z"
                  fill="#2DA950"
                />
              </svg>
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
          Explore more{" "}
          <svg
            className="w-3 h-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
              fill="white"
            />
          </svg>
        </RoundedButton>
      </div>
    </section>
  );
}
