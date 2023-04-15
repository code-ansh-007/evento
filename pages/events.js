import { modalState } from "@/atoms/modalAtom";
import EventCard from "@/components/EventCard";
import RegisterModal from "@/components/RegisterModal";
import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "events")),
      (snapshot) => {
        setEvents(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div className="items-center flex flex-col">
      <span className="text-center text-2xl font-bold">Happening Events</span>
      <hr className="border-t-2 border-gray-400 w-[75%] my-3" />

      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-20 sm:place-items-center items-center sm:space-y-0 space-y-10">
        {events?.map((event) => (
          <div
            onClick={() => {
              setOpenModal(true);
              router.push({
                query: {
                  eventId: event.id,
                },
              });
            }}
          >
            <EventCard
              depId={event.data().depId}
              eventName={event.data().eventName}
              eventDate={event.data().eventDate}
              maxPart={event.data().maxPart}
              roomNo={event.data().roomNo}
              img={event.data().img}
            />
            {/* {console.log(event.id)} */}
          </div>
        ))}
        {openModal && <RegisterModal />}
      </div>
    </div>
  );
};

export default Events;
