import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowUpRightFromSquare, faBadgeCheck } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <section className="w-full h-fit grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-0 py-10 lg:p-10 bg-white">
      <div id='home' className="relative flex flex-col p-10 m-auto md:text-5xl text-[#101720] text-4xl lg:text-5xl text-left rounded-3xl bg-[#6a37c9]">
        Welcome to <span className="flex text-center text-2xl lg:text-5xl shadow-[#f8f5fc81] p-2 m-auto rounded-2xl w-[58%] text-[#6a37c9] bg-blue-100 hover:transform hover:scale-105">Blueprintify <FontAwesomeIcon icon={faSearch} className="w-8 h-8 m-auto" /> </span> where imagination meets reality in stunning 3D!
        <div className="absolute h-24 w-24 rounded-3xl right-2 top-4 lg:bottom-5 lg:right-10 parallax"></div>
      </div>
      <div className="flex items-center justify-center rounded-3xl p-10 parallax">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[100%] shadow-4xl shadow-black rounded-3xl h-[100%] p-6 text-2xl bg-[#6a37c9] text-[#fff]">
          Explore endless possibilities, unleash your creativity, and bring your visions to life with our cutting-edge tools and captivating designs. Dive into a world where innovation knows no bounds, and let Blueprintify be your gateway to the extraordinary.
        </div>
      </div>
      <div className="h-[800px] lg:h-[100%] p-4 w-[100%] bg-blue-100 grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-3xl">
        <div className="parallax1 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] h-[400px] lg:h-[100%] rounded-xl ">
          <div className="w-full h-12 flex justify-center items-center">
            <p className='text-[#99f] text-[20px] p-1 mr-3 w-[80%] h-[80%] bg-blue-100 rounded-3xl text-center'>Find out more</p>
            <FontAwesomeIcon icon={faSearch} className="w-10 h-10  p-2 rounded-lg  bg-blue-100 text-[#6a37c9] hover:bg-[#6a37c9] hover:text-blue-100" />
          </div>

          <div className="relative">
            <div className="absolute top-44 rotate-45 hover:transform hover:scale-105">
              <button className="btn-23">
                <span className="text">EXPLORE</span>
                <span className="marquee">EXPLORE</span>
              </button>

            </div>
          </div>


        </div>
        <div className="parallax2 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] mt-2 lg:mt-0 h-[100%] lg:h-[100%] rounded-xl">
          <p className='w-full text-[#6a37c9] h-[80%] lg:h-[80%] rounded-3xl text-left p-2 text-7xl lg:mt-14 lg:text-7xl'> KNOW MORE ABOUT US.</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-blue-100 rounded-3xl">

        <div className="container bg-[#6a37c9] h-full w-[60%] scroll-snap-type: x mandatory">
          <div class="item">
            <Image src="/model1.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model2.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model3.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model4.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model5.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model6.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model7.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
          <div class="item">
            <Image src="/model8.png" alt="tune" width={600} height={600} className='m-auto' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home;
