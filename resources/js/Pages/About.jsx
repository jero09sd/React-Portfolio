import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Dropdown from "@/Components/Dropdown";
import FooterLayout from "@/Layouts/FooterLayout";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";

export default function About({ auth }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <Head title="About" />

            <div
                className="min-h-screen bg-gradient-to-br h-full from-[#000300] via-[#142238] to-[#000000]"
                style={{
                    backgroundImage: `url(${"../../Assets/blurredBG.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: "blur(10rem)",
                }}
            >
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
                        <ul className="hidden text-gray-400 items-center font-semibold md:flex">
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
                                        <div className="hidden sm:block sm:items-center sm:ml-6">
                                            <div className="relative">
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <span className="inline-flex rounded-md">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                            >
                                                                Logout
                                                                <svg
                                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </span>
                                                    </Dropdown.Trigger>

                                                    <Dropdown.Content>
                                                        <Dropdown.Link
                                                             href={route("profile.edit")}
                                                            as="button"
                                                        >
                                                            <span className="mr-1 font-medium">
                                                                Profile
                                                            </span>
                                                        </Dropdown.Link>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            as="button"
                                                        >
                                                            Log Out
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </div>
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
                <div className="h-full max-h-full max-w-full">
                    <div
                        className="w-full h-[30rem] opacity-25"
                        style={{
                            backgroundImage: `url(${"../../Assets/DSC00215-2-scaled.jpg"})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>{" "}
                    <div className="w-full flex justify-center items-center bg-black/25">
                        <span className="w-[50rem] text-center my-5">
                            {" "}
                            <h1 className=" mx-4 mt-4 font-extrabold font-untouched text-lg md:text-6xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                Triestis
                                <span className="text-[#1feffe]">.</span>
                                <span className="uppercase font-Roman md:text-3xl text-gray-100">
                                    {" "}
                                    provides service with a comfort of your own
                                    home
                                </span>
                            </h1>
                        </span>
                    </div>
                </div>
                <div className="w-full md:h-[100rem] h-[50rem]">
                    {" "}
                    <section
                        className="h-full"
                        style={{
                            backgroundImage: `url(${"../../Assets/ARENAWIDE-MOCKUP_1920X1280_72DPI.png"})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backdropFilter: "blur(10rem)",
                        }}
                    >
                        <div class=" py-10 mx-auto">
                            <div class="lg:-mx-6 md:flex max-w-full md:mt-[5%] md:items-center">
                                <div className="mt-6 lg:w-1/2 md:mt-0 md:w-20 text-center">
                                    <img
                                        className=" mr-14 h-98 opacity-80"
                                        src="../../Assets/triestis mgmt LOGO.png"
                                        alt=""
                                    />
                                </div>
                                <div class="mt-6 lg:w-1/2 md:mt-0 md:mx-10  md:items-center">
                                    <div class="text-sm text-gray-500 md:text-xl md:h-full overflow-hidden ... text-center h-64 bg-black/60 p-5">
                                        <p className="font-extrabold font-untouched text-lg md:text-6xl m-10  bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                            <span className="text-white">
                                                "
                                            </span>{" "}
                                            Triestis
                                            <span className="text-[#1feffe]">
                                                .
                                            </span>
                                            <span className="font-sans text-white md:text-lg text-sm italic">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Mollitia ut perspiciatis facere
                                                earum voluptas eius ad? Tenetur
                                                tempore expedita eaque
                                                consequuntur laborum laudantium
                                                corporis repellendus, facilis
                                                magni totam at eum! Nostrum
                                                assumenda facilis, vero rem
                                                laborum voluptatum eligendi
                                                ipsum aspernatur hic perferendis
                                                nam dolore vitae, laboriosam
                                                possimus libero culpa recusandae
                                                quia alias mollitia. Dolor
                                                consectetur tenetur eveniet eos
                                                qui necessitatibus reprehenderit
                                                asperiores ullam excepturi
                                                deserunt est consequatur
                                                voluptatibus, vitae impedit iure
                                                perferendis dolorum rem tempora
                                                cum doloremque et fuga nisi.
                                                Velit porro eius nobis minus
                                                esse numquam natus ex. Modi
                                                alias odio similique, doloremque
                                                natus voluptates vel
                                                repellendus? Accusamus illo unde
                                                praesentium hic aliquam
                                                similique ad saepe esse veniam
                                                illum eos odit dignissimos,
                                                placeat quae tempora laboriosam?
                                                Iure necessitatibus aperiam
                                                laborum quis error molestias
                                                provident veniam nemo harum
                                                corrupti! Praesentium a
                                                consequuntur harum amet
                                                consectetur, nemo pariatur
                                                magnam laborum quidem sit
                                                consequatur suscipit provident
                                                vel obcaecati non nobis ipsum
                                                blanditiis voluptas temporibus
                                                distinctio earum ipsa! Deleniti,
                                                provident dolorum? Ipsum, alias
                                                quam tempora iste odit
                                                reiciendis sequi accusamus
                                                beatae aspernatur! Quaerat,
                                                repellat? Eum incidunt nulla ea
                                                quidem nisi quaerat, nihil
                                                quibusdam quos labore eligendi
                                                possimus repudiandae voluptates
                                                esse nostrum laborum molestias
                                                eveniet libero recusandae?
                                                Quibusdam in debitis ipsam dicta
                                                mollitia? Id repudiandae ea,
                                                recusandae facilis mollitia
                                                voluptatum harum quisquam
                                                similique accusamus provident
                                                inventore, consequatur dolore
                                                eos possimus adipisci ipsam qui,
                                                perspiciatis veniam! Modi
                                                praesentium perferendis fugit
                                                voluptate iure aut dolorem,
                                                sapiente, ipsa eum itaque quia
                                                voluptas? Odio, dolorem veniam
                                                minus quibusdam ipsam sit
                                                praesentium consequuntur
                                                repudiandae voluptatum
                                                accusantium, perspiciatis
                                                consequatur, unde ipsum optio
                                                aut rem expedita a itaque totam.
                                                Quia ipsa adipisci recusandae
                                                earum tempore, quod beatae,
                                                ducimus ratione architecto cum
                                                reiciendis. Labore, nemo
                                                deserunt? Ipsam nihil sapiente
                                                voluptatibus possimus eaque
                                                distinctio temporibus incidunt
                                                itaque debitis omnis quidem aut
                                                blanditiis sunt laudantium
                                                mollitia odit perspiciatis esse
                                                quo officia quasi, tempora
                                                tenetur!
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <FooterLayout />
            </div>
        </>
    );
}
