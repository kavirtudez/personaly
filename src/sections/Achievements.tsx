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
import { Fragment } from "react";
import Startup from "@/assets/images/startup.png";

export const Achievements = [
  {
  title: "Harvard CS50x: Computer Science",
  description: "Completed Harvard’s foundational computer science course covering algorithms, data structures, and software engineering principles.",
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
    title: "Dean’s Lister",
    description: "Consistent First Honor’s Dean’s List awardee with a GPA of 3.85/4.0 in BS Computer Science – Intelligent Systems.",
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
  return (
    <div className="py-16">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="What I have accomplished till now?"
          description="I’ve grown through meaningful work, combining academic excellence with national hackathons and real-world tech projects. Every experience has shaped how I build and think, and I’m excited to keep learning and creating what’s next."
        />

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
      </div>
    </div>
  );
};
