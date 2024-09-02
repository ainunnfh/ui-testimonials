import React from "react";
import { IoStarSharp } from "react-icons/io5";
const TestimonialCard = () => {
  return (
    <div className="bg-green-100 rounded-lg p-5 shadow-md shadow-green-500">
      <div>
        <div className="bg-green-300 inline-block rounded-sm p-0.5">
          <IoStarSharp color="#ffffff" />
        </div>
        <div className="font-bold">Title</div>
        <div className="font-light">Description</div>
      </div>

      <div className="flex items-center  mt-5">
        <div className="rounded-full border border-black">
          <img
            className="rounded-full border border-black"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="image"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col items-center ml-3">
          <div className="font-bold text-sm">Name</div>
          <div className="font-light text-sm">Job Title</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
