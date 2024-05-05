import Image from "next/image";
import product from '../public/f38aea73495235_5c0bc56093ca3.webp';

function Hero() {
    return (
    <section>
        <div className="space-y-1">
            <h2 className="h-12 sm:h-16 md:h-20 z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
            Our Amazing
            </h2>
            <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-teal-300 to-teal-600 animate-fade-in-3">
            Product
            </h1>
        </div>
        <div className="py-12 animate-fade-in-3">
            <Image src={product} alt="Product Image"/>
        </div>
    </section>   
    );
  }

export default Hero;