'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";

type Star = {
  id: string;
  title: string;
  year: string;
  order: number;
  x: number;
  y: number;
  description: string;
  // Physics properties
  velocity: { x: number, y: number };
};

// Initial star data with positions and descriptions
// Adjusted to have chronologically related stars closer to each other
const initialStars: Omit<Star, 'velocity'>[] = [
  {
    id: "foundation",
    title: "Consistent Student",
    year: "2022",
    order: 1,
    x: 20,
    y: 10,
    description: "I started as a student who took pride in being consistently top of the class. I thought academic excellence was enough. I focused on learning deeply, always trying to be precise and grounded. But life had other ways of showing me how much more I was capable of.",
  },
  {
    id: "codelympics",
    title: "Codelympics 2024",
    year: "Early 2024",
    order: 2,
    x: 30,
    y: 15,
    description: "I joined Codelympics 2024 because I needed grade incentives for a subject. I honestly didn't expect much. But I ended up becoming the Web Dev Champion, which taught me that sometimes, people have to believe in you before you start believing in yourself. That moment changed everything.",
  },
  {
    id: "symph",
    title: "Symph Internship",
    year: "Mid 2024",
    order: 3,
    x: 35,
    y: 25,
    description: "At Symph, I rotated across QA testing, wireframe design, and usability research. It was my first real-world look into client work. I learned how tech isn't just code, but an experience. This internship planted the seed for how I work today: thoughtful, curious, and user-focused.",
  },
  {
    id: "kadakareer",
    title: "KadaKareer Apprentice",
    year: "Mid–Late 2024",
    order: 4,
    x: 30,
    y: 35,
    description: "At KadaKareer, I joined multiple UX/web design challenges and won Kollab's Choice Award for redesigning a six-page site. I worked on actual health and advocacy platforms, and it taught me that good design is clarity, empathy, and iteration.",
  },
  {
    id: "mobalytics",
    title: "Mobalytics Intern",
    year: "Late 2024",
    order: 5,
    x: 40,
    y: 30,
    description: "I joined Mobalytics as a Market Research Analyst Intern and scraped 5,000+ gameplay data points. I pitched a proposal to the CEO on expanding user data coverage. It's where I learned that data storytelling is just as important as the models behind it.",
  },
  {
    id: "ibm",
    title: "IBM Watsonx Hackathon",
    year: "Late 2024",
    order: 6,
    x: 50,
    y: 20,
    description: "We built Gobyerknow, an AI transparency platform, and got selected as a Top 100 Global Team in the IBM TechXchange Hackathon. I pitched it at the National Communication Research Conference and was invited to present at IBM TechXchange Las Vegas. This was my first global-stage experience.",
  },
  {
    id: "bpi-datawave",
    title: "BPI DataWave 2024",
    year: "Late 2024",
    order: 7,
    x: 60,
    y: 15,
    description: "I led ShelfAware, a GenAI inventory solution for MSMEs, which placed Top 5 in the GenAI track. It was a deep dive into product thinking, sustainability, and financial inclusion. It's one of the most mission-driven projects I've worked on.",
  },
  {
    id: "national-challenges",
    title: "PJDSC & Cold Start",
    year: "Late 2024",
    order: 8,
    x: 55,
    y: 30,
    description: "At the Philippine Junior Data Science Challenge, I led Komyutable, a commuter app that ranked Top 10. At Cold Start Hackathon, we built Agrikado, a farmers' marketplace app, in just 7 hours—and placed Top 3. These taught me how to build fast and think with users in mind.",
  },
  {
    id: "sikaptala",
    title: "SikapTala 2025",
    year: "Early 2025",
    order: 9,
    x: 65,
    y: 25,
    description: "I joined SikapTala 2025 and placed as a Top Finalist in Research, Hackathon, and HackerRank, and also became the Python Quiz Bee Champion. This competition brought together every skill I had sharpened so far—code, presentation, and clarity.",
  },
  {
    id: "startup-qc",
    title: "StartUP QC 2025",
    year: "Mid 2025",
    order: 10,
    x: 70,
    y: 35,
    description: "We built Lively, a mobile civic tech app for nutrition and wellness aligned with Quezon City policies. It earned a Bronze Award and Top University Finalist. I pitched it to LGU leaders to help food businesses offer clearer health information and support meal preppers.",
  },
  {
    id: "talk2dhand",
    title: "Talk2dHand Thesis",
    year: "Mid–Late 2025",
    order: 11,
    x: 75,
    y: 20,
    description: "I led the full development of Talk2dHand, a centralized LMS for FSL/ASL that now offers real-time Sign-to-Sign AI conversations. What began as a simple alphabet recognizer evolved into a full-featured accessibility tool. It became a Top Finalist in both Hackathon and Research tracks at SIKAPTala 2025.",
  },
  {
    id: "bpi-intern",
    title: "BPI Data Science & AI Intern",
    year: "Present",
    order: 12,
    x: 80,
    y: 30,
    description: "Now I'm at BPI working on deploying LLM-powered solutions in banking. I use prompt engineering, fine-tuning, and RAG to improve customer intelligence, and run predictive pipelines and A/B tests for real business impact. This is where everything I've learned converges.",
  },
];

// Function to determine card position based on star coordinates
const getCardPosition = (x: number, y: number) => {
  // Rules as specified:
  if (x >= 60 && y >= 60) return "left"; // x: 60+ and y: 60+ -> left
  if (x >= 60) return "left"; // x: 60+ -> left
  if (y >= 60) return "top"; // y: 60+ -> top
  if (x <= 30 && y <= 30) return "right"; // x: 30- and y: 30- -> right
  if (y <= 30) return "bottom"; // y: 30- -> bottom
  if (x <= 30) return "right"; // x: 30- -> right
  
  // Default fallback
  return "right";
};

const StarCard = ({ star }: { star: Star }) => {
  const position = getCardPosition(star.x, star.y);
  
  // Set style based on position
  let positionStyle = {};
  switch (position) {
    case "left":
      positionStyle = { 
        left: `calc(${star.x}% - 300px)`, 
        top: `${star.y}%`, 
        transform: 'translate(0, -50%)' 
      };
      break;
    case "right":
      positionStyle = { 
        left: `calc(${star.x}% + 30px)`, 
        top: `${star.y}%`, 
        transform: 'translate(0, -50%)' 
      };
      break;
    case "top":
      positionStyle = { 
        left: `${star.x}%`, 
        top: `calc(${star.y}% - 170px)`, 
        transform: 'translate(-50%, 0)' 
      };
      break;
    case "bottom":
      positionStyle = { 
        left: `${star.x}%`, 
        top: `calc(${star.y}% + 30px)`, 
        transform: 'translate(-50%, 0)' 
      };
      break;
  }

  return (
    <motion.div
      layoutId={`star-card-${star.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute z-50 w-72 p-5 bg-gray-800/90 backdrop-blur-md border border-yellow-400/30 rounded-lg shadow-xl shadow-yellow-500/10"
      style={positionStyle}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-white text-lg">{star.title}</h4>
          <p className="text-sm text-yellow-300 font-mono">{star.year}</p>
        </div>
        <Sparkles className="text-yellow-400 size-5 flex-shrink-0" />
      </div>
      <p className="mt-3 text-sm text-gray-300 leading-relaxed">{star.description}</p>
    </motion.div>
  );
};

// Create tiny stars for the background
const BackgroundStars = () => {
  const [bgStars, setBgStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5
      });
    }
    setBgStars(stars);
  }, []);

  return (
    <>
      {bgStars.map((star, i) => (
        <motion.div
          key={`bg-star-${i}`}
          className="absolute bg-yellow-100 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// Add shooting stars animation
const ShootingStars = () => {
  // Generate static shooting star data on component mount
  const [shootingStars] = useState(() => 
    [...Array(12)].map(() => ({
      top: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 3 + Math.random() * 6
    }))
  );

  return (
    <>
      {shootingStars.map((star, i) => (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute w-1 h-1 rounded-full bg-yellow-100/60 pointer-events-none"
          style={{
            top: `${star.top}%`,
            left: "-5px",
            boxShadow: "0 0 2px 1px rgba(255, 255, 255, 0.3)",
            zIndex: 5 // Lower z-index to ensure it stays behind interactive elements
          }}
          animate={{
            x: ["0vw", "100vw"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: Math.random() * 10
          }}
        />
      ))}
    </>
  );
};

// Custom rocket cursor
const RocketCursor = ({ position }: { position: { x: number; y: number } }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%) rotate(-45deg)"
      }}
    >
      <Rocket className="text-white/80 size-6 fill-yellow-500" />
    </motion.div>
  );
};

// String-like connections between stars
const ChronologicalConnections = ({ stars }: { stars: Star[] }) => {
  // Sort stars by order to ensure chronological connections
  const sortedStars = [...stars].sort((a, b) => a.order - b.order);
  
  return (
    <>
      {sortedStars.slice(0, -1).map((star, index) => {
        const nextStar = sortedStars[index + 1];
        if (!nextStar) return null;
        
        return (
          <svg 
            key={`connection-${star.id}-${nextStar.id}`}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-5"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            <defs>
              <filter id={`glow-${star.id}-${nextStar.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Dotted line with glow effect */}
            <line 
              x1={`${star.x}%`} 
              y1={`${star.y}%`} 
              x2={`${nextStar.x}%`} 
              y2={`${nextStar.y}%`}
              stroke="rgba(251, 191, 36, 0.4)"
              strokeWidth="0.5"
              strokeDasharray="2,3"
              filter={`url(#glow-${star.id}-${nextStar.id})`}
            />
          </svg>
        );
      })}
    </>
  );
};

const StarShape = ({ isActive, size = 8 }: { isActive: boolean, size?: number }) => {
  return (
    <motion.div
      className={`relative ${isActive ? 'z-20' : 'z-10'}`}
      initial={{ scale: 0 }}
      animate={{ 
        scale: isActive ? 1.5 : 1,
        rotate: isActive ? [0, 15, 0, -15, 0] : 360
      }}
      transition={{ 
        scale: { duration: 0.3 },
        rotate: isActive 
          ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } 
          : { duration: 30, repeat: Infinity, ease: "linear" }
      }}
    >
      <svg 
        width={size * 4} 
        height={size * 4} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        style={{ filter: isActive ? 'drop-shadow(0 0 8px rgba(234,179,8,0.9))' : 'drop-shadow(0 0 5px rgba(234,179,8,0.5))' }}
      >
        <motion.path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill={isActive ? "#FBBF24" : "#FBBF24"}
          animate={{
            fill: isActive ? ["#FBBF24", "#FCD34D", "#FBBF24"] : ["#FBBF24", "#F59E0B", "#FBBF24"]
          }}
          transition={{
            duration: isActive ? 1 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
      {isActive && (
        <motion.div 
          className="absolute inset-0 rounded-full bg-yellow-400/20"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export const StarMap = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeStar, setActiveStar] = useState<Star | null>(null);
  const [visibleStars, setVisibleStars] = useState<string[]>([]);
  const [showLabels, setShowLabels] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInsideContainer, setIsInsideContainer] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Initialize stars with random velocities but maintain chronological proximity
  useEffect(() => {
    const starsWithVelocity = initialStars.map(star => ({
      ...star,
      velocity: {
        x: (Math.random() - 0.5) * 0.05, // Much slower velocity
        y: (Math.random() - 0.5) * 0.05
      }
    }));
    setStars(starsWithVelocity);
  }, []);
  
  // Handle mouse movement for custom cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Reveal stars one by one with a delay
  useEffect(() => {
    // Show all stars immediately
    setVisibleStars(stars.map(star => star.id));
    
    // Show labels after a short delay
    setTimeout(() => setShowLabels(true), 300);
  }, [stars]);

  // Physics-based animation loop
  useEffect(() => {
    if (stars.length === 0) return;

    const updateStarPositions = () => {
      setStars(prevStars => {
        // First calculate repulsion forces between stars
        const repulsionForces = prevStars.map(() => ({ x: 0, y: 0 }));
        
        // Calculate repulsion between each pair of stars
        for (let i = 0; i < prevStars.length; i++) {
          for (let j = i + 1; j < prevStars.length; j++) {
            const star1 = prevStars[i];
            const star2 = prevStars[j];
            
            // Calculate distance between stars
            const dx = star2.x - star1.x;
            const dy = star2.y - star1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Apply repulsion force if stars are too close
            // Minimum desired distance between stars (in percentage points)
            const minDistance = 15; 
            
            if (distance < minDistance) {
              // Force is stronger when stars are closer
              const force = 0.02 * (minDistance - distance) / minDistance;
              
              // Calculate force components
              const fx = force * dx / distance;
              const fy = force * dy / distance;
              
              // Apply forces in opposite directions
              repulsionForces[i].x -= fx;
              repulsionForces[i].y -= fy;
              repulsionForces[j].x += fx;
              repulsionForces[j].y += fy;
            }
          }
        }
        
        // Add attraction forces between chronologically adjacent stars
        const sortedStarIndices = prevStars
          .map((star, index) => ({ star, index }))
          .sort((a, b) => a.star.order - b.star.order);
        
        for (let i = 0; i < sortedStarIndices.length - 1; i++) {
          const currentIndex = sortedStarIndices[i].index;
          const nextIndex = sortedStarIndices[i + 1].index;
          const currentStar = prevStars[currentIndex];
          const nextStar = prevStars[nextIndex];
          
          // Calculate distance between chronologically adjacent stars
          const dx = nextStar.x - currentStar.x;
          const dy = nextStar.y - currentStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply attraction force if stars are too far apart
          const optimalDistance = 20; // Optimal distance for connected stars
          
          if (distance > optimalDistance) {
            // Force is stronger when stars are further apart
            const force = 0.01 * (distance - optimalDistance) / optimalDistance;
            
            // Calculate force components
            const fx = force * dx / distance;
            const fy = force * dy / distance;
            
            // Apply forces to bring stars closer
            repulsionForces[currentIndex].x += fx;
            repulsionForces[currentIndex].y += fy;
            repulsionForces[nextIndex].x -= fx;
            repulsionForces[nextIndex].y -= fy;
          }
        }
        
        // Apply movement and forces to each star
        return prevStars.map((star, index) => {
          // Apply repulsion and attraction forces
          let newVelocityX = star.velocity.x + repulsionForces[index].x;
          let newVelocityY = star.velocity.y + repulsionForces[index].y;
          
          // Dampen velocity for stability
          newVelocityX *= 0.98;
          newVelocityY *= 0.98;
          
          // Limit maximum velocity
          const maxVelocity = 0.1;
          if (Math.abs(newVelocityX) > maxVelocity) {
            newVelocityX = Math.sign(newVelocityX) * maxVelocity;
          }
          if (Math.abs(newVelocityY) > maxVelocity) {
            newVelocityY = Math.sign(newVelocityY) * maxVelocity;
          }
          
          let newX = star.x + newVelocityX;
          let newY = star.y + newVelocityY;
          
          // Boundary collision detection and response
          if (newX <= 5 || newX >= 95) {
            newVelocityX = -newVelocityX * 0.8; // Reverse direction with some damping
            newX = newX <= 5 ? 5 : 95; // Keep within bounds
          }
          
          if (newY <= 5 || newY >= 49) { // Keep y below 50 as requested
            newVelocityY = -newVelocityY * 0.8; // Reverse direction with some damping
            newY = newY <= 5 ? 5 : 49; // Keep within bounds
          }
          
          return {
            ...star,
            x: newX,
            y: newY,
            velocity: {
              x: newVelocityX,
              y: newVelocityY
            }
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(updateStarPositions);
    };
    
    animationRef.current = requestAnimationFrame(updateStarPositions);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars.length]);

  return (
    <section className="w-full px-4 py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text">Star Map of Kazz</h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          A constellation of my journey, from personal milestones to professional achievements.
          Each star represents a key moment that shaped who I am today.
        </p>
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] bg-[#050A14] rounded-xl border border-yellow-900/10 overflow-hidden cursor-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.03) 0%, transparent 70%), url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(251 191 36 / 0.03)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
            backgroundBlendMode: 'screen',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsInsideContainer(true)}
          onMouseLeave={() => {
            setIsInsideContainer(false);
            setActiveStar(null);
          }}
        >
          <BackgroundStars />
          <ShootingStars />
          {isInsideContainer && <RocketCursor position={cursorPos} />}
          
          {/* Chronological connections between stars */}
          <ChronologicalConnections stars={stars} />
          
          <AnimatePresence>
            {activeStar && <StarCard star={activeStar} />}
          </AnimatePresence>

          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute cursor-none"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: 'translate(-50%, -50%)',
                opacity: visibleStars.includes(star.id) ? 1 : 0,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: visibleStars.includes(star.id) ? 1 : 0,
              }}
              transition={{ 
                opacity: { duration: 0.5 }
              }}
            >
              {/* Square hover area for better detection */}
              <div 
                className="absolute z-20 cursor-none" 
                style={{ 
                  left: -40,
                  top: -40,
                  width: 80,
                  height: 80,
                }}
                onClick={() => setActiveStar(star === activeStar ? null : star)}
                onMouseEnter={() => setActiveStar(star)}
                onMouseLeave={() => setActiveStar(null)}
              />
              
              <StarShape isActive={activeStar?.id === star.id} />
              
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: (activeStar?.id === star.id || showLabels) ? 1 : 0,
                  scale: activeStar?.id === star.id ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <span className={`text-xs font-medium ${activeStar?.id === star.id ? 'text-yellow-300' : 'text-yellow-500/70'} bg-gray-900/70 px-2 py-1 rounded-full`}>
                  {star.title}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 