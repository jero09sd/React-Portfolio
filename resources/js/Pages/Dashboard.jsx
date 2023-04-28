import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import FooterLayout from "@/Layouts/FooterLayout";

export default function Dashboard({ auth, usersCount }) {
    const [usersCountState, setUsersCountState] = useState(usersCount);

    useEffect(() => {
        setUsersCountState(usersCount);
    }, [usersCount]);

    const lastWeekUserCount = 1200;
    const userCountChange = usersCountState - lastWeekUserCount;
    const userCountChangePercentage = (
        (userCountChange / lastWeekUserCount) *
        100
    ).toFixed(2);

    return (
        <>
            <Head title="Dashboard" />
            <AuthenticatedLayout user={auth.user}>
                <div>
                    <div className="flex w-full ">
                        <div className="md:w-[3.35rem] hidden md:block h-screen">
                            <div className="ease-in-out duration-700 min-h-full w-[3.35rem] overflow-hidden border-r bg-black/25 md:hover:bg[#142238] md:hover:w-60 md:hover:bg-black/25 md:hover:shadow-lg">
                                <div className="flex md:h-screen h-[142vh] overflow-x-hidden flex-col justify-between pt-2 pb-6">
                                    <div>
                                        <div class="w-max p-2.5">
                                            <img
                                                src="https://tailus.io/images/logo.svg"
                                                class="w-32"
                                                alt=""
                                            />
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
                                                        Users Dashboard
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
                        <div className="w-full max-h-screen ">
                            <div className="h-full ">
                                <div className="h-full flex flex-col items-center  justify-center">
                                    <div className=" flex  flex-col items-center py-20 px-20 rounded-md text-center bg-black/25 border border-white">
                                        {" "}
                                        <h3 className="text-[10rem] font-extrabold text-gray-100">
                                            Dashboard Activity
                                            <h5 className="text-[10rem] font-Roman text-gray-300">
                                                {usersCountState}{" "}
                                                <span className="text-[5rem]">
                                                    users
                                                </span>
                                            </h5>
                                        </h3>
                                        <div className="flex items-end text-green-500">
                                            <svg
                                                className="w-3"
                                                viewBox="0 0 12 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span>
                                                {userCountChangePercentage}%
                                            </span>
                                        </div>
                                        <span className="block text-center font-extrabold text-[1rem] text-gray-400">
                                            Compared to last week{" "}
                                            {lastWeekUserCount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterLayout />
                </div>
            </AuthenticatedLayout>
        </>
    );
}
