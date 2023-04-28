import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import {
    AiOutlineLeft,
    AiOutlineRight,
    AiFillDollarCircle,
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";
import { TbFreeRights } from "react-icons/tb";
import FooterLayout from "@/Layouts/FooterLayout";
import React from "react";

export default function Welcome({ auth, user, header }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const carouselItems = [
        {
            id: 1,
            image: "../../Assets/ARENAWIDE-MOCKUP_1920X1280_72DPI.png",
        },
        {
            id: 1,
            image: "../../Assets/maxresdefault.jpg",
        },
        {
            id: 2,
            image: "../../Assets/mir4-img.png",
        },
        {
            id: 3,
            image: "../../Assets/League-Legends-contara-sistema-desafios_1571552855_971917_1440x810.jpg",
        },
    ];

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(carouselItems.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex === carouselItems.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return (
        <>
            <Head title="Welcome" />
            
            <div
                className="min-h-screen bg-gradient-to-br h-full from-[#000300] via-[#142238] to-[#000000]"
                style={{
                    backgroundImage: `url(${"../../Assets/blurredBG.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: "blur(10rem)",
                }}
            >
                {" "}
                <nav className="bg-black/25 border-b drop-shadow-xl border-black">
                    <div className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto px-4">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto fill-current text-white" />
                                </Link>
                            </div>

                            <div className="hidden sm:-my-px sm:flex">
                                <NavLink href="/">
                                    <h1 className="w-full font-extrabold font-untouched text-lg  lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                        Triestis
                                        <span className="text-[#1feffe]">
                                            .
                                        </span>
                                    </h1>
                                </NavLink>
                            </div>
                        </div>
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
                                <>
                                    {auth.user.role === "admin" && (
                                        <li className="p-4">
                                            <Link
                                                href={route("dashboard")}
                                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    )}
                                    <li className="p-4">
                                        <Link
                                            method="post"
                                            href={route("logout")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
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
                                    ? " min-h-max flex flex-col absolute h-[200rem] left-0 top-0 w-[60%] text-white border-r border-r-gray-900 bg-black ease-in-out duration-500"
                                    : "ease-in-out duration-600 fixed left-[-100%]"
                            }
                        >
                            <h1 className="mx-4 mt-4 w-full font-extrabold font-untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                Triestis
                                <span className="text-[#1feffe]">.</span>
                            </h1>
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
                                <>
                                    {auth.user.role === "admin" && (
                                        <li className="p-4">
                                            <Link
                                                href={route("dashboard")}
                                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    )}
                                    <li className="p-4">
                                        <Link
                                            method="post"
                                            href={route("logout")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
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
                    </div>
                </nav>
                <section className="relative hidden md:block overflow-hidden">
                    <div className="relative w-full h-[20rem] sm:h-[70rem]">
                        <div
                            className="absolute w-full h-full flex"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {carouselItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full h-full flex-shrink-0 flex items-center text-center bg-gray-300"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backdropFilter: "blur(10rem)",
                                    }}
                                >
                                    {" "}
                                    <div className="py-10 w-full">
                                        <div
                                            className="h-[50rem] opacity-60"
                                            style={{
                                                backgroundImage: `url(${"../../Assets/WelcomeLogo.png"})`,
                                                backgroundSize: "contain",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backdropFilter: "blur(5px)",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 focus:outline-none"
                            onClick={handlePrevClick}
                        >
                            <AiOutlineLeft className="h-10 w-10 text-gray-500" />
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 focus:outline-none"
                            onClick={handleNextClick}
                        >
                            <AiOutlineRight className="h-10 w-10 text-gray-500" />
                        </button>
                    </div>
                </section>
                <main class="py-16 container mx-auto px-6 md:px-0">
                    <section className="text-center">
                        <h1 class="inline-block uppercase font-Roman text-gray-300 font-bold text-7xl">
                            Earn while playing games
                        </h1>

                        <div class="grid grid-cols-3 gap-4 mt-10 text-start">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    * Play games while enjoying a hot coffee
                                </h3>
                                <p class="text text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, dolorum libero?
                                    Delectus impedit alias exercitationem, nemo,
                                    atque voluptatem eos quisquam vel quae
                                    veniam fuga. Animi.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    * Play games while enjoying a hot coffee
                                </h3>
                                <p class="text text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, dolorum libero?
                                    Delectus impedit alias exercitationem, nemo,
                                    atque voluptatem eos quisquam vel quae
                                    veniam fuga. Animi.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-500 mt-2">
                                    * Play games while enjoying a hot coffee
                                </h3>
                                <p class="text text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, dolorum libero?
                                    Delectus impedit alias exercitationem, nemo,
                                    atque voluptatem eos quisquam vel quae
                                    veniam fuga. Animi.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <div class="mx-auto my-10 bg-transparent h-full w-full rounded-md flex justify-center items-center">
                    <div class="grid grid-cols-8 gap-2 px-2">
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                VALORANT{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    Shooter{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    FPS{" "}
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="../../Assets/BDO.png"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Black Desert Online{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    MMORPG{" "}
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="../../Assets/Tower Of Fantasy.png"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Tower OF Fantasy{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    RPG{" "}
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="../../Assets/516575-285x380.png"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Dekaron{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    MMORPG{" "}
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Elden Ring{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    RPG{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    Action{" "}
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>
                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Apex Legends{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    FPS{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    Shooter{" "}
                                </a>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="https://static-cdn.jtvnw.net/ttv-boxart/513181-285x380.jpg"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>

                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Genshin Impact{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    Action{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    RPG{" "}
                                </a>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1">
                            <a href="" class="bg-purple-500/25">
                                <img
                                    src="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"
                                    class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                                />
                            </a>

                            <a
                                href="#"
                                class="hover:text-purple-500 text-gray-200 font-semibold"
                            >
                                {" "}
                                Lost Ark{" "}
                            </a>
                            <div class="flex flex-row flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    RPG{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    Action{" "}
                                </a>
                                <a
                                    href="#"
                                    class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                                >
                                    {" "}
                                    MMO{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-[10rem] px-4 bg-[#142238]/25">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                        <div className="w-full shadow-xl flex bg-gray-200 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                            <h2 className="text-2xl font-bold text-center py-8">
                                <div className="flex justify-center items-center">
                                    <TbFreeRights size={50} />
                                </div>
                                Free User
                            </h2>
                            <p className="text-center text-4xl font-bold">$0</p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">
                                    4hrs Min Top up
                                </p>
                                <p className="py-2 border-b mx-8">
                                    Free Noodle
                                </p>
                            </div>
                            <button className="bg-[#2470c6] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                                Start Trial
                            </button>
                        </div>
                        <div className="w-full shadow-xl bg-gray-500 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                            <h2 className="text-2xl font-bold text-center py-8">
                                <div className="flex justify-center items-center">
                                    <AiFillDollarCircle
                                        color="gold"
                                        size={50}
                                    />
                                </div>
                                Yearly Subscription
                            </h2>
                            <p className="text-center text-4xl font-bold">
                                $500
                            </p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">
                                    Unlimited Time
                                </p>
                                <p className="py-2 border-b mx-8">
                                    Free Meal{" "}
                                    <span className="text-xs text-gray-500">
                                        (3 times a day)
                                    </span>{" "}
                                </p>
                                <p className="py-2 border-b mx-8">
                                    Free Seasonal Jacket
                                </p>
                                <p className="py-2 border-b mx-8">
                                    You can pack your Bag and live in Here!
                                </p>
                            </div>
                            <button className="bg-black text-[#1feffe] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                                Buy Now
                            </button>
                        </div>
                        <div className="w-full shadow-xl flex bg-gray-200 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                            <h2 className="text-2xl font-bold text-center py-8">
                                <div className="flex justify-center items-center">
                                    <AiFillDollarCircle
                                        color="black"
                                        size={50}
                                    />
                                </div>
                                Monthly Subscription
                            </h2>
                            <p className="text-center text-4xl font-bold">
                                $149
                            </p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">
                                    Unlimited Time
                                </p>
                                <p className="py-2 border-b mx-8">
                                    Free Meal{" "}
                                    <span className="text-xs text-gray-500">
                                        (3 times a day)
                                    </span>{" "}
                                </p>
                                <p className="py-2 border-b mx-8">
                                    <span className="text-xs text-gray-500">
                                        50% discount
                                    </span>{" "}
                                    Seasonal Jacket
                                </p>
                            </div>
                            <button className="bg-[#2470c6] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <FooterLayout />
            </div>
            
            {header && (
                <header className="bg-white font-untouched shadow">
                    <div className="max-w-7xl  mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <span>{appName}</span>
                    </div>
                </header>
            )}
        </>
    );
}
