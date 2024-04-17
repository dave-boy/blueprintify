import React from 'react'
import Accordion from './sub-component/Accordion'
function About() {
  return (
    <section id='about' className=' lg:w-full h-[200vh] lg:h-screen bg-[#000] grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
      <div className="flex items-center justify-center p-4 ">
          <h2 className=' text-[80px] uppercase font-bold relative text-white h-[500px] p-5' style={{lineHeight: '80px'}}>Experience the future of design with<div className='parallax absolute bottom-[170px] left-60 h-16 rounded-2xl w-56'></div> Blueprintify today!</h2>
      </div>
      <div className="flex items-center justify-center w-full p-4">
        <Accordion />
      </div>
    </section>      
  )
}

export default About
