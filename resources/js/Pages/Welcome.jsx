import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import FooterLayout from '@/Layouts/FooterLayout'

export default function Welcome({ auth }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen bg-gradient-to-br from-[#000300] via-[#142238] to-[#000000]">
                <nav className="bg-black/25 border-b drop-shadow-xl border-black">
                    <div className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto px-4">
                        <h1 className="mx-auto mt-1 w-full font-extrabold font-untouched text-lg lg:text-3xl  bg-gradient-to-r from-[#ffffff] via-[#001618] to-[#001618] bg-clip-text text-transparent">
                            Triestis<span className="text-[#1feffe]">.</span>
                        </h1>
                        <ul className="hidden text-gray-400 font-semibold md:flex">
                            <li className="p-4">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="p-4">
                                <Link href="About">About </Link>
                            </li>
                            <li className="p-4">
                                <Link href="Contact">Contact</Link>
                            </li>
                            {auth.user ? (
                                <li className="p-4">
                                    {" "}
                                    <Link
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="p-4">
                                        <Link
                                            href={route("login")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="p-4">
                                        <Link
                                            href={route("register")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <div onClick={handleNav} className=" block md:hidden">
                            {nav ? (
                                <AiOutlineClose size={20} color="white" />
                            ) : (
                                <AiOutlineMenu size={20} color="white" />
                            )}
                        </div>
                        <ul
                            className={
                                nav
                                    ? "fixed min-h-full left-0 top-0 w-[60%] text-white border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                                    : "ease-in-out duration-600 fixed left-[-100%]"
                            }
                        >
                            <h1 className="mx-4 mt-4 w-full font-extrabold font-untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                Triestis
                                <span className="text-[#1feffe]">.</span>
                            </h1>
                            <li className="p-4 border-b border-gray-200 hover:border-gray-800 ease-out transition-all">
                                {" "}
                                <Link href="/">Home</Link>
                            </li>
                            <li className="p-4 ">
                                <Link href="About"> About </Link>
                            </li>
                            <li className="p-4 ">
                                <Link href="Contact"> Contact</Link>
                            </li>
                            {auth.user ? (
                                <li className="p-4">
                                    {" "}
                                    <Link
                                        href={route("dashboard")}
                                        className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="p-4">
                                        <Link
                                            href={route("login")}
                                            className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="p-4">
                                        <Link
                                            href={route("register")}
                                            className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
                <div class="container mx-auto mt-10 bg-gray-400 h-96 rounded-md flex items-center">
                    <div class="sm:ml-20 text-gray-50 text-center sm:text-left">
                        <h1 class="text-5xl font-bold mb-4">
                            Book saunas <br />
                            everywhere.
                        </h1>
                        <p class="text-lg inline-block sm:block">
                            The largest online community to rent saunas in
                            Finland.
                        </p>
                        <button class="mt-8 px-4 py-2 bg-gray-600 rounded">
                            Browse saunas
                        </button>
                    </div>
                </div>
                <main class="py-16 container mx-auto px-6 md:px-0">
                    <section>
                        <h1 class="text-3xl font-bold text-gray-600 mb-10">
                            Explore exotic locations in Finland
                        </h1>
                        <div class="grid sm:grid-cols-3 gap-4 grid-cols-2">
                            <div>
                                <div class="bg-gray-300 h-44"></div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    Saunas in{" "}
                                    <span class="text-gray-700">Helsinki</span>
                                </h3>
                            </div>
                            <div>
                                <div class="bg-gray-300 h-44"></div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    Saunas in{" "}
                                    <span class="text-gray-700">Rovaniemi</span>
                                </h3>
                            </div>
                            <div>
                                <div class="bg-gray-300 h-44"></div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    Saunas in{" "}
                                    <span class="text-gray-700">Ruka</span>
                                </h3>
                            </div>
                        </div>
                        <hr class="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
                    </section>
                    <section>
                        <h1 class="inline-block text-gray-600 font-bold text-3xl">
                            The holy sauna ritual <br />
                            (or how does Saunatime work).
                        </h1>

                        <div class="grid grid-cols-3 gap-4 mt-10">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    1. Browse and book
                                </h3>
                                <p class="text text-gray-400">
                                    Start by searching for a location. Once you
                                    find a sauna you like, simply check the
                                    availability, book it, and make a secure
                                    payment right away.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    2. Have a great bath
                                </h3>
                                <p class="text text-gray-400">
                                    Meet your host on the date you chose and
                                    enjoy the home sauna experience. We'll
                                    handle the payment to the host after your
                                    experience.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    3. Review the host
                                </h3>
                                <p class="text text-gray-400">
                                    If you enjoyed the experience, let others
                                    know by giving a review to your sauna host.
                                    This way others will know where to go.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="mt-14">
                        <p>
                            Ps. You can also become a Saunatime host in few
                            clicks!
                        </p>
                    </div>
                </main>
                <FooterLayout/>
            </div>
        </>
    );
}
