function Navbar() {
  return (
    <div className="bg-[#01022b] text-slate-100 w-full h-[3.5rem] mx-auto ">
      <div className="flex justify-between items-center py-4 px-6">
        <div>
          <h1 className="font-semibold uppercase text-xl hover:scale-105 duration-500 ease-in-out hover:text-[#f7b603] cursor-default">
            Chillounge
          </h1>
        </div>
        <div className="">
          <ul className="flex px-2 space-x-4 uppercase cursor-default ">
            <li className="hover:text-[#f7b603] duration-300">Home</li>
            <li className="hover:text-[#f7b603] duration-300">Order</li>
            <li className="hover:text-[#f7b603] duration-300">Reservation</li>
            <li className="hover:text-[#f7b603] duration-300">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
