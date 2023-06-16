// rafce permet une auto-completion de ton import et export avec div etc.
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-20 px-4">
            <h1>PASTRY.</h1>
            <ul className='hidden md:flex'>
                {/* md for the breakpoints in mobile */}
                <li>Home</li>
                <li>Patisseries</li>
                <li>Pains</li>
                <li>Sandwichs</li>
                <li>Commander</li>
            </ul>
            <div className='hidden md:flex'>
                <BsPerson size={20}/>
                <BiSearch size={20}/>
            </div>
                    {/* Hamburger */}
            <div className='md:hidden'>
                <HiOutlineMenuAlt4 size={20}/>
            </div>

                    {/* Mobile menu dropdown */}
            <div className='absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'>
            <ul>
                <h1>PASTRY.</h1>
                <li>Home</li>
                <li>Patisseries</li>
                <li>Pains</li>
                <li>Sandwichs</li>
                <li>Commander</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    {/* my = margin on the y axes */}
                    <button>Account</button>
                </div>
                <div>
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
