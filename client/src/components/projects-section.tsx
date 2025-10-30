import { motion } from 'framer-motion';
import { ExternalLink, Users, Circle, Bot } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { useQuery } from '@tanstack/react-query';

interface DiscordStats {
  totalMembers: number;
  onlineMembers: number;
  serverName: string;
  serverIcon: string | null;
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "🦇 ShadowX",
      description: "Roblox bypassing community and more",
      technologies: [],
      features: [
        "Advanced bypassing techniques",
        "Community-driven development",
        "Regular updates and support"
      ],
      inviteCode: "djHHGshu6G",
      links: {
        discord: "https://discord.gg/djHHGshu6G",
        inviteBot: "https://discord.com/oauth2/authorize?client_id=1352886761847652372&scope=bot%20applications.commands&permissions=8"
      }
    }
  ];

  const { data: discordStats, isLoading } = useQuery<DiscordStats>({
    queryKey: ['/api/discord/stats', projects[0].inviteCode],
    refetchInterval: 60000, // Refetch every minute
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative Roblox exploitation tools and community projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {project.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-purple-200">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-purple-700/30 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/40 shadow-lg shadow-purple-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-purple-200">Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center gap-6 mb-4 p-4 bg-purple-900/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">
                      {isLoading ? "..." : discordStats?.totalMembers?.toLocaleString() || "N/A"}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center">
                      <Users size={12} className="mr-1" />
                      Total Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 flex items-center justify-center gap-1">
                      <Circle size={8} className="fill-green-400" />
                      {isLoading ? "..." : discordStats?.onlineMembers?.toLocaleString() || "N/A"}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center">
                      Online Now
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={project.links.inviteBot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-green-500/30"
                    data-testid="button-invite-bot"
                  >
                    <Bot size={20} />
                    Invite Bot
                  </a>
                  <a
                    href={project.links.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-3 text-xl shadow-lg shadow-purple-500/30"
                    data-testid="button-discord"
                  >
                    <SiDiscord size={24} />
                    Join Discord
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
