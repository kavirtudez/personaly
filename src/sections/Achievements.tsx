import BetaMLSA from "@/assets/images/LevelBeta.png";
import DesignHub from "@/assets/images/designhub.png";
import SIH from "@/assets/images/SIH.png";
import Hacktober from "@/assets/images/hacktober.png";
import Bertelsmann from "@/assets/images/Bertelsmann.png";
import BPIDataWave from "@/assets/images/bpi.png";
import Harvard from "@/assets/images/harvard.png";
import Stanford from "@/assets/images/stanford.png";
import NCRC from "@/assets/images/NCRC.png";
import IBMTechXchange from "@/assets/images/ibm.png";
import PJDSC from "@/assets/images/pjdsc.png";
import ColdStart from "@/assets/images/coldstart.png";
import DeansList from "@/assets/images/deanslist.png";
import SikapTala from "@/assets/images/sikaptala.png";
import Codelympics from "@/assets/images/codelympics.png";
import LuntiangParangal from "@/assets/images/luntiang.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment, useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import Startup from "@/assets/images/startup.png";

export const Achievements = [
  {
  title: "Harvard CS50x: Computer Science",
  description: "Completed Harvard's foundational computer science course covering algorithms, data structures, and software engineering principles.",
  year: "2025",
  icon: Harvard,
},
{
  title: "Harvard CS50: Artificial Intelligence with Python",
  description: "Explored AI fundamentals including search, optimization, ML, and neural networks through hands-on Python projects.",
  year: "2025",
  icon: Harvard,
},
{
  title: "Stanford Data Science Workshop",
  description: "Trained under Dean Jennifer Widom's Instructional Odyssey From Stanford Engineering on core data science workflows, analytics, and ethical data-driven decision-making.",
  year: "2025",
  icon: Stanford,
},
  {
    title: "SIKAPTala 2025",
    description: "Champion in Python Quiz Bee, Top Finalist in Research, HackerRank, and Hackathon categories.",
    year: "2025",
    icon: SikapTala,
  },
  {
    title: "Codelympics 2024",
    description: "Champion at national coding competition hosted by DLSU-D and industry partners.",
    year: "2024",
    icon: Codelympics,
  },
  {
    title: "NCRC 2024",
    description: "National Collegiate Research Conference finalist for AI-powered civic transparency platform.",
    year: "2024",
    icon: NCRC,
  },
  {
    title: "IBM TechXchange 2024",
    description: "Top 100 Global Finalist for AI-based government transparency solution.",
    year: "2024",
    icon: IBMTechXchange,
  },
  {
    title: "Philippine Junior Data Science Challenge",
    description: "Top 10 Finalist for commuter-focused data science application tackling public transport issues.",
    year: "2024",
    icon: PJDSC,
  },
  {
    title: "Cold Start Hackathon",
    description: "Top 3 Winner for sustainable e-commerce platform supporting local farmers.",
    year: "2024",
    icon: ColdStart,
  },
  {
    title: "Dean's Lister",
    description: "Consistent First Honor's Dean's List awardee with a GPA of 3.85/4.0 in BS Computer Science – Intelligent Systems.",
    year: "Ongoing",
    icon: DeansList,
  },
  {
    title: "Luntiang Parangal 2025",
    description: "University distinction awarded for exemplary leadership, service, and consistent representation of DLSU-D in national and international competitions.",
    year: "2025",
    icon: LuntiangParangal,
  },
  {
    title: "StartUp QC 2025",
    description: "Top University Finalist at StartUP QC 2025 for delivering innovative civic tech solutions and presented the solution to key Quezon City government stakeholders",
    year: "2025",
    icon: Startup,
  }
];

export const AchievementsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="py-16 relative" id="achievements">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="What I have accomplished till now?"
          description="I've grown through meaningful work, combining academic excellence with national hackathons and real-world tech projects. Every experience has shaped how I build and think, and I'm excited to keep learning and creating what's next."
        />

        {/* Floating Hide All Button - Only visible when expanded */}
        {showAll && (
          <button
            onClick={toggleShowAll}
            className="fixed top-20 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
            style={{
              animation: 'fadeInFloat 0.5s ease-out forwards'
            }}
          >
            <EyeOff className="size-5" />
          </button>
        )}

        {/* Conditional Rendering: Carousel vs Full List */}
        {!showAll ? (
          // Carousel View (Default)
          <div className="transition-all duration-700 ease-in-out">
            <div
              className="mt-12 flex overflow-x-clip py-4 -my-4"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {Achievements.map((achievement) => (
                      <Card
                        key={achievement.title}
                        className="max-w-[23rem] md:max-w-md p-6 md:p-8 lg:max-w-lg hover:-rotate-3 transition duration-300"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 lg:size-20">
                            <Image
                              src={achievement.icon}
                              alt={achievement.title}
                              className="max-h-full"
                            />
                          </div>
                          <div>
                            <div className="font-semibold lg:text-2xl">
                              {achievement.title}
                            </div>
                            <div className="text-sm text-white/40 lg:text-lg">
                              {achievement.year}
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm text-justify md:text-base lg:text-lg">
                          {achievement.description}
                        </p>
                      </Card>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>

            {/* See All Button */}
            <div className="flex justify-center mt-12">
              <button
                onClick={toggleShowAll}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <Eye className="size-5" />
                <span>See All Achievements</span>
                <ChevronDown className="size-5" />
              </button>
            </div>
          </div>
        ) : (
          // Expanded List View
          <div className="mt-12 transition-all duration-700 ease-in-out animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
              {Achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="size-12 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image
                        src={achievement.icon}
                        alt={achievement.title}
                        className="max-h-full w-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-indigo-400 mb-3">
                        {achievement.year}
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Collapse Button */}
            <div className="flex justify-center mt-12">
              <button
                onClick={toggleShowAll}
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <ChevronUp className="size-5" />
                <span>Show Less</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInFloat {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};