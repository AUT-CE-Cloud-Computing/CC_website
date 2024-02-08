import React from 'react';
import { IoIosCloudy } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <div className="container mx-auto">
      <div className="flex text-slate-200 mx-7">
          <IoIosCloudy className='scale-[2] translate-x-10'/>
            <Link
                className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                to='/'
            >
                
                Cloud Computing
            </Link>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
