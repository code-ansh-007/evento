import { modalState } from "@/atoms/modalAtom";
import { userAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import {
  FieldValue,
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const RegisterModal = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const { user } = userAuth();
  const { query } = useRouter();
  const { eventId } = query;
  const [maxPart, setMaxPart] = useState(0);
  const [regisClosed, setRegisClosed] = useState(false);

  async function getEvent() {
    const docSnap = await getDoc(doc(db, "events", eventId));
    setMaxPart(docSnap.data().maxPart);
    console.log(maxPart);
    if (maxPart === 0) {
      setRegisClosed(true);
    } else {
      setRegisClosed(false);
    }
  }

  useEffect(() => {
    getEvent();
    console.log(maxPart);
  }, [maxPart]);

  async function reduceParticipants() {
    await setDoc(
      doc(db, "events", eventId),
      {
        maxPart: maxPart - 1,
      },
      { merge: true }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), {
        uid: user.uid,
        eventId,
        name,
        regNo,
        timestamp: serverTimestamp(),
      });
      reduceParticipants();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  const [openModal, setOpenModal] = useRecoilState(modalState);

  const handleClose = (e) => {
    if (
      e.target.className ===
      "flex flex-col items-center justify-center bg-black bg-opacity-50 h-full w-full fixed top-0 left-0"
    ) {
      setOpenModal(false);
    }
  };

  return (
    <>
      <main
        onClick={handleClose}
        className="flex flex-col items-center justify-center bg-black bg-opacity-50 h-full w-full fixed top-0 left-0"
      >
        <main className="flex flex-col items-center justify-center">
          {regisClosed ? (
            <div className=" bg-blue-900 p-4 rounded-lg font-semibold">
              Registrations Closed
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-6 px-10 bg-blue-900 py-5 p-2 rounded-lg"
            >
              <div className="flex justify-between">
                <span className="text-xl font-bold text-center">
                  Register for Event
                </span>
                {/* <span onClick={setOpenModal(false)}>X</span> */}
              </div>{" "}
              <div className="flex flex-col items-start space-y-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="p-2 rounded-md w-full outline-none text-black"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <label htmlFor="regNo">Registration No.</label>
                <input
                  id="regNo"
                  className="p-2 rounded-md w-full outline-none text-black"
                  type="text"
                  placeholder="Registration no"
                  onChange={(e) => setRegNo(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="py-2 px-6 bg-orange-400 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
        </main>
      </main>
    </>
  );
};

export default RegisterModal;
