import Image from "next/image";
import React from "react";
import event from "@/assets/events.png";
// import { userAuth } from "@/context/AuthContext";
import Link from "next/link";

const Banner = () => {
  //   const { user } = userAuth();

  return (
    <>
      <main className="md:ml-4 ml-4">
        <div className="flex relative justify-between overflow-x-hidden items-center">
          <div className="flex flex-col items-start space-y-4 md:space-y-6 md:ml-28">
            <div className="flex flex-col items-start">
              <span className="text-4xl md:text-8xl font-bold width-28">
                <span className="text-[#deb307] animate-pulse">Even</span>To
              </span>
              <span className="text-md md:text-xl ml-1">
                Unleash Your Creativity
              </span>
            </div>
            {/* <Link href={user ? "/bookAppointment" : "/login"}> */}
            <Link href="/events">
              <button className="bg-blue-400 outline-none p-2 rounded-lg font-semibold text-white text-xs md:text-lg hover:scale-105 transition transform duration-300 ease-in-out">
                Register for Events
              </button>
            </Link>
            {/* </Link> */}
          </div>
          <Image
            src={event}
            className="w-[300px] md:w-[700px]"
            alt="image of stethoscope"
          />
        </div>
      </main>
    </>
  );
};

export default Banner;
