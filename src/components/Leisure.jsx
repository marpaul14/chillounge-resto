import KaraokeImg from "../assets/karaoke.jpg";

function Leisure() {
  return (
    <div className="py-1 mx-auto cursor-default">
      <div className="grid grid-cols-2 w-full space-x-2 text-[#01022b]">
        <div className="">
          <img src={KaraokeImg} className="rounded w-full" />
        </div>
        <div className="pt-5">
          <h1 className="text-3xl font-semibold lg:text-5xl">Leisure</h1>
          <p className="mt-3 lg:text-2xl lg:mt-5 justify-start">
            For those looking to indulge in some musical fun, we provide
            well-equipped KTV rooms where you can sing your heart out with
            friends and family. Additionally, our spacious function hall is
            available for special events, making us the ideal venue for your
            celebrations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leisure;
