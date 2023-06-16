// rafce permet une auto-completion de ton import et export avec div etc.
import { useState } from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
        // ! = or => if setLogo doesn't work else !logo
    };

    return (
        <div className="flex justify-between items-center h-20 px-4">
            <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>PASTRY.</h1>
            {/* ? = if / : = else */}
            </div>
            <ul className='hidden md:flex'>
                {/* md for the breakpoints in mobile */}
                <li>Home</li>
                <li>Patisseries</li>
                <li>Pains</li>
                <li>Sandwichs</li>
                <li>À propos</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20}/>
                <BsPerson size={20}/>
            </div>
                    {/* Hamburger */}
            <div className='md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>

                    {/* Mobile menu dropdown */}
            <div className='absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'>
            <ul>
                <h1>PASTRY.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Patisseries</li>
                <li className='border-b'>Pains</li>
                <li className='border-b'>Sandwichs</li>
                <li className='border-b'>À propos</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    {/* my = margin on the y axes */}
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </ul>
            </div>
        </div>
    )
}

export default Navbar 
