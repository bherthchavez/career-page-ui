/* eslint-disable react/prop-types */

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const Accordion = ({ 
    handleApplyJob,
    position,
    short_desc,
    type,
    location,
    jd,
    position_jd,
    requirements,
    about,

}) => {

    const [show, setShow] = useState(false);
    const toggleAccordion = () => {
        setShow(!show);
    };

    return (
        <>

            <div className="group flex flex-col relative focus:outline-none focus:ring cursor-pointer text-xs sm:text-base">
                <span
                    className={`${show ? 'bg-[#DEF7FF]' : 'bg-[#FFE3F4]'} absolute inset-0 translate-x-1.5 translate-y-1.5  transition-transform`}
                ></span>

                <div
                    className="relative inline-block border-2 border-current px-8 py-3  font-bold  text-black group-active:text-opacity-75"
                >
                    <div
                        onClick={toggleAccordion}
                        className='flex justify-between items-center'>
                        <div

                        >
                            <p className={`text-sm sm:text-lg ${show && 'text-[#A1005F]'}`}>
                                {position}
                            </p>
                            <p className='font-semibold text-gray-600'>
                                {short_desc}
                            </p>
                            <div className='flex flex-row gap-4 mt-2'>
                                <button className='px-3 py-1 mb-4 rounded-full border-2 border-slate-400 text-slate-500 font-bold text-xs'>
                                    {type}
                                </button>
                                <button className='px-3 py-1 mb-4 rounded-full border-2 border-slate-400  text-slate-500 font-bold text-xs'>
                                    {location}
                                </button>
                            </div>

                        </div>
                        <div>
                            <span >
                                <BiChevronDown className={`transition-transform ${show && 'rotate-180'}`} size={30} />
                            </span>
                        </div>

                    </div>
                    {show
                        &&
                        <div className='text-gray-700'>
                            <div className='flex flex-col gap-5'>
                                <p className='flex flex-col font-normal'>
                                    <span className='font-bold'>
                                        Job Description
                                    </span>
                                    {jd}
                                </p>
                                <p className='flex flex-col font-normal'>
                                    <span className='font-bold'>
                                        Position Description (what you will do)
                                    </span>
                                    {position_jd}
                                </p>
                                <p className='flex flex-col font-normal'>
                                    <span className='font-bold'>
                                        Requirements:
                                    </span>
                                    {requirements}
                                </p>
                                <p className='flex flex-col font-normal'>
                                    <span className='font-bold'>
                                        About AxiomPrint
                                    </span>
                                    {about}
                                </p>
                            </div>
                            <div className='flex justify-center items-center py-5'>
                                <button
                                    onClick={()=>handleApplyJob(position)}
                                    className='px-6 py-2 rounded-full bg-blue-600 font-semibold text-base text-white'>
                                    Apply now
                                </button>
                            </div>
                        </div>}
                </div>
            </div>

        </>
    )
}

export default Accordion