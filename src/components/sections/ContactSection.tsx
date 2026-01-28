import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      type: "phone",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hackathon@srmrmp.com",
      type: "email",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "IVB, Express Avenue, Chennai",
      type: "address",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact Form | ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:hackathon@srmrmp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-[70vh] md:min-h-screen w-full">
      {/* EXACT Tracks/FAQ background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-7xl">
        {/* Header - EXACT Tracks/FAQ style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[clamp(2.5rem,9vw,6rem)] md:text-[clamp(3.5rem,12vw,11rem)] font-bold mb-8 md:whitespace-nowrap">
            <ShinyText
              text="Contact"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              className="block"
            />
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Get in touch — we're ready to help
          </p>
        </motion.div>

        {/* Perfectly aligned 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
          
          {/* LEFT: Send Message Form (unchanged size) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/60 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/50 hover:shadow-glow transition-all duration-500 h-fit">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-4 text-white placeholder-white/60 
                             focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 focus:outline-none transition-all duration-300
                             text-base hover:bg-white/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-4 text-white placeholder-white/60 
                             focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 focus:outline-none transition-all duration-300
                             text-base hover:bg-white/20"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-4 text-white placeholder-white/60 resize-vertical
                             focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 focus:outline-none transition-all duration-300
                             text-base hover:bg-white/20 min-h-[100px]"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 
                             text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-xl shadow-emerald-500/40 
                             hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300"
                >
                  Send Message →
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: 3 REDUCED SIZE Contact Cards - Perfectly Compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 lg:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-40 md:h-48 bg-black/60 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/50 
                           hover:shadow-glow hover:-translate-y-1 transition-all duration-500 cursor-pointer flex items-center justify-center"
                style={{ height: '10rem', minHeight: '10rem' }}
                onClick={() => {
                  if (info.type === 'phone') window.open(`tel:${info.detail}`);
                  if (info.type === 'email') window.location.href = `mailto:${info.detail}`;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 
                                opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-700 rounded-2xl" />
                
                <div className="relative z-20 flex items-center justify-center w-full h-full p-3 space-x-3">
                  <div className="p-2.5 bg-white/20 rounded-xl border border-white/40 group-hover:bg-white/30 
                                  transition-all duration-300 flex-shrink-0 shadow-md flex items-center justify-center">
                    <info.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-300" />
                  </div>
                  <div className="text-center flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-emerald-100">
                      {info.title}
                    </h4>
                    <p className="text-white/90 text-sm md:text-base font-mono break-words hover:text-emerald-200 transition-colors">
                      {info.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* EXACT Tracks/FAQ animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
        .shadow-glow {
          box-shadow: 
            0 35px 70px -20px rgba(0, 0, 0, 0.8),
            0 0 60px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
