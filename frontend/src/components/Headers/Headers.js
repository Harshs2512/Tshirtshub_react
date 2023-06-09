import React, { useState } from "react";
import SearchBar from "../../components/Form/SearchBar";
import { Link, NavLink} from "react-router-dom";
// import { useAuth } from "../context/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios"

import {
  UilUserCircle,
  UilCreateDashboard,
  UilUsersAlt,
  UilSignOutAlt,
  UilSetting,
  UilFolderQuestion,
  UilUser,
  UilHeartMedical,
  UilShoppingCartAlt,
  UilSearch,
  UilBars 
} from "@iconscout/react-unicons";


// const user1 = admin;

const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  var mobileNav = document.getElementById("mobileNav");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
//   const history = useNavigate()
  const [toggle, setToggle] = useState(false);
  const toggleClose = () => {setToggle(false)}
  //   const [auth, setAuth] = useAuth();

  const user = "user";
  console.log(user)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
  const openmobile = () => {
    let icon = document.getElementById("mobile_menu");
    if (icon.style.marginTop === "-100%") {
      icon.style.marginTop = "0%";
    } else {
      icon.style.marginTop = "-100%";
    }
  };

  
//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.get("http://localhost:8000/api/v1/logout");
//       setAuth({
//         ...auth,
//         user: null,
//         token: null,
//       });
//       localStorage.clear("token");
//       navigate(location.state || "/");
//     }

//     catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };


  return (
    <>
      <nav className="fixed z-50 shadow-2xl w-full">
        <div className=" w-full bg-[#7570ff] px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="absolute inset-y-0 left-0 flex items-center">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="openmenue"
                onClick={openmobile}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <UilBars className="text-white" />
              </button>
            </div>
            <div className="flex sm:items-stretch text-center sm:gap-48 md:ml-[rem]">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-10 md:w-auto w-24  lg:hidden md:mt-6 sm:mt-4 ml-32"
                    src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Untitled_design_4_b9722293-e450-46e8-b3a7-831120ba3755_200x@2x.png?v=1659015863"
                    alt="Cybrom"
                  />
                  <img
                    className="hidden h-10 my-5  w-auto lg:block mt-0 lg:mt-6 "
                    src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Untitled_design_4_b9722293-e450-46e8-b3a7-831120ba3755_200x@2x.png?v=1659015863"
                    alt="Cybrom"
                  />
                </Link>
              </div>
              
              <div className="sm:block md:ml-64 sm:mt-6 lg:mt-6 md:mt-6 ml-10 mt-2">
                {!user ? (
                  <ul className="flex space-x-4">
                    <>
                      <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <Link onClick={toggleClose} to="/profile">All Course</Link>
                      </li>
                      <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <NavLink onClick={toggleClose} to="/all-courses">About Us</NavLink>
                      </li>
                      <li className="">
                        <button
                          className="bg-blue-500 ml-[45rem] px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white"
                        ><Link to="/Login">Login</Link></button>
                      </li>
                    </>
                  </ul>

                ) : (
                  <ul className="flex sm:space-x-4 space-x-3">
                    {
                    //   auth.user.role === "admin" && <>
                      user === "admin" && <>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <Link onClick={toggleClose} to="/admin/teacher-info">Dashboard</Link>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/course-info">Course-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/student-info">Student-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/teacher-info">Teacher-Info</NavLink>
                        </li>
                        <li className="">
                          <button
                            className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white" //onClick={handleLogout}
                          ><Link to="/Login">Logout</Link></button>
                        </li>
                        {/* <Search /> */}
                      </>
                    }
                    {
                    //   auth.user.role === "user" && <>
                      user === "user" && <>
                        <li className="hidden sm:block sm:ml-20 md:mr-5">
                            <SearchBar />
                        </li>
                        <li className="shadow-2xl">
                          <UilShoppingCartAlt 
                            onClick={toggleMenu}
                            className="cursor-pointer text-white w-8 h-8 shadow-2xl"
                          />
                        </li>
                        <li className="sm:ml-10">
                          <UilHeartMedical
                            onClick={toggleMenu}
                            className="cursor-pointer text-white w-8 h-8"
                          />
                        </li>
                        <li className="sm:ml-20">
                          <UilUser
                            onClick={toggleMenu}
                            className="cursor-pointer text-white w-8 h-8"
                          />
                          <div className="relative" id="userPopup">
                            {isOpen && (
                              <div className="absolute bg-gradient-to-tr from-blue-100 to-blue-900 p-2 w-64 text-[#0f0333]  top-full -left-52 py-6  mt-4 rounded-md shadow-xl">
                                <div class="max-w-xs">
                                  <div class=" bg-transparent shadow-xl rounded-lg py-3">
                                    <div class="photo-wrapper p-2">
                                      <img
                                        class="w-32 h-32 rounded-full mx-auto"
                                        src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                        alt="John Doe"
                                      />
                                    </div>
                                    <div class="p-2">
                                      <div class="text-center text-gray-900 text-xs font-semibold">
                                        <p className="text-white">Web Developer</p>
                                      </div>
                                      <h3 class="text-center text-sm text-white font-medium leading-8">
                                        Suresh Kumar Ji
                                      </h3>
                                      <h2 class="text-center text-sm text-white font-medium leading-8">
                                        sureshkumar@gmail.com
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2 border-b border-black">
                                  <a
                                    href="Profile"
                                    className=" gap-2 py-1 flex  hover:bg-gray-200 "
                                  >
                                    <UilUserCircle /> Profile
                                  </a>
                                  <a
                                    href="Setting"
                                    className="gap-2 py-1 flex  hover:bg-gray-200 "
                                  >
                                    <UilCreateDashboard />
                                    Go To Dashboard
                                  </a>
                                  <a
                                    href="/signout"
                                    className="gap-2 py-1 flex hover:bg-gray-200 "
                                  >
                                    <UilUsersAlt /> Switch Account
                                  </a>
                                  <Link to="/Login" className="gap-2 py-1 flex hover:bg-gray-200">
                                    <UilSignOutAlt /> Sign Out
                                  </Link>
                                </div>
                                <div className="border-b border-black">
                                  <a
                                    href="/help"
                                    className="gap-2 py-1 flex hover:bg-gray-200 "
                                  >
                                    <UilFolderQuestion /> Help
                                  </a>
                                  <a
                                    href="/help"
                                    className="gap-2 py-1 flex hover:bg-gray-200 "
                                  >
                                    <UilSetting /> Setting
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                      </>
                    }
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="z-10 relative  transition duration-700 ease-in-out  md:hidden bg-gray-800 border text-center"
          id="mobile_menu"
          style={{ marginTop: "-100%" }}
        >
          <a
            href="#"
            className="text-gray-300  block rounded-md px-3 py-2 text-base font-medium"
            aria="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
         
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Destination
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Teachers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Beneifits
          </a>

        </div>
        {/* <Search /> */}
      </nav>
    </>
  );
}
export default Header;