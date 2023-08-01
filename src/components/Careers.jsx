import { useState } from 'react'
import Modal from './Modal'
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"
import { SlLocationPin } from "react-icons/sl"
import JobData from './JobList'
import Accordion from './Accordion'

const Careers = () => {

    const [openModal, setOpenModal] = useState(false)
    const [jobPosition, setJobPosition] = useState('')

    const handleModalClose = () => {
        setOpenModal(prev => !prev)
    }


    const handleApplyJob = (title) => {
        setOpenModal(prev => !prev)
        setJobPosition(title)
    }



    return (
        <>
            <Modal
                isOpen={openModal}
                onClose={handleModalClose}
            >
                <div className='flex justify-between items-center p-5  bg-[#DEF7FF] font-bold '>
                    <p>
                        {jobPosition}
                    </p>
                    <div
                        onClick={handleModalClose}
                        className='p-1 cursor-pointer text-slate-500 hover:text-slate-800'>
                        <MdClose size={20} />
                    </div>
                </div>
                <div className="flex justify-between gap-3 bg-white px-5 py-10 text-left">
                    <div className='flex flex-col gap-5'>
                        <label
                            htmlFor="fullName"
                            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
                        >
                            <span className="text-xs font-medium text-gray-700"> Full name * </span>

                            <input
                                type="text"
                                id="fullName"
                                placeholder="First Middle Last"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                        <label
                            htmlFor="phoneNum"
                            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
                        >
                            <span className="text-xs font-medium text-gray-700"> Mobile phone number *  </span>

                            <input
                                type="text"
                                id="phoneNum"
                                placeholder="+639 000 000 000"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <label
                            htmlFor="UserEmail"
                            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
                        >
                            <span className="text-xs font-medium text-gray-700"> Email </span>

                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="anthony@rhcp.com"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                        <label className="flex flex-col gap-2 text-xs">
                            <span className='text-xs'>Upload Resume</span>
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file"
                                className="block w-full  text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file: file:font-semibold
                                file:bg-blue-500 file:text-white
                                hover:file:bg-blue-600
                                "/>
                            <span className='text-[10px] text-gray-400'>DOC, DOCX, PDF (2 MB)</span>
                        </label>
                    </div>
                </div>
            </Modal>

            <div className="px-60 mb-20 flex flex-col gap-5">
                <div className="flex gap-4">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="text-slate-400 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shrink-0">
                            <IoIosSearch size={20} />
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="w-[300px] pl-10 p-2 block py-3 px-4 text-sm font-normal bg-gray-100  text-gray-900  border border-gray-200  outline-none "
                            placeholder="Search job..."
                        />
                    </div>
                    <div>
                        <div className='relative'>
                        <div className="text-slate-400 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shrink-0">
                            <SlLocationPin size={20}/>
                        </div>
                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="w-[300px] pl-10 p-2 block py-3 px-4 text-sm font-normal bg-gray-100  text-gray-900  border border-gray-200  outline-none "
                            >
                                <option value="">All Location</option>
                                <option value="JM">Remote</option>
                                <option value="JM">Glendale, CA</option>
                            </select>

                        </div>

                    </div>
                </div>

                {JobData.map((job, index) => (
                    <Accordion key={index}
                        handleApplyJob={handleApplyJob}
                        position={job.position}
                        short_desc={job.short_Description}
                        type={job.type}
                        location={job.location}
                        jd={job.jd}
                        position_jd={job.position_jd}
                        requirements={job.requirements}
                        about={job.about}
                    />
                ))}
            </div>
        </>
    )
}

export default Careers