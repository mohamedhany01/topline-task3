import Image from "next/image";

import pattern from "../../../public/pattern.png";
import rectangle from "../../../public/rectangle.png";
import person from "../../../public/person.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section className="my-10">
            <div className="default-wrapper">
                <div className="flex gap-x-20 mt-40 min-h-[800px]">
                    <div className="flex-1 basis-4/5">
                        <h3 className="relative font-bold flex flex-col mb-8 text-5xl">
                            <span className="font-normal text-lg text-[#64399a] mb-2">About Us</span>
                            WHO WE ARE
                            <span className="absolute w-1/12 h-1 bg-[#64399a] -bottom-4"></span>
                        </h3>
                        <div className="mb-20">
                            <p className="text-lg leading-loose">
                                Speed Architectural Technology Co, a SPEETECH group of company in AlKhobar, is one of the leading Contracting & Trading companies in Saudi Arabia undertaking major Civil, Mechanical, Piping, Fire Protection, Electrical, Instrumentation projects, Foc, Instrument calibration. We had launched our operation in Al-Khobar in the Year 2003 to cater the needs of the Kingdom’s fast-growing economy / local industries. The dynamic growth throughout Saudi Arabia, in addition to the regional market, sets an unprecedented expansion rate and is the result of proving itself a dedicated and trustworthy partner, whilst embedding itself in the heart of pioneering excellence within its field. With professional expertise and the highest classification and qualifications with
                            </p>
                        </div>
                        <button className="bg-[#64399a] px-12 py-6 flex items-center text-white font-normal rounded-md">Read More <span className="ml-2"><FaLongArrowAltRight color="#fff" /></span></button>
                    </div>
                    <div className="flex-2 basis-full relative hidden md:block">
                        <div className="absolute">
                            <Image src={pattern} alt="Pattern" />
                        </div>
                        <div className="absolute z-10 top-10 left-10">
                            <Image src={rectangle} alt="Rectangle" width={400} />
                        </div>
                        <div className="absolute top-32 left-32">
                            <Image src={person} alt="Person" width={400} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}