import KaraokeImg from "../assets/karaoke.jpg";

function Leisure() {
  return (
    <div className="py-1 mx-auto ">
      <div className="grid grid-cols-2 w-full space-x-2 text-[#01022b]">
        <div>
          <img src={KaraokeImg} className="rounded-xl" />
        </div>
        <div className="">
          <h1>Leisure</h1>
          <p>
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
