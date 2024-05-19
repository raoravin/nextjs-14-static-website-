import HomeSidebar from "@/components/home/HomeSidebar";
import "../styles/home.css";
import HomeCard from "@/components/home/HomeCards";
import Slider from "@/components/home/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-body">
      {/* home start section start here */}
      <div className="home-content">
        <div className="container mx-auto pt-56 pb-40 max-lg:pb-36 max-sm:pb-32 max-sm:pt-36 max-md:py-36 text-white flex flex-col items-center max-sm:gap-7 gap-10">
          <div className="h-12 pl-5 pr-10 border-2 border-yellow-400 text-yellow-400 rounded-full flex items-center justify-center gap-6">
            <div className="rounded-full flex items-center justify-center text-xl mb-1 font-bold mr-1">
              <span>●</span>
            </div>
            <div>
              <p className="tracking-widest text-md sm:text-lg md:text-xl lg:text-3xl ">
                SQUAD IS AVAILABLE
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-bold">
              Innovative Solution with
            </h1>
          </div>
          <div>
            <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-bold">
              the Creative Strategic Squad
            </h1>
          </div>
          <div>
            <button className="inline-flex tracking-widest max-sm:py-2 max-sm:px-6 py-3 px-10 max-sm:my-6 my-10 items-center justify-center  font-sans font-semibold text-xl max-sm:text-base text-white bg-blue-500 rounded-lg ">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
      {/* Home start section end here */}

      {/* Home card section start here */}
      <div className=" container mx-auto w-full flex max-md:flex-col gap-10 max-sm:gap-32 max-md:gap-56 px-5 lg:px-16 2xl:px-28 max-sm:px-8 pb-10 ">
        <div className=" home_card bgcolor_1 h-40 relative flex flex-col items-center justify-center sm:h-60 md:h-52 lg:h-60 xl:h-80 w-6/12 max-md:w-full  rounded-2xl">
          <div className=" max-sm:w-[200px] sm:w-[300px] md:w-[250px] lg:w-[300px] xl:w-[350px] absolute max-sm:top-[-70px] sm:top-[-105px] md:top-[-86px] lg:top-[-105px] xl:top-[-120px]">
            <Image
              src="/images/home/image 391.png"
              alt="alt"
              width={350}
              height={350}
            />
          </div>
          <div className="absolute max-sm:bottom-1 sm:bottom-3 md:bottom-2 lg:bottom-3 xl:bottom-7 text-center tracking-widest  sm:text-3xl lg:text-3xl xl:text-5xl text-white text-pretty font-semibold">
            <h1 className="">CREATIVE AND </h1>
            <h1 className=" xl:mt-1.5">INNOVATIVE</h1>
          </div>
        </div>
        <div className="home_card bgcolor_2 h-40 relative flex flex-col items-center justify-center sm:h-60 md:h-52 lg:h-60 xl:h-80 w-6/12 max-md:w-full  rounded-2xl">
          <div className=" max-sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] absolute max-sm:top-[-30px] sm:top-[-60px] md:top-[-30px] lg:top-[-45px] xl:top-[-60px] ">
            <Image
              src="/images/home/image 392.png"
              alt="alt"
              width={350}
              height={350}
            />
          </div>
          <div className="absolute max-sm:bottom-2 sm:bottom-2 md:bottom-2 lg:bottom-3 xl:bottom-7 text-center tracking-widest  sm:text-3xl lg:text-3xl xl:text-5xl text-white text-pretty font-semibold">
            <h1 className="">UI/UX RESEARCH </h1>
            <h1 className=" xl:mt-1.5">& STRATEGY</h1>
          </div>
        </div>
      </div>
      {/* Home card section start here */}

      {/* About section start here */}
      <div className="w-full h-screen "></div>
      {/* About section start here */}

      {/* Home sidebar section start here */}
      <div className="w-full h-auto pt-24 text-white mx-auto container">
          <HomeSidebar />
      </div>
      {/* Home sidebar section end here */}

      {/* Industry card section start here */}
      <div className="w-full container h-auto text-white mx-auto my-20 py-28">
        <HomeCard />
      </div>
      {/* Industry card section end here */}

      {/* testimonial section start here */}
      <div className="pb-32 max-sm:pb-0 w-full container mx-auto ">
        <Slider />
      </div>
      {/* testimonial section end here */}
    </div>
  );
}
