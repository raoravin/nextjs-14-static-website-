import HomeSidebar from "@/components/HomeSidebar";
import "../styles/home.css";
import HomeCard from "@/components/HomeCards";
import Slider from "@/components/TestimonialSlider";

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
            <p className="tracking-widest text-md sm:text-lg md:text-xl lg:text-3xl ">SQUAD IS AVAILABLE</p>
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
      <div className="home-card w-full flex max-lg:flex-col gap-10 max-sm:gap-36 max-lg:gap-56 px-16 max-sm:px-8 ">
        <div className="h-72 bg-amber-400 w-6/12 max-lg:w-full max-sm:h-48 rounded-2xl"></div>
        <div className="h-72 bg-amber-400 w-6/12 max-lg:w-full max-sm:h-48 rounded-2xl"></div>
      </div>
      <div className="w-full h-auto py-24 text-white px-14 max-lg:px-0 max-sm:px-0">
        <div className="mt-16"><HomeSidebar /></div>
      </div>
      <div className="w-full h-auto text-white my-20 py-28">
        <HomeCard />
      </div>
      <div className="py-20 px-10">
        <Slider/>
      </div>
    </div>
  );
}
