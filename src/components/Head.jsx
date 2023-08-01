import hired from '../assets/hired.jpg'
import Greater from '../assets/Greater.png'
const Head = () => {
    return (
        <>
            <div className='px-5 sm:px-60 pt-20 sm:pt-[100px]'>
                <div className='flex justify-between items-center gap-2'    >
                    <div className='text-2xl w-[600px]'>
                        <button className='px-4 py-2 mb-4 rounded-full border-2 border-[#9A0059] text-[#9A0059] font-bold text-xs sm:text-sm'>
                            We are Hiring!
                        </button>
                        <p className='font-bold  text-lg sm:text-2xl'>AxiomPrint is hiring talented individuals
                            to be part of our dynamic team.
                        </p>
                        <div className='text-sm sm:text-xl'>
                            <p>Explore exciting opportunities and make a difference
                                in the world of printing.
                                <span className='font-bold text-sm sm:text-lg'> Apply now!
                                </span>
                            </p>
                        </div>
                        <img className='hidden sm:block  absolute top-32 left-[500px] grayscale opacity-5 ' src={Greater} alt='Greater' />

                    </div>
                    <div className='relative '>
                        <img className='hidden sm:block w-[500px] rounded-bl-[150px] rounded-tr-[100px] grayscale opacity-60' src={hired} alt='Hired Picture' />

                        <img className='hidden sm:block absolute bottom-20 left-[530px] rotate-90 grayscale opacity-5 ' src={Greater} alt='Greater' />
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Head