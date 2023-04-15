import EventCard from "@/components/EventCard";
import { userAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserDash = () => {
  const { user } = userAuth();
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "registrations"), where("uid", "==", user?.uid)),
  //     (snapshot) => {
  //       setEvents(snapshot.docs);
  //       console.log(events);
  //     }
  //   );
  //   return unsubscribe;
  // }, [db]);

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
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={user?.photoURL}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <span>
              <span className="font-bold text-xl">Username:</span> {user.email}
            </span>
          </div>
        </div>
        <div className="mt-16">
          <span className="text-2xl font-bold">Registered Events</span>
        </div>
        <div className="sm:flex sm:space-x-20">
          {events.slice(0, 2)?.map((event) => (
            <div>
              <EventCard
                depId={event.data().depId}
                eventName={event.data().eventName}
                eventDate={event.data().eventDate}
                maxPart={event.data().maxPart}
                roomNo={event.data().roomNo}
                img={event.data().img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDash;
