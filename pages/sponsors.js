import React from "react";
import ford from "@/assets/ford.png";
import coke from "@/assets/coke.png";
import fiver from "@/assets/fiver.png";
import shell from "@/assets/shell.png";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <main className="flex flex-col items-center pt-10">
        <span className="text-2xl font-bold">Our Sponsors</span>
        <div className="grid grid-cols-2 gap-10 mt-[200px]">
          <Image src={coke} width={150} />
          <Image src={fiver} width={150} />
          <Image src={shell} width={150} />
          <Image src={ford} width={150} />
        </div>{" "}
      </main>
    </>
  );
};

export default Sponsors;
