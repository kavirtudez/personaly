'use client';

import React from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GithubIcon from '@/assets/icons/Github.svg';
import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg';
import { ArrowLeft, Glasses, PlayCircle, Trophy } from 'lucide-react';
import NeuNet from '@/assets/images/NeuNet.png';
import Brieflet from '@/assets/images/Brieflet.png';
import ArrowSense from '@/assets/images/ArrowSense.png'
import Dove from '@/assets/images/Dove.png';
import GobyerKnow from '@/assets/images/GobyerKnow.png';
import Komyutable from '@/assets/images/komyutable.png';
import Lively from '@/assets/images/Lively.png';
import Agrikado from '@/assets/images/Agrikado.png';
import Talk2dHandV1 from '@/assets/images/talk2dhandv1.png';
import AutomataSystem from '@/assets/images/Automat.png';
import ibm from "@/assets/images/ibm.png";
import bpi from "@/assets/images/bpi.png";
import NCRC from "@/assets/images/NCRC.png";
import deanslist from "@/assets/images/deanslist.png";
import codelympics from "@/assets/images/codelympics.png";
import bppi from "@/assets/images/bppi.png";
import dlsud from "@/assets/images/dlsud.png";
import ibbm from "@/assets/images/ibbm.png";
import SikapTala from "@/assets/images/sikaptala.png";
import dlsu from "@/assets/images/dlsu.png";
import upd from "@/assets/images/upd.png";
import unilever from "@/assets/images/unilever.png";
import datascience from "@/assets/images/datasci.png";
import qc from "@/assets/images/qc.png";
import startupqc from "@/assets/images/startup.png";
import coldstart from "@/assets/images/coldstart.png";
import oldlab from "@/assets/images/oldlab.png";
import devcon from "@/assets/images/devcon.png";
import china from "@/assets/images/china.png";
import china2 from "@/assets/images/china2.png";

const allProjects = [
  {
    company: "React, Node.js, Firebase, OpenAI API",
    year: "2024",
    title: "ShelfAware",
    results: [
      { title: "Built a GenAI-powered inventory management system for MSMEs" },
      { title: "Integrated AI assistant for personalized stock and sales insights" },
      { title: "Enabled perishable goods tracking and BPI product suggestions" }
    ],
    link: { url: "https://kvirtudez.framer.website/portfolio/bpi-datawave-2024", target: "_blank" },
    liveLink: "https://drive.google.com/file/d/108iyYVZFm4W9pams_wGfuPXYBvqZmS7a/view",
    image: NeuNet,
    featured: true,
    linkText: "Read",
    liveLinkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [bpi, bppi]
    }
  },
  {
    "company": "React, Node.js, PDF.js, Gemini API, DeepSeek via OpenRouter",
    "year": "2025",
    "title": "ESGenius",
    "results": [
      { "title": "Developed an AI-powered ESG report analyzer to detect greenwashing and streamline compliance" },
      { "title": "Integrated Gemini for issue classification, risk scoring, and multilingual insights" },
      { "title": "Built a multilingual chatbot for real-time ESG Q&A in both Chinese and English" },
      { "title": "Enabled automatic sorting of reports by severity and custom section organization for analysts" }
    ],
    "link": { "url": "https://github.com/kavirtudez/ASGenius", "target": "_blank" },
    "liveLink": "https://drive.google.com/file/d/1eNWfeRM2GADh3a-6_WLPWRb_gROq_z3W/view",
    "image": Brieflet,
    "featured": true,
    "liveLinkText": "Watch",
    "awards": {
      "text": "Awarded by",
      "images": [china, china2]
    }
  },
  {
    company: "Python, MediaPipe, TensorFlow, Google APIs",
    year: "2025",
    title: "Talk2dHand",
    results: [
      { title: "Developed a multilingual sign language LMS with 4 custom ML models" },
      { title: "Integrated real-time static, dynamic, and pose-based gesture recognition" },
      { title: "Used GenAI and Google APIs for voice-text-sign translation and real-time avatar feedback for sign-to-sign AI conversation" }
    ],
    link: { url: "https://github.com/kavirtudez/ai-converse-feature", target: "_blank" },
    liveLink: "https://www.canva.com/design/DAGjBy6XJdk/0J71xMfa8X--iw8HVDHKcA/view?utm_content=DAGjBy6XJdk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b42a994bc",
    image: ArrowSense,
    featured: true,
    liveLinkText: "Watch",
    awards: {
      text: "Recognized by",
      images: [dlsud, SikapTala, devcon]
    }
  },
  
  // Additional Projects
  {
    company: "React, Node.js, Firebase, OpenAI API",
    year: "2024",
    title: "GobyerKnow",
    results: [
      { title: "Built an AI-powered platform for understanding Philippine laws and bills" },
      { title: "Integrated a legal chatbot grounded in gov.ph datasets using GenAI" },
      { title: "Enabled users to create and support civic petitions linked to legislation" },
    ],
    link: { url: "https://kvirtudez.framer.website/portfolio/gobyerknow-ncrc-2024", target: "_blank" },
    liveLink: "https://drive.google.com/file/d/1b5ANx_he2Sl6ovMZgQRT-GelmnYkArJC/view",
    image: GobyerKnow,
    featured: true,
    linkText: "Read",
    liveLinkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [NCRC, dlsu, upd, dlsud, ibm, ibbm]
    
    }
  },
  {
    company: "Flask, TensorFlow, MediaPipe, Google Speech API",
    year: "2024",
    title: "Talk2dHand V1",
    results: [
      { title: "Developed a web-based ASL learning system with real-time gesture recognition and NLP" },
      { title: "Trained a CNN on ASL alphabet dataset and integrated MediaPipe for live hand landmark detection" },
      { title: "Implemented speech-to-text, text normalization, and semantic mapping for interactive feedback" },
      { title: "Built a multimodal NLP pipeline combining voice commands, grammar parsing, and image responses" },
    ],
    link: { url: "https://github.com/neinzaut/talk2dhand-host", target: "_blank" },
    liveLink: "https://www.canva.com/design/DAGZP3sd93w/yUWMa5pC-QSejqCTNUf_nQ/view?utm_content=DAGZP3sd93w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1251d62245",
    image: Talk2dHandV1,
    featured: true,
    liveLinkText: "Watch",
    awards: {
      text: "Recognized by",
      images: [dlsud]
    }
  },
  {
    company: "Flutter, Firebase, SafeTravelPH API, DOTr Datasets",
    year: "2024",
    title: "Komyutable",
    results: [
      { title: "Built a commuter app offering live bus tracking and smart route suggestions" },
      { title: "Integrated SafeTravelPH and DOTr mobility data for real-time ETA and transit visibility" },
      { title: "Provided first- and last-mile guidance and LGU-focused dashboards for planning" },
      { title: "Reduced commuter wait time by ~15–20 mins in simulation testing" },
    ],
    link: { url: "https://kvirtudez.framer.website/portfolio/komyutable", target: "_blank" },
    liveLink: "https://www.canva.com/design/DAGUcfIn0wI/z9mb26MP-SlmvwkuUEo9rg/view?utm_content=DAGUcfIn0wI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2ebd1d7da6",
    image: Komyutable,
    featured: true,
    linkText: "Read",
    liveLinkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [datascience, upd]
    }
  },
  {
    company: "React Native, Node.js, Firebase, Google Cloud Platform",
    year: "2025",
    title: "Live+Ly",
    results: [
      { title: "Engineered a real-time nutrition and fitness tracking app optimized for Filipino users" },
      { title: "Integrated a localized food recognition and meal logging system using Firebase Firestore" },
      { title: "Deployed scalable backend services on GCP for user analytics, personalization, and API routing" },
      { title: "Enabled restaurant meal syncing and nutritionist consultation via modular Node.js endpoints" },
      { title: "Implemented a freemium model with authentication, in-app purchases, and dynamic ad serving" }
    ],
    link: { url: "https://www.canva.com/design/DAGmIq6nNmU/rS5EbK70JgrsZBdyW8LgjQ/view?utm_content=DAGmIq6nNmU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdbb3e2224c", target: "_blank" },
    liveLink: "https://www.canva.com/design/DAGqzzdrzfc/jIfIM5wqd-OT8WJ5JUAzHg/view?utm_content=DAGqzzdrzfc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h73241c09bf",
    image: Lively,
    featured: true,
    linkText: "Read",
    liveLinkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [qc, startupqc]
    }
  },
  {
    company: "React, Firebase, Node.js, Google Maps API",
    year: "2024",
    title: "Agrikado",
    results: [
      { title: "Developed an e-commerce and logistics platform connecting local farmers to consumers" },
      { title: "Implemented product listings, order tracking, and vendor dashboards via Firebase Realtime DB" },
      { title: "Integrated Google Maps API for delivery routing and regional availability mapping" },
      { title: "Added tree-planting incentives per purchase for sustainability (inspired by Ecosia)" },
    ],
    link: { url: "https://www.canva.com/design/DAGUHP_UZRc/FSb8sakLvx5YUoHoBB8HoQ/view?utm_content=DAGUHP_UZRc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6f38b6a3b6#19", target: "_blank" },
    image: Agrikado,
    featured: true,
    linkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [coldstart, oldlab]
    }
  },
  {
    company: "Flask, TensorFlow, Keras, Gemini API",
    year: "2025",
    title: "AI-Powered Dove Glow",
    results: [
      { title: "Developed a web app that personalizes Dove product recommendations using AI" },
      { title: "Implemented image-based hair & skin type classification models (CNNs)" },
      { title: "Integrated Gemini-powered chatbot 'Tita Glow' for care advice and user engagement" }
    ],
    link: { url: "https://github.com/kavirtudez/dove-quiz", target: "_blank" },
    liveLink: "https://drive.google.com/file/d/1jr8YEaT7Km3C2ySwNCnSmFVVLjE6jrqq/view",
    image: Dove, 
    featured: true,
    liveLinkText: "Watch",
    awards: {
      text: "Awarded by",
      images: [unilever]
    }
  },
  {
    company: "Flask, Graphviz, NetworkX, Python AutomataLib",
    year: "2024",
    title: "Automata System",
    results: [
      { title: "Built a web-based simulator for testing strings against regex using Deterministic Finite Automata (DFA)" },
      { title: "Auto-generated Context-Free Grammar (CFG) and Pushdown Automaton (PDA) representations from user input" },
      { title: "Visualized state transitions and grammar structures using Graphviz and NetworkX" },
      { title: "Designed an intuitive UI with Flask for seamless graph interaction and regex experimentation" }
    ],
    link: { url: "https://github.com/kazzandra/automata-system", target: "_blank" },
    liveLink: "https://drive.google.com/file/d/1xsaC5cDz5xZDgsqOyhG05VY2iLs7J8eH/view?fbclid=IwY2xjawKg1XlleHRuA2FlbQIxMQABHnpmV816WFM6p7Ib_WapTpkA0vIGzZJGEXLme5nVLfmOzQFWwmSlYrj5uHn8_aem_6cXpSnGNmoCz9LfEqthygQ",
    image: AutomataSystem,
    featured: true,
    liveLinkText: "Watch",
    awards: {
      text: "Recognized by",
      images: [dlsud]
    }
  }
];

const ProjectsPage = () => {
  const featuredProjects = allProjects.filter(project => project.featured);

  return (
    <div className="bg-gray-950 text-white antialiased font-serif min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                <ArrowLeft className="size-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </a>
            </motion.div>
            
            <SectionHeader
              eyebrow="Complete Portfolio"
              title="All My Projects"
              description="Explore my complete collection of projects, from machine learning models to web applications. Each project represents a step in my journey as a developer."
            />
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text text-center">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              My most impactful and technically challenging projects
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-20">
            {featuredProjects.map((project, projectIndex) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + projectIndex * 0.1 }}
              >
                <Card
                  className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-indigo-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4" />
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-sm md:text-base text-white/50 items-center transition-all duration-300 ease-in-out hover:translate-x-1"
                          >
                            <CheckCircleIcon className="size-5 md:size-6 text-indigo-400 flex-shrink-0" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                        <a href={project.link.url} className="inline-block w-full sm:w-auto">
                          <button className="bg-white text-gray-950 h-12 w-full px-4 sm:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <span>{project.linkText || 'Github'}</span>
                            {project.linkText === 'Read' ? <Glasses className="size-5" /> : project.linkText === 'Watch' ? <PlayCircle className="size-5" /> : <GithubIcon className="size-5" />}
                          </button>
                        </a>
                        {project.liveLink && (
                          <a href={project.liveLink} className="inline-block w-full sm:w-auto">
                            <button className="bg-indigo-500 text-white h-12 w-full px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <span>{project.liveLinkText || 'Website'}</span>
                              {project.liveLinkText === 'Watch' ? <PlayCircle className="size-5" /> : <ArrowUpIcon className="size-5" />}
                            </button>
                          </a>
                        )}
                      </div>
                      
                      {/* Award Badge Section */}
                      {project.awards && (
                        <div className="flex items-center gap-4 mt-8">
                          <div className="bg-amber-100/10 border border-amber-300/30 text-amber-300 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                            <Trophy className="size-5 text-amber-400" />
                            <span className="text-base font-medium">{project.awards.text}</span>
                          </div>
                          <div className="flex -space-x-3">
                            {project.awards.images && project.awards.images.length > 0 ? (
                              project.awards.images.map((awardImage, index) => (
                                <div key={index} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 overflow-hidden">
                                  <Image 
                                    src={awardImage} 
                                    alt={`${project.title} award ${index + 1}`}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-xs text-gray-400">+</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative overflow rounded-lg mt-8 lg:mt-0 lg:pl-16">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage; 