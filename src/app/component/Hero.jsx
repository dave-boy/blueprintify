import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
  return (
    <section className='w-full h-screen bg-white grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
      <div className="flex items-center justify-center p-4 relative">
        <h1 className="text-4xl lg:text-[85px] absolute top-20 font-bold text-black uppercase">Blueprintify.</h1>
        <h1 className=" lg:text-[95px] font-bold text-white p-3 rounded-2xl bg-black absolute left-0 bottom-40 rotate-[90deg]">00.1</h1>
      </div>
      <div className="flex items-center justify-center  p-4 pic w-full">
        <div className="w-full h-[300px] bg-[#6a37c9b6] mt-20"><FontAwesomeIcon icon={faArrowRight} className='w-20 h-20 p-2 mt-[220px] bg-[#000] text-[#6a37c9]'/></div>
      </div>
    </section>
  )
}

