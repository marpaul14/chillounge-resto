import foodImg1 from "../assets/foodimg1.jpg";
import foodImg2 from "../assets/foodimg2.jpg";
import foodImg3 from "../assets/foodimg3.jpg";
import foodImg4 from "../assets/foodimg4.jpg";

function Foods() {
  return (
    <div className="w-full h-[45vh] mx-auto py-5">
      <div className="flex flex-cols-4 justify-center items-center space-x-1 w-full h-[45vh]">
        <div className="col-span-1 flex flex-col justify-between h-full">
          <img src={foodImg1} className="w-[200px] h-[300px] " />
        </div>
        <div className="col-span-1">
          <img src={foodImg2} className="w-[200px] h-[300px]" />
        </div>
        <div className="col-span-1 flex flex-col justify-between h-full">
          <img src={foodImg3} className="w-[200px] h-[300px]" />
        </div>
        <div className="col-span-1">
          <img src={foodImg4} className="w-[200px] h-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default Foods;
