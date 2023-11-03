import AboutPic from "../assets/about-pic.jpg";

function About() {
  return (
    <div className="bg-[#01022b] text-slate-100  w-full mx-auto px-4">
      <div className="px-5 py-6 grid grid-cols-2 w-full">
        <div className="py-4 pr-5">
          <h1 className="font-semibold text-2xl pb-3">ABOUT US</h1>
          <p className="">
            We offer a unique fusion of culinary excellence and unparalleled
            entertainment, where your cravings for exquisite food and
            unforgettable experiences find their perfect home.
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
