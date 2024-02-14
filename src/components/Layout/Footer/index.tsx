import React from 'react';
import { IoIosCloudy } from 'react-icons/io';
import { Link } from 'react-router-dom';

import DepLogo from '../../../assets/dep-logo-white.png'
import UniLogo from '../../../assets/aut-logo-white.png'

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <div className="container mx-auto">
      <div className="flex text-slate-200 mx-7 justify-between">
          <div className='flex'>
          <IoIosCloudy className='scale-[2] translate-x-10'/>
            <Link
                className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                to='/'
            >
                
                Cloud Computing
            </Link>
          </div>

          <div className='flex h-16 w-16 mx-7'>
            <img src={DepLogo} alt="computer engineering department" />
            <img src={UniLogo} alt="AUT logo" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
