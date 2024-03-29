import Image from "next/image";

import smallLogo from "../../../public/smallLogo.png";
import bigLogo from "../../../public/bigLogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTiktok } from "react-icons/fa6";
import { RiPrinterLine, RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-zinc-800">
            <div className="default-wrapper">
                {/* Upper */}
                <div className="md:flex block">
                    <div className="flex-1 basis-full my-20 flex flex-col justify-center">
                        <div className="md:mt-0 mt-20">
                            <Image src={bigLogo} alt="Logo" />
                        </div>
                        <ul className="flex mt-8 ml-20">
                            <li className="mr-6">
                                <FaInstagram color="#fff" />
                            </li>
                            <li className="mr-6">
                                <FaTiktok color="#fff" />
                            </li>
                            <li className="mr-6">
                                <RiTwitterXFill color="#fff" />
                            </li>
                            <li className="mr-6">
                                <FaFacebookF color="#fff" />
                            </li>
                            <li className="mr-6">
                                <FaLinkedinIn color="#fff" />
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 basis-full my-20 flex flex-col md:justify-center md:items-center">
                        <div>
                            <h4 className="text-white font-bold mb-5">QUIK LINKS</h4>
                            <ul>
                                <li className="mt-3 text-sm">
                                    <a href="#" className="text-gray-200">Our Mission</a>
                                </li>
                                <li className="mt-3 text-sm">
                                    <a href="#" className="text-gray-200">Filed of Activities</a>
                                </li>
                                <li className="mt-3 text-sm">
                                    <a href="#" className="text-gray-200">Commetment to Quality</a>
                                </li>
                                <li className="mt-3 text-sm">
                                    <a href="#" className="text-gray-200">Competitive Advantage</a>
                                </li>
                                <li className="mt-3 text-sm">
                                    <a href="#" className="text-gray-200">Our Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 basis-full my-20 flex flex-col md:justify-center md:items-center">
                        <div>
                            <h4 className="text-white font-bold mb-5">GET IN TOUCH</h4>
                            <ul>
                                <li className="flex gap-x-4 mt-3 text-sm">
                                    <HiOutlineMapPin color="#64399a" />
                                    <a className="text-gray-200">P.O.BOX: 79496, AL KHOBAR 31952, KINGDOM OF <br /> SAUDI ARABIA</a>
                                </li>
                                <li className="flex gap-x-4 mt-3 text-sm">
                                    <FaPhone color="#64399a" />
                                    <a className="text-gray-200">+966 668009111</a>
                                </li>
                                <li className="flex gap-x-4 mt-3 text-sm">
                                    <RiPrinterLine color="#64399a" />
                                    <a className="text-gray-200">013-897 9287</a>
                                </li>
                                <li className="flex gap-x-4 mt-3 text-sm">
                                    <AiOutlineMail color="#64399a" />
                                    <a className="text-gray-200">info@topline.com.sa</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Lower */}
                <div className="default-wrapper">
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <div className="flex md:mt-0 mt-3 md:justify-between justify-center items-center">
                        <div>
                            <p className="text-white">All rights reserved to Top Line Co. © 2024</p>
                        </div>
                        <div className="md:block hidden">
                            <Image src={smallLogo} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}