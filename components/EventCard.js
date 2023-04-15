import Image from "next/image";
import React from "react";

const EventCard = ({ depId, eventDate, eventName, maxPart, roomNo, img }) => {
  return (
    <>
      <div className="flex flex-col space-y-3 mt-10">
        <span className="text-[22px] sm:text-lg font-semibold">
          {depId == 101
            ? "Department Of Computer Science"
            : depId == 102
            ? "Department of Business"
            : depId == 103
            ? "Department of Electronics"
            : depId == 104
            ? "Department of Cyber Security"
            : "null"}
        </span>
        <div className="relative sm:w-[350px]">
          <Image src={img} width={350} className="rounded-lg" height={200} />
          <span className="px-3 py-2 bg-orange-400 font-bold text-lg absolute bottom-0 rounded-bl-lg rounded-tr-lg">
            {eventName}
          </span>
          <span className="absolute font-bold top-0 right-0 text-lg p-2 bg-black bg-opacity-30 rounded-bl-lg rounded-tr-lg">
            Date: {eventDate}
          </span>
        </div>{" "}
      </div>
    </>
  );
};

export default EventCard;
