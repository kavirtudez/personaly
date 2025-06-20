"use client";
import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { TechToolbox } from "@/components/TechToolBox";
import { motion } from "framer-motion";
import Image from "next/image";
import dlsud from "@/assets/images/dlsud.png";
import jru from "@/assets/images/jru.png";
import { FaMusic, FaBook, FaDumbbell, FaHiking, FaCampground, FaSeedling, FaChurch, FaSwimmer, FaHandsHelping, FaChalkboardTeacher, FaChess } from 'react-icons/fa';
import { GiTennisRacket, GiNinjaMask } from 'react-icons/gi';
import { MdMovie, MdSchool } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';

export const hobbies = [
  { title: "Piano", icon: FaMusic },
  { title: "Studying", icon: MdSchool },
  { title: "Reading", icon: FaBook },
  { title: "Gym", icon: FaDumbbell },
  { title: "Taekwondo", icon: GiNinjaMask },
  { title: "Films", icon: MdMovie },
  { title: "Hiking", icon: FaHiking },
  { title: "Camping", icon: FaCampground },
  { title: "Gardening", icon: FaSeedling },
  { title: "Journaling", icon: BsPencilSquare },
  { title: "Church", icon: FaChurch },
  { title: "Tennis", icon: GiTennisRacket },
  { title: "Swimming", icon: FaSwimmer },
  { title: "Volunteering", icon: FaHandsHelping },
  { title: "Tutoring", icon: FaChalkboardTeacher },
  { title: "Chess", icon: FaChess },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who am I?"
          description="I'm a builder at heart — working across ML, data, and full stack to turn ideas into thoughtful, working systems."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 overflow-hidden flex flex-col">
              <CardHeader
                title="Education"
                description="My current education and certifications."
              />
              <div className="flex-1 overflow-y-auto px-12 hide-scrollbar">
                <ul className="list-disc space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                      <Image src={dlsud} alt="DLSUD Logo" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <strong>Bachelor of Science in Computer Science</strong> - <a href="https://www.dlsud.edu.ph/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">De La Salle University - Dasmariñas</a>
                      <br />
                      <span className="text-gray-500">2022 - 2026</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                      <Image src={jru} alt="JRU Logo" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <strong>Senior High School - STEM</strong> - <a href="https://jru.edu/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">José Rizal University</a>
                      <br />
                      <span className="text-gray-500">Completed in 2022</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Toolbox"
                description="Here are some of the technologies I have worked with."
              />
              <TechToolbox />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond The Code"
                description="Explore my interests and hobbies."
              />
              <div className="flex-1 p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {hobbies.map((hobby) => {
                    const Icon = hobby.icon;
                    return (
                      <motion.div
                        key={hobby.title}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/80 to-sky-500/80 backdrop-blur-sm rounded-full"
                        whileHover={{ scale: 1.05,
                          boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="text-white size-5" />
                        <span className="font-medium text-white text-sm">
                          {hobby.title}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />    
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Smile Memoji" className="size-20"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

