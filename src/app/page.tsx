import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { IoIosArrowDropleft } from "react-icons/io";
export default function Home() {
  return (
    <div className="flex flex-col p-10 min-h-screen justify-center">
      <div className="flex justify-between">
        <div className=" flex flex-col text-2xl font-bold justify-between">
          What Our Costumers
          <span>Are Saying</span>
        </div>
        <div className="flex text-4xl items-center">
          <button>
            <IoIosArrowDropleft />
          </button>
          <button>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-around overflow-x-scroll">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
