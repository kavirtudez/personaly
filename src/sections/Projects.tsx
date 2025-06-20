import NeuNet from "@/assets/images/NeuNet.png";
import Brieflet from "@/assets/images/Brieflet.png";
import ArrowSense from "@/assets/images/ArrowSense.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/Github.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Glasses, PlayCircle, Trophy } from "lucide-react";
import ibm from "@/assets/images/ibm.png";
import bpi from "@/assets/images/bpi.png";
import NCRC from "@/assets/images/NCRC.png";
import bppi from "@/assets/images/bppi.png";
import { Chilanka } from "next/font/google";
import dlsud from "@/assets/images/dlsud.png";
import SikapTala from "@/assets/images/sikaptala.png";
import devcon from "@/assets/images/devcon.png";
import china from "@/assets/images/china.png";
import china2 from "@/assets/images/china2.png";

const portfolioProjects = [
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
  }
  ,
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
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="What Have I Made?"
          title="Featured Projects"
          description="Each project here reflects how I learn by building. They've helped me grow not just as a developer, but as a problem solver with a deeper understanding of people, tech, and impact."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
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
                        {project.linkText === 'Read' ? <Glasses className="size-5" /> : <GithubIcon className="size-5" />}
                      </button>
                    </a>
                    <a href={project.liveLink} className="inline-block w-full sm:w-auto">
                      <button className="bg-indigo-500 text-white h-12 w-full px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>{project.liveLinkText || 'Website'}</span>
                        {project.liveLinkText === 'Watch' ? <PlayCircle className="size-5" /> : <ArrowUpIcon className="size-5" />}
                      </button>
                    </a>
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
          ))}
        </div>
        
        {/* More Projects Button */}
        <div className="flex justify-center mt-20">
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 border border-white/15 px-8 h-14 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="font-semibold text-lg">More Projects</span>
            <ArrowUpIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

