import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { BiUser } from "react-icons/bi";
import { FaStore, FaQuestion } from "react-icons/fa";
import { SiGithubsponsors } from "react-icons/si";
import { AiFillHome, AiOutlineAim, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { userAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  //  ? temporary

  const { user, logOut, role } = userAuth();

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-4 pl-5 py-6 md:sticky md:top-0 md:z-50 md:bg-opacity-10 md:backdrop-blur-lg ${
          scrollY > 100 ? "shadow-sm" : null
        }`}
      >
        <section className="flex items-center justify-between">
          {/* logo div */}
          <Link href="/">
            <div>
              <span className="border-[2px] border-white text-xl px-2 py-1 font-bold">
                <span className="text-[#deb307]">Even</span>To
              </span>
            </div>
          </Link>
          {/* navigation */}
          <ul className="hidden sm:flex text-gray-600 font-semibold space-x-8 items-center">
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-white">
              <Link href="/">HOME</Link>
            </li>
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-white">
              <Link
                href={
                  user
                    ? role == "admin"
                      ? "/adminDash"
                      : "/userDash"
                    : "/login"
                }
              >
                DASHBOARD
              </Link>
            </li>
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-white">
              <Link href="/events">EVENTS</Link>
            </li>
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-white">
              <Link href="#">OUR MISSION</Link>
            </li>

            {/* <li className=" hover:scale-105 transition transform duration-400 ease-in-out">
              <Link href="/faqs">FAQS</Link>
            </li> */}
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-white">
              <Link href="/support">SPONSORS</Link>
            </li>
            {!user ? (
              <li className=" hover:scale-105 transition transform duration-400 ease-in-out">
                <button className="bg-blue-400 text-white px-2 py-1 rounded-md">
                  <Link href="/login">LOGIN</Link>
                </button>
              </li>
            ) : (
              <li className=" hover:scale-105 transition transform duration-400 ease-in-out">
                <button
                  onClick={logOut}
                  className="bg-red-400 text-white px-2 py-1 rounded-md"
                >
                  <Link href="/login">Logout</Link>
                </button>
              </li>
            )}
          </ul>
          {/* menu section */}
          <section className="sm:hidden flex relative text-[22px]">
            {!openMenu ? (
              <div onClick={() => setOpenMenu(true)} id="">
                <AiOutlineMenu className="text-4xl text-gray-500" />
              </div>
            ) : null}
            <AnimatePresence>
              {openMenu && (
                <motion.ul
                  key="box"
                  exit={{ x: "100vw" }}
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  className=" font-semibold space-x-8
            justify-evenly h-full fixed flex flex-col top-0 right-0 pl-10 w-[330px] bg-black bg-opacity-10 backdrop-blur-lg z-50"
                >
                  <div
                    className="absolute top-4 right-2 bg-transparent"
                    onClick={() => setOpenMenu(false)}
                    id=""
                  >
                    <MdClose className="text-gray-600 text-5xl bg-transparent" />
                  </div>
                  <li className="bg-transparent ml-8 flex active:scale-105 items-center space-x-3 transition transform duration-400 ease-in-out">
                    <AiFillHome className="text-3xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      className="bg-inherit"
                      href="/"
                    >
                      HOME
                    </Link>
                  </li>
                  {!user ? (
                    <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                      <BiUser className="text-4xl" />
                      <button className="bg-blue-500 font-semibold text-white px-2 py-1 rounded-md">
                        <Link onClick={() => setOpenMenu(false)} href="/login">
                          LOGIN
                        </Link>
                      </button>
                    </li>
                  ) : (
                    <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                      <BiUser className="text-4xl" />
                      <button className="bg-red-400 font-semibold text-white px-2 py-1 rounded-md">
                        <Link
                          onClick={() => {
                            logOut();
                            setOpenMenu(false);
                          }}
                          href="/login"
                        >
                          LOGOUT
                        </Link>
                      </button>
                    </li>
                  )}
                  <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <BiUser className="text-4xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      href={
                        user
                          ? role == "admin"
                            ? "/adminDash"
                            : "/userDash"
                          : "login"
                      }
                    >
                      DASHBOARD
                    </Link>
                  </li>
                  <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <BiUser className="text-4xl" />
                    <Link onClick={() => setOpenMenu(false)} href="/events">
                      EVENTS
                    </Link>
                  </li>

                  <li className="bg-transparent flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <AiOutlineAim className="text-3xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      className="bg-inherit"
                      href="#"
                    >
                      OUR MISSION
                    </Link>
                  </li>
                  {/* <li className="active:scale-105 transition transform duration-400 ease-in-out flex items-center space-x-3">
                    <FaQuestion className="text-2xl" />
                    <Link onClick={() => setOpenMenu(false)} href="/faqs">
                      FAQS
                    </Link>
                  </li> */}
                  <li className="active:scale-105 transition transform duration-400 ease-in-out flex items-center space-x-3">
                    <SiGithubsponsors className="text-3xl" />{" "}
                    <Link onClick={() => setOpenMenu(false)} href="/sponsors">
                      SPONSORS
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
