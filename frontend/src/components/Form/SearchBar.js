import React from "react";
// import { useSearch } from "../../context/search";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    //   const [values, setValues] = useSearch();
    //   const navigate = useNavigate();

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const { data } = await axios.get(
    //         `/api/v1/product/search/${values.keyword}`
    //       );
    //       setValues({ ...values, results: data });
    //       navigate("/search");
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    return (
        <div>
            <form
                role="search"
                // onSubmit={handleSubmit}
            >
                <div className="relative mb-5 flex w-full flex-wrap items-stretch">
                    <input
                        id="inputbar"
                        type="search"
                        className="relative m-0 -mr-0.5 block w-40 min-w-0 flex-auto rounded-l border-solid border-2 border-white bg-transparent px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none focus:z-[3]"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="button-addon1" />

                    <button
                        className="relative z-[2] flex items-center rounded-r bg-primary px-8 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg bg-white focus:shadow-xl focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg "
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#7570ff"
                            className="h-6 w-6">
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
