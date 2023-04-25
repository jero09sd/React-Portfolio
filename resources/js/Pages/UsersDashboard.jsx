import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FooterLayout from "@/Layouts/FooterLayout";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import { FcSearch} from "react-icons/fc";

export default function UsersDashboard({ users, auth }) {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleDelete = (id) => {
        Inertia.delete(`/users/${id}`).then(() => {});
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            {" "}
            <div className="">
                <div className="flex w-full ">
                    <div className="w-[3.35rem] h-screen">
                        <div className="sidebar ease-in-out duration-700 min-h-max w-[3.35rem] overflow-hidden border-r bg-black/25 md:hover:w-56 md:hover:bg-black/25 md:hover:shadow-lg">
                            <div className="flex md:h-[91.5rem] h-[142vh] overflow-x-hidden flex-col justify-between pt-2 pb-6">
                                <div>
                                    <div class="w-max p-2.5">
                                        <img
                                            src="https://tailus.io/images/logo.svg"
                                            class="w-32"
                                            alt=""
                                        />
                                    </div>
                                    <ul class="mt-6 space-y-2 tracking-wide">
                                        <li class="min-w-max">
                                            <a
                                                href="#"
                                                aria-label="dashboard"
                                                class="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            >
                                                <svg
                                                    class="-ml-1 h-6 w-6"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                                        class="fill-current text-cyan-400 dark:fill-slate-600"
                                                    ></path>
                                                    <path
                                                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                                        class="fill-current text-cyan-200 group-hover:text-cyan-300"
                                                    ></path>
                                                    <path
                                                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                                        class="fill-current group-hover:text-sky-300"
                                                    ></path>
                                                </svg>
                                                <span class="-mr-1 font-medium">
                                                    Users Dashboard
                                                </span>
                                            </a>
                                        </li>
                                        <li class="min-w-max">
                                            <div className="flex items-center justify-between">
                                                <FcSearch className="mx-4 " size={30}
                                                            color="white"/>
                                                <input
                                                    type="text"
                                                    placeholder="Search users"
                                                    value={search}
                                                    onChange={
                                                        handleSearchChange
                                                    }
                                                    className="border-gray-300 border-solid border rounded py-2 px-4 w-full"
                                                />
                                            </div>
                                        </li>
                                        <li class="min-w-max">
                                            <a
                                                href="#"
                                                class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                                                        fill-rule="evenodd"
                                                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                        clip-rule="evenodd"
                                                    />
                                                    <path
                                                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                                    />
                                                </svg>
                                                <span class="group-hover:text-gray-700">
                                                    Reports
                                                </span>
                                            </a>
                                        </li>
                                        <li class="min-w-max">
                                            <a
                                                href="#"
                                                class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                                                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                                    />
                                                    <path
                                                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                                    />
                                                </svg>
                                                <span class="group-hover:text-gray-700">
                                                    Other data
                                                </span>
                                            </a>
                                        </li>
                                        <li class="min-w-max">
                                            <a
                                                href="#"
                                                class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                                    />
                                                    <path
                                                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                                                        fill-rule="evenodd"
                                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <span class="group-hover:text-gray-700">
                                                    Finance
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-max -mb-3">
                                    <a
                                        href="#"
                                        class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 group-hover:fill-cyan-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class="group-hover:text-gray-700">
                                            Settings
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                    </div>
                    <div className="w-full">
                        <div className=" items-center justify-between pb-6">
                            <div className="flex flex-col items-center justify-between pb-6">
                                <div className="flex justify-between items-center max-w-2xl w-full">
                                    <h1 className="font-semibold text-xl  text-gray-800 leading-tight">
                                        Users Dashboard
                                    </h1>
                                    <div className="flex items-center justify-between">
                                        <input
                                            type="text"
                                            placeholder="Search users"
                                            value={search}
                                            onChange={handleSearchChange}
                                            className="border-gray-300 border-solid border rounded py-2 px-4 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="-mx-4 max-w-screen-2xl w-full py-4">
                                    <div className="inline-block min-w-full shadow rounded-lg bg-black/50">
                                        {" "}
                                        <table className="min-w-full leading-normal sm:table-auto">
                                            <thead className="border-b">
                                                <tr>
                                                    <th className="px-0 py-2 md:px-5 md:py-5 text-center text-sm font-semibold text-gray-100 uppercase tracking-wider whitespace-nowrap md:block hidden">
                                                        Id
                                                    </th>
                                                    <th className="px-0 py-2 md:px-5 md:py-5  text-center text-sm font-semibold text-gray-100 uppercase tracking-wider whitespace-nowrap">
                                                        <span className="md:block hidden">
                                                            {" "}
                                                            Full Name
                                                        </span>
                                                        <h1 className="md:hidden flex justify-end">
                                                            {" "}
                                                            Users Dashboard
                                                        </h1>
                                                    </th>
                                                    <th className="px-0 py-2 md:px-5 md:py-5 text-center text-sm font-semibold text-gray-100 uppercase tracking-wider whitespace-nowrap md:block hidden">
                                                        Email
                                                    </th>
                                                    <th className="px-0 py-2 md:px-5 md:py-5 text-center text-sm font-semibold text-gray-100 uppercase "></th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-b border-gray-200/25">
                                                {currentItems.map((user) => (
                                                    <tr
                                                        key={user.id}
                                                        className="border-b transition duration-300 ease-in-out hover:bg-black/30 dark:border-neutral-500 transform hover:scale-105"
                                                    >
                                                        <td className="px-2 py-2 md:px-5 md:py-5  bg-black/25 text-white md:text-center text-start text-sm md:block hidden">
                                                            {user.id}
                                                        </td>
                                                        <td className="px-2 py-2 md:px-5 md:py-5 bg-black/25 text-white md:text-center text-start text-xs sm:text-sm">
                                                            {user.name}
                                                        </td>

                                                        <td className="px-2 py-2 md:px-5 md:py-5 bg-black/25 text-white md:text-center text-start text-xs sm:text-sm md:block hidden">
                                                            {user.email}
                                                        </td>
                                                        <td className="px-2 py-2 md:px-5 md:py-5 bg-black/25 text-white md:text-center text-start text-sm">
                                                            <button
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        user.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="flex justify-center md:my-4 my-2">
                                            <div className="flex text-white">
                                                {currentPage !== 1 && (
                                                    <div
                                                        className="mx-2 cursor-pointer"
                                                        onClick={() =>
                                                            handlePageClick(
                                                                currentPage - 1
                                                            )
                                                        }
                                                    >
                                                        <MdArrowCircleLeft
                                                            size={20}
                                                            color="white"
                                                        />
                                                    </div>
                                                )}
                                                {pageNumbers.length > 1 &&
                                                    pageNumbers.map((page) => (
                                                        <div
                                                            key={page}
                                                            className={`mx-2 cursor-pointer ${
                                                                currentPage ===
                                                                page
                                                                    ? "font-bold"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePageClick(
                                                                    page
                                                                )
                                                            }
                                                        >
                                                            {page}
                                                        </div>
                                                    ))}

                                                {currentPage !==
                                                    pageNumbers.length &&
                                                    pageNumbers.length > 1 && (
                                                        <div
                                                            className="mx-2 cursor-pointer"
                                                            onClick={() =>
                                                                handlePageClick(
                                                                    currentPage +
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            <MdArrowCircleRight
                                                                size={20}
                                                                color="white"
                                                            />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                    </div>{" "}
                </div>
                <FooterLayout />
            </div>
        </AuthenticatedLayout>
    );
}

UsersDashboard.layout = (page) => <>{page}</>;

// failsolution

// import { useState } from "react";
// import { Inertia } from "@inertiajs/inertia";

// export default function UsersDashboard({ users }) {
//     const [search, setSearch] = useState("");

//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//     };

//     const filteredUsers = users.filter((user) =>
//         user.name.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleDelete = (id) => {
//         Inertia.delete(`/users/${id}`).then(() => {
//             Inertia.get("/usersdashboard");
//         });
//     };

//     return (
//         <div>
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">
//                             <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                                 Users Dashboard
//                             </h2>
//                             <div className="mb-4">
//                                 <input
//                                     type="text"
//                                     placeholder="Search users"
//                                     value={search}
//                                     onChange={handleSearchChange}
//                                     className="border-gray-300 border-solid border rounded py-2 px-4 w-full"
//                                 />
//                             </div>
//                             <table className="table-auto">
//                                 <thead>
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>Full Name</th>
//                                         <th>Email</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {filteredUsers.map((user) => (
//                                         <tr key={user.id}>
//                                             <td>{user.id}</td>
//                                             <td>{user.name}</td>
//                                             <td>{user.email}</td>
//                                             <td>
//                                                 <button
//                                                     onClick={() =>
//                                                         handleDelete(user.id)
//                                                     }
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// UsersDashboard.layout = (page) => <>{page}</>;
