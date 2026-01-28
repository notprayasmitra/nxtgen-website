import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/Terminal";
import ShinyText from "@/components/ui/ShinyText";

const VisionSection = () => {
  const visionCards = [
    {
      title: "Innovation & Excellence",
      items: [
        "Transforming tomorrow through cutting-edge innovation",
        "Empowering students to turn ideas into real-world tech solutions",
        "AI-driven innovation, collaborative ecosystems, competitive excellence"
      ]
    },
    {
      title: "Sustainable Future",
      items: [
        "Building sustainable digital futures",
        "Technology bridging gaps and solving global challenges",
        "Inclusive opportunities through sustainable ethical tech"
      ]
    },
    {
      title: "Leadership Development",
      items: [
        "Fostering next-generation leaders",
        "Cultivating innovators & problem-solvers of tomorrow",
        "Equipping skills to shape future of tech & humanity"
      ]
    },
    {
      title: "Global Collaboration",
      items: [
        "Creating interconnected ecosystems",
        "Collaboration with industry leaders & institutions",
        "Building bridges connecting ideas, talent globally"
      ]
    },
    {
      title: "UN SDG Alignment",
      items: [
        "SDG 3: Good Health - HealthTech & AthleTech",
        "SDG 7: Clean Energy - EcoTech track",
        "SDG 9: Innovation Infrastructure - Dev Velocity"
      ]
    },
    {
      title: "Impact Areas",
      items: [
        "SDG 11: Sustainable Cities - Voyage Tech",
        "SDG 13: Climate Action - EcoTech track",
        "SDG 16: Peace & Justice - FinTrust track"
      ]
    },
    {
      title: "Responsible Innovation",
      items: [
        "Ethical AI & Responsible Innovation",
        "Global student innovation network",
        "Startup incubation & mentorship"
      ]
    },
    {
      title: "Education & Access",
      items: [
        "Inclusive tech education for all",
        "Breaking barriers through technology",
        "Democratizing knowledge and resources"
      ]
    },
    {
      title: "Digital Transformation",
      items: [
        "SDG 4: Quality Education - EdTech innovations",
        "SDG 8: Decent Work - Career development programs",
        "SDG 10: Reduced Inequalities - Tech accessibility"
      ]
    },
    {
      title: "Community Impact",
      items: [
        "Building resilient tech communities",
        "Peer-to-peer learning ecosystems",
        "Cross-cultural collaboration platforms"
      ]
    },
    {
      title: "Future Technologies",
      items: [
        "Quantum computing exploration",
        "Blockchain for social good",
        "AR/VR for education & training"
      ]
    },
    {
      title: "Research & Development",
      items: [
        "SDG 17: Partnerships for Goals",
        "Open-source contribution culture",
        "Academic-industry collaboration"
      ]
    }
  ];

  return (
    <section 
      id="vision" 
      className="relative min-h-[70vh] md:min-h-screen w-full overflow-hidden py-16 md:py-24"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header - ShinyText */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(3rem,10vw,7rem)] font-extrabold">
            <ShinyText
              text="Vision"
              speed={2}
              color="#9ca3af"
              shineColor="#ffffff"
              spread={140}
              className="block"
            />
          </h2>
        </div>
        
        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className="group relative h-64 p-6 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500"
            >
              {/* Shine sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine z-10 rounded-2xl" />

              <div className="relative z-20 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-4 text-center drop-shadow-lg">
                  {card.title}
                </h3>
                <ul className="space-y-2 flex-1 text-justify">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-white/90 leading-relaxed flex items-start group-hover:text-white">
                      <span className="text-emerald-400 mr-2 flex-shrink-0 font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
        .shadow-glow {
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.85),
            0 0 50px rgba(255, 255, 255, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default VisionSection;
