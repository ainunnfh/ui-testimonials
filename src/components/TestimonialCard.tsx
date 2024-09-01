import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-green-300 rounded-lg p-5">
      <div>
        <div>⭐⭐⭐⭐⭐</div>
        <div className="font-bold">Title</div>
        <div className="font-light">Description</div>
      </div>

      <div className="flex items-center">
        <div className="rounded-full border border-black">
          <img
            className="rounded-full border border-black"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="image"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col items-center ml-3 mt-5">
          <div className="font-bold text-sm">Name</div>
          <div className="font-light text-sm">Job Title</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
