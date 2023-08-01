import AxiomLogo from '../assets/Axiom-Print-Logo.png'
import HeadPhone from '../assets/HeadPhone.svg'
import Email from '../assets/Email.svg'
import Users from '../assets/Users.svg'
import { useState } from 'react'


const Header = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <div className={`${nav && 'shadow-md sm:shadow-none'} bg-white z-10 fixed w-screen  items-center px-5 sm:px-60 py-2 sm:py-5`}>
                <div className='flex justify-between'>
                    <img className='h-[30px] sm:h-[60px]' src={AxiomLogo} alt="Axiom Logo" />

                    <div className='hidden sm:flex gap-10 justify-between  font-thin text-sm text-gray-700'>
                        <div className='flex gap-2 items-center'>
                            <img className='' src={HeadPhone} alt="HeadPhone" />
                            <div className='flex flex-col justify-center '>
                                <p>Call Us 9am-6pm</p>
                                <p>747-888-77</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img className='' src={Email} alt="Email" />
                            <div className='flex flex-col justify-center '>
                                <p>Email Us 24/7</p>
                                <p>order@axiomprint.com</p>
                            </div>
                        </div>
                        <div className='flex gap-2 border-l-2 border-gray-500 p-2'>
                            <img className='pl-3 ' src={Users} alt="Users" />
                            <div className='flex flex-col justify-center '>
                                <p className='font-semibold text-gray-800'>Sign In</p>
                                <p>My Account</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="2000" className="relative block md:hidden">
                        <nav>
                            <button
                                className="w-11 h-10 relative focus:outline-none"
                                onClick={handleNav}
                            >
                                <div className="block w-8 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span
                                        className={`block absolute h-[0.100rem]  w-6 text-black bg-current transform transition duration-500 ease-in-out rounded-full ${nav ? 'rotate-45' : '-translate-y-1.5'
                                            }`}
                                    ></span>
                                    <span
                                        className={`block absolute h-[0.100rem] w-4 text-black bg-current transform transition duration-500 ease-in-out rounded-full ${nav ? 'opacity-0' : ''
                                            }`}
                                    ></span>
                                    <span
                                        className={`block absolute h-[0.100rem] w-6 text-black bg-current transform transition duration-500 ease-in-out rounded-full ${nav ? '-rotate-45' : 'translate-y-1.5'
                                            }`}
                                    ></span>
                                </div>
                            </button>
                        </nav>
                    </div>
                </div>
                {nav &&
                    <div className='flex sm:hidden pt-5 gap-0 sm:gap-10 justify-around font-thin text-xs text-gray-700 pb-5 sm:pb-0'>
                        <div className='flex flex-col gap-2 items-center text-center'>
                            <img className='h-5 sm:h-auto' src={HeadPhone} alt="HeadPhone" />
                            <div className='flex flex-col justify-center '>
                                <p>Call Us 9am-6pm</p>
                                <p>747-888-77</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center text-center'>
                            <img className='h-5 sm:h-auto' src={Email} alt="Email" />
                            <div className='flex flex-col justify-center '>
                                <p>Email Us 24/7</p>
                                <p>order@axiomprint.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center text-center'>
                            <img className='h-5 sm:h-auto' src={Users} alt="Users" />
                            <div className='flex flex-col justify-center '>
                                <p className='font-semibold text-gray-800'>Sign In</p>
                                <p>My Account</p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Header