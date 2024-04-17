import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faHome, faTableCellsLarge, faUserPlus, faPhone } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <nav className='w-full h-20 bg-white  flex items-center  px-2'>
      <h2 className="text-2xl font-extrabold text-[#99f] ml-4">
        Blueprintify
      </h2>
      <div className="ml-auto w-[35%]">
          <div className="flex space-x-10">
            <a id='home' className="flex items-center p-5 h-12 w-20 te bg-[#6a37c9]">
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
              <span className="ml-2">Home</span>
            </a>
            <a id='about' className="flex items-center hover:text-[#6a37c9]">
            <FontAwesomeIcon icon={faTableCellsLarge} className="w-4 h-4" />
              <span className="ml-2">About</span>
            </a>
            <a className="flex items-center hover:text-[#6a37c9]">
            <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
              <span className="ml-2">SignUp</span>
            </a>
            <a className="flex items-center hover:text-[#6a37c9]">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <span className="ml-2">Contact</span>
            </a>
          
          </div>

        </div>



    </nav>
  )
}

export default Navbar
