import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Independent Developer",
      position: "AsyncX Creator & Lead Developer",
      duration: "2020 - Present",
      description: "Created and maintain the AsyncX exploitation framework from scratch. Developed innovative bypass techniques and built a comprehensive tool suite that serves thousands of users daily.",
      tags: ["Lua", "C++", "Assembly"],
      dotColor: "bg-blue-accent",
      positionColor: "text-blue-accent"
    },
    {
      company: "Freelance",
      position: "Roblox Script Developer",
      duration: "2019 - Present",
      description: "Specialized in creating custom scripts and exploits for various Roblox games. Built reputation through quality work and innovative solutions for complex bypassing challenges.",
      tags: ["Scripting", "Game Hacking", "Custom Tools"],
      dotColor: "bg-purple-accent",
      positionColor: "text-purple-accent"
    },
    {
      company: "Self-Taught",
      position: "Security Researcher",
      duration: "2018 - Present",
      description: "Extensive self-directed learning in reverse engineering, anti-cheat analysis, and security research. Continuously studying new protection methods to stay ahead of the curve.",
      tags: ["Reverse Eng", "Security", "Research"],
      dotColor: "bg-green-500",
      positionColor: "text-green-400"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">🌮 My Journey</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-accent/30 last:pb-0"
            >
              <div className={`absolute -left-3 top-0 w-6 h-6 ${experience.dotColor} rounded-full border-4 border-navy`}></div>
              <div className="glass-effect p-6 rounded-lg ml-6 hover:scale-105 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{experience.company}</h3>
                    <p className={`${experience.positionColor} font-semibold`}>{experience.position}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{experience.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`${
                        tagIndex === 0 ? 'bg-blue-accent/20 text-blue-300' :
                        tagIndex === 1 ? 'bg-purple-accent/20 text-purple-300' :
                        'bg-green-500/20 text-green-300'
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
