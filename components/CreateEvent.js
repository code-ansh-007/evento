import { modalState } from "@/atoms/modalAtom";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useRecoilState } from "recoil";

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [openModal, setOpenModal] = useRecoilState(modalState);
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col space-y-4 px-10 bg-red-300 p-2 rounded-md">
          <div className="flex justify-between">
            <span className="text-xl font-bold text-center">Create Event</span>
            {/* <span onClick={setOpenModal(false)}>X</span> */}
          </div>{" "}
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="depName">Department</label>
            <input
              id="depName"
              className="p-2 rounded-md w-full outline-none text-black"
              type="text"
              placeholder="Department ID"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="depName">Event Name</label>
            <input
              id="depName"
              className="p-2 rounded-md w-full outline-none text-black"
              type="text"
              placeholder="Event Name"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="depName">Max Participants</label>
            <input
              id="depName"
              className="p-2 rounded-md w-full outline-none text-black"
              type="text"
              placeholder="Maximum participants"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="date">Date</label>
            <div id="date" className="text-yellow-300">
              <DatePicker value={startDate} onChange={setStartDate} />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 pt-[170px]">
            <label htmlFor="depName">Room No.</label>
            <input
              id="depName"
              className="p-2 rounded-md w-full outline-none text-black"
              type="text"
              placeholder="Room No. ex. 33-301"
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateEvent;
