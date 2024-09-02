import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-between p-10">
      <div className=" flex flex-col items-center  text-2xl font-bold">
        What Our Costumers Are Saying
      </div>

      <div className=" grid grid-cols-3 gap-3 justify-center mt-8">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
