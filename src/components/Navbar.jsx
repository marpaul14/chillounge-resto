function Navbar() {
  return (
    <div className="bg-[#01022b] text-slate-100 w-full h-[3.5rem] mx-auto ">
      <div className="flex justify-between items-center py-4 px-6">
        <div>
          <h1 className="font-semibold uppercase text-xl hover:scale-105 duration-300 ease-in-out">
            Chillounge
          </h1>
        </div>
        <div className="">
          <ul className="flex px-2 space-x-4 uppercase">
            <li>Home</li>
            <li>Order</li>
            <li>Reservation</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
