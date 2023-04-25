import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import FooterLayout from '@/Layouts/FooterLayout'

export default function Contact({ auth }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="bg-gradient-to-br from-[#000300] via-[#142238] to-[#000000]">
            <Head title="Welcome" />

            <div className="min-h-screen">
                <nav className="bg-black/25 border-b border-black">
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
                <section class="bg-tansparent py-20 lg:py-[20rem] overflow-hidden relative z-10">
                    <div class="container">
                        <div class="flex flex-wrap lg:justify-between -mx-4">
                            <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                                <div class="max-w-[570px] mb-12 lg:mb-0">
                                    <span class="block mb-4 text-base text-primary font-semibold">
                                        Contact Us
                                    </span>
                                    <h2
                                        class="
                  text-[#2470c6]
                  mb-6
                  uppercase
                  font-extrabold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                                    >
                                        GET IN TOUCH WITH US
                                    </h2>
                                    <p class="text-base text-body-color leading-relaxed mb-9">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eius tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim adiqua minim veniam quis
                                        nostrud exercitation ullamco
                                    </p>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 xl:w-5/12 px-4 drop-shadow-3xl ">
                                <div className="bg-black/50 backdrop-blur-md  relative  rounded-lg p-8 sm:p-12 shadow-lg">
                                    <form>
                                        <div class="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                class="
                                                w-full
                                                rounded-lg
                                                py-3
                                                px-[14px]
                                                bg-transparent
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                resize-none
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-[#2470c6]
                        "
                                            />
                                        </div>
                                        <div class="mb-6">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                class="
                                                w-full
                                                rounded-lg
                                                py-3
                                                px-[14px]
                                                bg-transparent
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                resize-none
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-[#2470c6]
                        "
                                            />
                                        </div>
                                        <div class="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Your Phone"
                                                class="
                                                w-full
                                                rounded-lg
                                                py-3
                                                px-[14px]
                                                bg-transparent
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                resize-none
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-[#2470c6]
                        "
                                            />
                                        </div>
                                        <div class="mb-6">
                                            <textarea
                                                rows="6"
                                                placeholder="Your Message"
                                                class="
                                                w-full
                                                rounded-lg
                                                py-3
                                                px-[14px]
                                                bg-transparent
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                resize-none
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-[#2470c6]
                        "
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="
                                            relative rounded-md m-4 text-white text-center p-2 px-4 bg-[#2470c6]  transition-all duration-500
                                            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#2470c6] before:transition-all
                                            before:duration-300 before:opacity-20 before:hover:opacity-0 before:hover:scale-50
                                            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100
                        "
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FooterLayout/>
        </div>
    );
}
