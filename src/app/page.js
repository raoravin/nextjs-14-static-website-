import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-content">
      <div className=" py-80 text-white flex flex-col items-center gap-10">
        <div className=" h-12 pl-5 pr-10 border-2 border-yellow-400 text-yellow-400 rounded-full flex items-center justify-center gap-6">
          <div class="rounded-full flex items-center justify-center text-xl mb-1 font-bold mr-1">
            <span>●</span>
          </div>
          <div class="">
            <p class=" text-2xl tracking-widest">SQUAD IS AVAILABLE</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-9xl lg:text-7xl md:text-5xl sm:text-3xl">
            Inovative Solution with
          </h1>
        </div>
        <div className="">
          <h1 className=" text-9xl lg:text-7xl md:text-5xl sm:text-3xl">
            the Creative Strategic Squad
          </h1>
        </div>
        <div className="">
          <button className="inline-flex tracking-widest items-center justify-center px-10 py-2 font-sans font-semibold text-xl text-white bg-blue-500 rounded-lg h-[60px]">
            GET A QOUTE
          </button>
        </div>
      </div>
    </div>
  );
}
