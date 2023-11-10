import foodImg1 from "../assets/foodimg1.jpg";
import foodImg2 from "../assets/foodimg2.jpg";
import foodImg3 from "../assets/foodimg3.jpg";
import foodImg4 from "../assets/foodimg4.jpg";

function Foods() {
  return (
    <div className="w-full h-[50vh] mx-auto py-5">
      <div className="grid grid-cols-4 justify-center space-x-1">
        <div className="">
          <img src={foodImg1} className="w-[200px] h-[300px]" />
        </div>
        <div className="relative bottom-0">
          <img src={foodImg2} className="w-[200px] h-[300px]" />
        </div>
        <div className="">
          <img src={foodImg3} className="w-[200px] h-[300px]" />
        </div>
        <div className="">
          <img src={foodImg4} className="w-[200px] h-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default Foods;
