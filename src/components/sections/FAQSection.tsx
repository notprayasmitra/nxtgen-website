import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is the duration of the hackathon?",
    answer:
      "NXTGEN'26 is a 24-hour hackathon. It starts on February 21, 2026 at 9 AM and ends on February 22, 2026 at 9 AM.",
  },
  {
    id: 2,
    question: "Who is eligible to participate?",
    answer:
      "Students from any educational institution (undergraduate, postgraduate, or doctoral) are eligible. No prior hackathon experience required!",
  },
  {
    id: 3,
    question: "What is the team size?",
    answer: "Teams can have 2-4 members. You can participate with a team of 2 to 4.",
  },
 
   {
    id: 5,
    question: "What are the problem statements?",
    answer:
      "There is no fixed problem statement. Innovation has no limits, but hard challenges will be given during the hackathon, and only the ones who survive will finish the project.",
  },
  {
    id: 6,
    question: "What are the benefits of participating?",
    answer:
      "Participants get cash prizes, internship opportunities, direct recruitment offers, certificates, mentorship from industry experts, networking opportunities, and access to workshops and resources.",
  },
  
  {
    id: 7,
    question: "Will I receive a certificate?",
    answer:
      "Yes! All registered participants who complete the hackathon will receive a participation certificate. Winners and track prize winners receive additional recognition certificates.",
  },
  {
    id: 8,
    question: "Is there a registration fee?",
    answer:
      "No, participation is completely free for all registered teams. Food, refreshments, and venue facilities are provided at no cost. We also host a multilingual sing-along session during the midnight.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section
      id="faq"
      className="relative min-h-[70vh] md:min-h-screen w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-[clamp(2.5rem,9vw,6rem)] md:text-[clamp(3.5rem,12vw,11rem)] font-bold mb-12 md:mb-20">
            <span className="text-white/90">FAQs</span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map(faq => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  className="
                    relative rounded-3xl
                    bg-black/50 backdrop-blur-xl
                    border-2 border-white/20
                    shadow-2xl shadow-white/10
                    overflow-hidden
                    group
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-transparent before:-skew-x-12 before:opacity-0 before:group-hover:opacity-100 before:group-hover:animate-shine before:transition-all before:duration-700
                  "
                  style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}
                >
                  {/* QUESTION BUTTON */}
                  <button
                    onClick={() => toggle(faq.id)}
                    onKeyDown={e => handleKeyDown(e, faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="
                      w-full
                      min-h-[80px]
                      px-8 py-4
                      flex items-center justify-between
                      text-left
                      text-lg md:text-xl
                      font-bold
                      bg-gradient-to-r from-transparent via-white/10 to-transparent
                      text-white drop-shadow-lg
                      focus:outline-none
                      focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50
                      hover:bg-white/20 hover:shadow-glow
                      hover:border-white/40
                      transition-all duration-500 ease-out
                      group-hover:scale-[1.02]
                    "
                  >
                    <span className="relative z-10">{faq.question}</span>

                    {/* CHEVRON */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-6 text-white group-hover:text-white/90 transition-all duration-300 shrink-0"
                    >
                      <ChevronDown size={24} strokeWidth={2.5} />
                    </motion.span>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        key="content"
                        initial={{ height: 0, opacity: 0, scaleY: 0.95 }}
                        animate={{ height: "auto", opacity: 1, scaleY: 1 }}
                        exit={{ height: 0, opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            px-8 pb-8 pt-4
                            backdrop-blur-xl bg-black/60 border-t border-white/10
                            text-base md:text-lg
                            text-white/95
                            leading-relaxed
                            tracking-wide
                          "
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
        .shadow-glow {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
        }
      `}</style>
    </section>
  );
}
