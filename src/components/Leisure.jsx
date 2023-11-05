import KaraokeImg from "../assets/karaoke.jpg";

function Leisure() {
  return (
    <div className="mx-auto cursor-default w-full lg:w-[85%] ">
      <div className="grid grid-cols-2 w-full space-x-2 text-[#01022b]">
        <div className="pt-3">
          <img src={KaraokeImg} className="rounded w-full h-[95%]" />
        </div>
        <div className="pt-6">
          <h1 className="text-2xl font-semibold lg:text-4xl md:text-3xl">
            Leisure
          </h1>
          <p className="mt-3 lg:text-xl lg:mt-5">
            For those looking to indulge in some musical fun, we provide
            well-equipped KTV rooms where you can sing your heart out with
            friends and family. Additionally, our spacious function hall is
            available for special events, making us the ideal venue for your
            celebrations. Join us at Chillounge for an unforgettable combination
            of great food, fantastic music, and a warm, welcoming atmosphere.
            Your memorable moments are just a visit away!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leisure;
