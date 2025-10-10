import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Smartphone, Database, Palette } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { icon: Code, name: 'Lua', color: 'text-blue-400' },
    { icon: Code, name: 'C++', color: 'text-purple-400' },
    { icon: Cpu, name: 'Assembly', color: 'text-red-400' },
    { icon: Database, name: 'Reverse Eng', color: 'text-green-400' },
    { icon: Brain, name: 'Bypassing', color: 'text-yellow-400' },
    { icon: Palette, name: 'Exploiting', color: 'text-pink-400' }
  ];

  return (
    <section id="about" className="py-20 slate-custom-bg/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">📜 About Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                I'm a passionate developer specializing in Roblox exploitation and advanced scripting techniques. My work focuses on creating innovative tools and bypassing security measures to enhance the gaming experience.
              </p>
              <p>
                My expertise includes Lua scripting, reverse engineering, anti-cheat circumvention, and developing robust exploitation frameworks. I enjoy pushing the boundaries of what's possible in game modification.
              </p>
              <p>
                Through continuous research and development, I create reliable solutions that serve thousands of users in the Roblox community, always staying ahead of the latest security updates.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-lg text-center hover:scale-105 transition-transform"
                >
                  <skill.icon className={`text-2xl ${skill.color} mb-2 mx-auto`} />
                  <p className="text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
}
