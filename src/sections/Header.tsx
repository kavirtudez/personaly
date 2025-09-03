'use client';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import DownloadIcon from "@/assets/icons/download.svg";
import { Menu, X } from 'lucide-react';
import { smoothScroll } from "@/components/smoothScroll";
import ScrollProgress from '@/components/ScrollProgress';
import Logo from '@/assets/images/iconn.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface NavClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleNavClick = (e: NavClickEvent) => {
    smoothScroll(e);
    setIsMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled ? "bg-gray-950/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/" ? "text-indigo-400" : "text-white hover:text-indigo-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                pathname === "/projects" ? "text-indigo-400" : "text-white hover:text-indigo-400"
              }`}
            >
              Projects
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${isScrolled ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-xl border border-white/15 transition-colors duration-300 ease-in-out hover:bg-white/20`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            md:hidden fixed inset-0 bg-blue/95 backdrop-blur-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <nav className={`
            flex flex-col items-center gap-6 pt-20
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'}
          `}>
            {['Home', 'Projects'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`
                  text-l font-semibold w-64 text-center py-3 px-6
                  rounded-lg bg-white/10 backdrop-blur-md
                  transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  hover:bg-white/20
                `}
                style={{
                  transitionDelay: `${(['Home', 'Projects'].indexOf(item) * 50)}ms`
                }}
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;

