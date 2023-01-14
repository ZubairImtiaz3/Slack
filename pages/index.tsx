import Image from "next/image";

// Svgs
import g from "../assets/svgs/g.svg";
import partnerVector from "../assets/images/partnerVector.png";

//Images
import unknownpartner from "../assets/images/unknownpartner.png";
import nasa from "../assets/images/nasa.png";
import uber from "../assets/images/uber.png";
import jeem from "../assets/images/jeem.png";
import epartner from "../assets/images/epartner.png";

//Components
import PrimaryCards from "./components/PrimaryCards";

//Partners
const partners = [
  {
    image: unknownpartner,
  },
  {
    image: nasa,
  },
  {
    image: uber,
  },
  {
    image: jeem,
  },
  {
    image: epartner,
  },
];

export default function Home() {
  return (
    <>
      <div className="heroContainer font-syne border-solid border-b-2 flex h-auto">
        <div className="leftItemsContainer bg-[#74247A] w-[100%] md:w-[50%] border-solid border-r-2">
          <div className="content max-w-[30.5rem] space-y-14 h-[40.375rem] flex flex-col justify-center ml-[5%]">
            <h2 className="text-[calc(100%+1.25rem)] font-semibold leading-[120%] text-white">
              Great teamwork starts
              <span className="font-bold italic">
                {" "}
                with a <span className="text-[#FFC700] italic">digital HQ</span>
              </span>
            </h2>
            <p className="text-[calc(100%+0.25rem)] leading-[150%] text-white">
              With all your people, tools and communication in one place, you
              can work faster and more flexibly than ever before.
            </p>
            <div className="buttons flex gap-6 flex-wrap">
              <button className="font-bold text-[calc(100%+0.13rem)] py-[14px] px-6 bg-black text-white rounded-[14px]">
                Email Signup
              </button>
              <button className="flex font-bold text-[calc(100%+0.13rem)] py-[14px] px-6 bg-white text-black border-solid border-black border-2 rounded-[14px]">
                <Image className="mr-2" src={g} alt="vector" />
                Google Signup
              </button>
            </div>
          </div>
        </div>

        <div className="rightItemsContainer bg-[#FFC700] w-[50%] hidden md:block"></div>
      </div>

      <div className="partners font-syne flex flex-col justify-center items-center mt-[4.375rem] mb-20">
        <div className="content">
          <Image
            className="relative top-[2.1rem] left-[-2.1rem]"
            src={partnerVector}
            alt="vector"
          />
          <h2 className="font-bold text-[calc(100%+1.25rem)] text-center max-w-[33rem]">
            TRUSTED BY COMPANIES{" "}
            <span className="font-extrabold text-2xl">
              ALL OVER THE{" "}
              <span className="underline decoration-wavy">WORLD</span>
            </span>
          </h2>
        </div>

        <div className="partnersLogoContainer flex flex-col md:flex-row items-center mt-14 gap-24">
          {partners.map((partnersContent) => (
            <Image src={partnersContent.image} alt="vector" />
          ))}
        </div>
      </div>

      <PrimaryCards />
    </>
  );
}
