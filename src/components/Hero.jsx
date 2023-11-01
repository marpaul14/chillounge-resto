import CLLogo from "../assets/chillounge.png";

function Hero() {
  return (
    <div className="max-w-[1240px] flex justify-items-center mx-auto w-full pt-18 h-[80vh]">
      <div className="px-5 py-5">
        <div className="">
          <img
            src={CLLogo}
            className="flex justify-center items-center w-full"
          />
        </div>
        <div className="flex justify-center bg-[#f7b603] rounded-lg w-auto hover:scale-105 duration-500">
          <h1 className="font-bold text-4xl text-[#003464]">
            Eat-Drink-Chill-Repeat
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
