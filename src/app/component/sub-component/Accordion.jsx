import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenRuler, faEye, faHandHoldingDollar, faHeart } from '@fortawesome/free-solid-svg-icons'
function Accordion() {
    return (
        <div className="accordion w-full h-full flex flex-col lg:flex-row gap-5 p-2">
            <div className='text bg-[#6a37c9] rounded-lg w-full lg:w-auto relative '>
                <h2 className='text-4xl font-bold uppercase'>Create.</h2>
                <p className='absolute rounded-md bottom-0 p-6 h-auto lg:h-[160px] w-full lg:w-[160px] right-0 lg:left-0 px-5 font-bold text-[20px] text-[#6a37c9]'><FontAwesomeIcon icon={faPenRuler} className='w-10 h-10 p-2' /> Create a new NFT art project with Blueprintify.</p>
            </div>
            <div className='text bg-red-400 rounded-2xl relative'>
                <h2 className='text-4xl font-bold uppercase'>Exhibit.</h2>
                <p className='absolute rounded-md bottom-0 p-6 h-auto lg:h-[160px] w-full lg:w-[160px] right-0 lg:left-0 px-5 font-bold text-[20px] uppercase text-red-400'><FontAwesomeIcon icon={faEye} className='w-10 h-10 p-2' /> View and exhibit your new NFT art projects.</p>
            </div>
            <div className='text bg-green-400 rounded-2xl relative'>
                <h2 className='text-4xl font-bold uppercase'>Trade.</h2>
                <p className='absolute rounded-md bottom-0 p-6 h-auto lg:h-[160px] w-full lg:w-[160px] right-0 lg:left-0 px-5 font-bold text-[20px] uppercase text-green-400'><FontAwesomeIcon icon={faHandHoldingDollar} className='w-10 h-10 p-2' />Trade, collect, and explore the limitless creativity of digital art with Blueprintify</p>
            </div>
            <div className='text bg-blue-300 rounded-2xl relative'>
                <h2 className='text-4xl font-bold uppercase'>Interact.</h2>
                <p className='absolute rounded-md bottom-0 p-6 h-auto lg:h-[160px] w-full lg:w-[160px] right-0 lg:left-0 px-5 font-bold text-[20px] uppercase text-blue-300'><FontAwesomeIcon icon={faHeart} className='w-10 h-10 p-2' />Interact with other creators and collectors on the platform.</p>
            </div>
        </div>

    )
}

export default Accordion
