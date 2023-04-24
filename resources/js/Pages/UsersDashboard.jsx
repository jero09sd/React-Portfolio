import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

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
            <div>
                <div className="bg-white p-8 rounded-md w-full ">
                    <div className="flex flex-col items-center justify-between pb-6">
                        <div className="flex justify-between items-center max-w-2xl w-full">
                            {" "}
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

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  max-w-screen-2xl w-full py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Id
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Full Name
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {user.id}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {user.name}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {user.email}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                                <div className="flex justify-center mt-4">
                                    <div className="flex">
                                        {pageNumbers.map((page) => (
                                            <div
                                                key={page}
                                                className={`mx-2 cursor-pointer ${
                                                    currentPage === page
                                                        ? "font-bold"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handlePageClick(page)
                                                }
                                            >
                                                {page}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
