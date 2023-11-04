import AboutPic from "../assets/about-pic.jpg";

function About() {
  return (
    <div className="bg-[#01022b] text-slate-100  w-full mx-auto px-4">
      <div className="px-5 py-6 grid grid-cols-2 w-full ">
        <div className="py-4 pr-5">
          <h1 className="font-semibold text-2xl pb-3 lg:text-4xl">ABOUT US</h1>
          <p className="lg:text-2xl">
            Welcome to Chillounge Resto & KTV Bar, your ultimate destination for
            relaxation and entertainment. Our doors are open from 9am to 10pm
            daily, providing you with a perfect place to unwind and have a great
            time. We offer a unique fusion of culinary excellence and
            unparalleled entertainment, where your cravings for exquisite food
            and unforgettable experiences.
          </p>
        </div>
        <div>
          <img src={AboutPic} className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
