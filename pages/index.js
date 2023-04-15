import { modalState } from "@/atoms/modalAtom";
import Banner from "@/components/Banner";
import EventCard from "@/components/EventCard";
import RegisterModal from "@/components/RegisterModal";
import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
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
    <>
      <Banner />
      <main className="mt-10 flex flex-col items-center">
        <span className="text-2xl font-bold">Upcoming Events</span>
        <hr className="border-t-2 border-gray-400 w-[75%] my-3" />
        <div className="">
          {events.slice(0, 2)?.map((event) => (
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
        <Link href="/events">
          <button className="bg-blue-400 px-5 py-1 font-semibold mt-5 rounded-lg">
            Show More Events
          </button>
        </Link>
      </main>
    </>
  );
}
