import { motion } from 'framer-motion';
import { SiDiscord, SiInstagram, SiTelegram } from 'react-icons/si';

export default function HeroSection() {
  const socialLinks = [
    { icon: SiDiscord, url: "https://discord.gg/Ynxiety", label: "Discord" },
    { icon: SiInstagram, url: "https://instagram.com/Ynxiety", label: "Instagram" },
    { icon: SiTelegram, url: "https://t.me/Ynxiety", label: "Telegram" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Social Links at top */}
          <div className="mb-8">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-400/30 rounded-lg transition-all text-sm text-purple-200 hover:text-white"
                >
                  <social.icon size={16} />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-purple-400 shadow-lg shadow-purple-500/50 overflow-hidden">
              <img
                src="https://files.catbox.moe/k3im62.jpg"
                alt="Ynxiety Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text relative z-10">Ynxiety</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Developer & Creator of innovative Roblox exploitation tools
          </p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-blue-accent rounded-full opacity-60"></div>
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-6 h-6 bg-purple-accent rounded-full opacity-40"></div>
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <div className="w-3 h-3 bg-blue-accent rounded-full opacity-80"></div>
        </motion.div>
      </div>
    </section>
  );
}

