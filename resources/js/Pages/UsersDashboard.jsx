import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ApplicationLogo from "@/Components/ApplicationLogo";
import FooterLayout from "@/Layouts/FooterLayout";
import {
    MdArrowCircleLeft,
    MdArrowCircleRight,
    MdOutlineDashboardCustomize,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link, Head } from "@inertiajs/react";

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
                {" "}
                <Head title="Users Management Page" />
                <div className="flex w-full ">
                    <div className="md:w-[3.6rem] hidden md:block h-screen">
                        <div className="ease-in-out duration-700 min-h-max w-[3.6rem] overflow-hidden border-r bg-black/25 md:hover:w-60 md:hover:bg-black/25 md:hover:shadow-lg">
                            <div className="flex md:h-[91.5rem] h-[142vh] overflow-x-hidden flex-col justify-between pt-2 pb-6">
                                <div>
                                    {" "}
                                    <div className="shrink-2 flex items-center">
                                        <Link href="/" className="relative">
                                            <ApplicationLogo className="block w-auto fill-current text-white" />
                                        </Link>
                                        <h1 className="w-full font-extrabold font-untouched text-lg  lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                            Triestis
                                            <span className="text-[#1feffe]">
                                                .
                                            </span>
                                        </h1>
                                    </div>
                                    <ul class="mt-6 tracking-wide">
                                        <li class="min-w-max">
                                            <Link
                                                href="usersdashboard"
                                                aria-label="dashboard"
                                                className="relative flex items-center bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            >
                                                <div className="mr-3">
                                                    {" "}
                                                    <MdOutlineDashboardCustomize
                                                        size={30}
                                                    />
                                                </div>

                                                <span class="-mr-1 font-medium">
                                                    Users Management
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("profile.edit")}
                                                aria-label="dashboard"
                                                class="relative flex items-center hover:bg-gradient-to-r from-sky-600/25 to-cyan-400/25 px-4 py-3 text-white"
                                            >
                                                <div className="mr-3">
                                                    {" "}
                                                    <CgProfile size={30} />
                                                </div>
                                                <span className="mr-1 font-medium">
                                                    Profile
                                                </span>
                                            </Link>
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
                                            class="h-10 w-10 group-hover:fill-cyan-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class=" font-medium group-hover:text-gray-300">
                                            Logout
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                    </div>
                    <div className="w-full">
                        <div className=" items-center justify-between my-11 pb-6">
                            <div className="flex flex-col items-center justify-between pb-6">
                                <div className="flex justify-end items-end max-w-screen-2xl w-full">
                                    <div className="flex items-end">
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
