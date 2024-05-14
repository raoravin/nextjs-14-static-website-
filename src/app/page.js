import HomeSidebar from "@/components/HomeSidebar";
import "../styles/home.css";
import HomeCard from "@/components/HomeCards";


export default function Home() {
  return (
    <div className="home-content">
      <div className=" py-40 max-sm:py-32 max-md:py-36 text-white flex flex-col items-center gap-10">
        <div className=" h-12 pl-5 pr-10 border-2 border-yellow-400 text-yellow-400 rounded-full flex items-center justify-center gap-6">
          <div class="rounded-full flex items-center justify-center text-xl mb-1 font-bold mr-1">
            <span>●</span>
          </div>
          <div class="">
            <p class=" text-xl tracking-widest lg:text-3xl md:text-2xl sm:text-xl">SQUAD IS AVAILABLE</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl">
            Inovative Solution with
          </h1>
        </div>
        <div className="">
          <h1 className=" text-2xl lg:text-7xl md:text-5xl sm:text-3xl">
            the Creative Strategic Squad
          </h1>
        </div>
        <div className="">
          <button className="inline-flex tracking-widest items-center justify-center px-10 py-2 font-sans font-semibold text-xl text-white bg-blue-500 rounded-lg h-[60px]">
            GET A QOUTE
          </button>
        </div>
      </div>
      <div className="home-card w-full flex max-lg:flex-col gap-10 max-lg:gap-56 px-16 py-20">
        <div className=" h-72 bg-amber-400 w-6/12 max-lg:w-full max-sm:h-56 rounded-2xl"></div>
        <div className=" h-72 bg-amber-400 w-6/12 max-lg:w-full max-sm:h-56 rounded-2xl"></div>
      </div>
      <div className=" w-full h-full py-24 text-white px-14">
        <h1 className=" text-2xl">SERVICES</h1>
        <p className=" text-5xl my-5">We are a creative agency and offers <br/> Services in various technologies</p>
        <div className="mt-16"><HomeSidebar /></div>
      </div>

      <div className=" my-40 py-28">
        <HomeCard />
      </div>
    </div>
  );
}
