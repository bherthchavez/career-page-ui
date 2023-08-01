import AxiomLogo from '../assets/Axiom-Print-Logo.png'
import HeadPhone from '../assets/HeadPhone.svg'
import Email from '../assets/Email.svg'
import Users from '../assets/Users.svg'


const Header = () => {
    return (
        <>
            <div className="bg-white z-10 fixed w-screen flex justify-between items-center px-60 py-5">
                <img className='h-[60px]' src={AxiomLogo} alt="Axiom Logo" />
                <div className='flex gap-10 justify-between  font-thin text-sm text-gray-700'>
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
            </div>
        </>
    )
}

export default Header