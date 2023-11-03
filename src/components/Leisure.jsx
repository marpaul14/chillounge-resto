import KaraokeImg from "../assets/karaoke.jpg";

function Leisure() {
  return (
    <div className="w-full h-[40vh] py-1 ">
      <div className="flex flex-cols-2">
        <div>
          <img src={KaraokeImg} className="" />
        </div>
        <div>
          <h1>Leisure</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Leisure;
