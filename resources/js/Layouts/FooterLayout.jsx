import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Authenticated({ children }) {
    return (
        <div className="bg-black/50 relative border-t border-black">
            <div className="max-w-screen-2xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 class="mx-4 mt-4 w-full font-extrabold font-untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                        Triestis<span class="text-[#1feffe]">.</span>
                    </h1>
                    <p className="py-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Id odit ullam iste repellat consequatur libero
                        reiciendis, blanditiis accusantium.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="text-lg font-extrabold text-gray-400">
                            Solutions
                        </h6>
                        <ul>
                            <li className="py-2 text-md">Analytics</li>
                            <li className="py-2 text-md">Marketing</li>
                            <li className="py-2 text-md">Commerce</li>
                            <li className="py-2 text-md">Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg font-extrabold text-gray-400">
                            Support
                        </h6>
                        <ul>
                            <li className="py-2 text-md">Pricing</li>
                            <li className="py-2 text-md">Documentation</li>
                            <li className="py-2 text-md">Guides</li>
                            <li className="py-2 text-md">API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg font-extrabold text-gray-400">
                            Company
                        </h6>
                        <ul>
                            <li className="py-2 text-md">About</li>
                            <li className="py-2 text-md">Blog</li>
                            <li className="py-2 text-md">Jobs</li>
                            <li className="py-2 text-md">Press</li>
                            <li className="py-2 text-md">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg font-extrabold text-gray-400">
                            Legal
                        </h6>
                        <ul>
                            <li className="py-2 text-md">Claim</li>
                            <li className="py-2 text-md">Policy</li>
                            <li className="py-2 text-md">Terms</li>
                        </ul>
                    </div>
                </div>

                <main>{children}</main>
            </div>
        </div>
    );
}
