'use client';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import GrainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { Orbit } from "@/components/Orbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import YourFaceImage from "@/assets/images/profile.png";
import { FileText, Mail } from "lucide-react";

export const ProfileSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-50 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" 
          style={{ backgroundImage: `url(${GrainImage.src})` }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <Orbit size={800} rotation={-72} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="15s">
          <StarIcon className="size-20 text-sky-400"/>
        </Orbit>
        <Orbit size={550} rotation={20} shouldOrbit orbitDuration="37s" shouldSpin spinDuration="20s">
          <StarIcon className="size-12 text-sky-400"/>
        </Orbit>
        <Orbit size={590} rotation={100} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="18s">
          <StarIcon className="size-8 text-sky-400" />
        </Orbit>
        <Orbit size={420} rotation={-15} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-8 text-sky-400/20"/>
        </Orbit>
        <Orbit size={440} rotation={178} shouldOrbit orbitDuration="31s" shouldSpin spinDuration="12s">
          <SparkleIcon className="size-10 text-sky-400/20"/>
        </Orbit>
        <Orbit size={710} rotation={145} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="25s">
          <SparkleIcon className="size-14 text-sky-400/20"/>
        </Orbit>
        <Orbit size={720} rotation={90} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="30s">
          <div className="size-3 rounded-full bg-pink-300/20"/>
        </Orbit>
        <Orbit size={520} rotation={-40} shouldOrbit orbitDuration="29s" shouldSpin spinDuration="14s">
          <div className="size-2 rounded-full bg-pink-300/20"/>
        </Orbit>
        <Orbit size={650} rotation={-5} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="22s">
          <div className="size-2 rounded-full bg-pink-300/20"/>
        </Orbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative size-[200px] rounded-full overflow-hidden border-4 border-white/20">
            <Image 
              src={YourFaceImage}
              fill
              sizes="100vw"
              className="object-cover"
              alt="Kazz Virtudez"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for New Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-semibold">
            Kazz Virtudez
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          I work at the intersection of machine learning, data engineering, and full stack development — building systems that are as thoughtful as they are technical. With a background shaped by academic excellence and national hackathons, I’m driven by curiosity, clarity, and the impact of well-crafted solutions          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4"/>
          </button>
          <a 
            href="https://drive.google.com/file/d/10L7wHtgEC6JdDry6ynHUkiAO97DiD1dg/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 bg-indigo-600 text-white h-12 px-6 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700"
          >
            <span className="font-semibold">Resume</span>
            <FileText className="size-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/kazzvirtudez/" 
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="font-semibold">Let's Connect</span>
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

