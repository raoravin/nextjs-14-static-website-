import HomeSidebar from "@/components/home/HomeSidebar";
import "../styles/home.css";
import HomeCard from "@/components/home/HomeCards";
import Slider from "@/components/home/TestimonialSlider";

export default function Home() {
  return (
    <div className="home-body">
      <div className="home-content">
        <div className=" pt-56 pb-40 max-lg:pb-56 max-sm:pb-32 max-sm:pt-36 max-md:py-36 text-white flex flex-col items-center max-sm:gap-7 gap-10">
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
            <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold">
              Innovative Solution with
            </h1>
          </div>
          <div>
            <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold">
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
      <div className="home-card w-full flex max-md:flex-col gap-10 max-sm:gap-32 max-md:gap-56 px-5 lg:px-16 2xl:px-28 max-sm:px-8 pb-10 ">
        <div className=" h-40 sm:h-48 md:h-52 lg:h-60 xl:h-80  bg-amber-400 w-6/12 max-md:w-full  rounded-2xl"></div>
        <div className=" h-40 sm:h-48 md:h-52 lg:h-60 xl:h-80  bg-amber-400 w-6/12 max-md:w-full rounded-2xl"></div>
      </div>
      <div className="w-full h-auto pt-24 text-white px-3 max-lg:px-0 max-sm:px-0">
        <div className="mt-16">
          <HomeSidebar />
        </div>
      </div>
      <div className="w-full h-auto text-white my-20 py-28">
        <HomeCard />
      </div>
      <div className="pb-32">
        <div className="max-sm:px-4 px-10">
          <h1 className=" text-2xl max-sm:text-sm max-md:text-xl max-lg:text-2xl text-white font-medium ">
            TESTIMONIALS
          </h1>
          <p className="text-5xl  max-sm:text-base max-md:text-xl max-lg:text-2xl text-white font-bold my-3 sm:my-5 md:my-7 lg:my-10">
            Our Vision to Caters to Diverse Industry Demands
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
}
