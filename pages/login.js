import { userAuth } from "@/context/AuthContext";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Login = () => {
  const { signIn } = userAuth();

  const router = useRouter();

  // ? below is the useffect for managing redirect to the home page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        router.push("/");
      }
    });
    return unsubscribe;
  }, [router]);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col space-y-10 items-center">
          <div>
            <span className="border-[2px] border-white text-5xl px-2 py-1 font-bold">
              <span className="text-[#deb307] animate-pulse">Even</span>To
            </span>
          </div>
          <button
            onClick={signIn}
            className="bg-blue-500 text-xl px-4 py-2 rounded-md font-semibold active:scale-105 transition duration-300 transform ease-in-out"
          >
            Login With Google
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
