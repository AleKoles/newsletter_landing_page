import Image from "next/image";
import logo from '../public/favicon.svg';
import Link from "next/link";

function Navigation() {
    return (
    <nav className=" flex items-center justify-between font-bold text-teal-300 text-sm sm:text-base tracking-tight sm:tracking-normal py-4 px-4 md:px-12 fixed bg-[#03040B]/50 backdrop-blur top-0 left-0 right-0 z-50">
            <Image src={logo} alt="Product Image" className="w-auto h-10 sm:h-12"/>
            <ul className="flex space-x-4">
                <Link href="#features" className="hover:text-teal-600 duration-300 ease-in-out transition cursor-pointer active:text-teal-500">Features</Link>
                <Link href="#specifications" className="hover:text-teal-600 duration-300 ease-in-out transition cursor-pointer active:text-teal-500">Specifications</Link>
                <Link scroll={false} href="#subscribe" className="hover:text-teal-600 duration-300 ease-in-out transition cursor-pointer active:text-teal-500">Subscribe</Link>
            </ul>
    </nav>   
    );
  }

export default Navigation;