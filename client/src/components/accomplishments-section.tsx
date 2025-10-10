import { motion } from 'framer-motion';

export default function AccomplishmentsSection() {
  const accomplishments = [
    { number: "25K+", label: "Users Served" },
    { number: "500+", label: "Scripts Created" },
    { number: "20+", label: "Games Bypassed" },
    { number: "5", label: "Years Experience" }
  ];

  return (
    <section className="py-20 slate-custom-bg/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">🏆 Accomplishments</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accomplishments.map((accomplishment, index) => (
            <motion.div
              key={accomplishment.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-effect p-8 rounded-2xl hover:scale-105 transition-transform"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                {accomplishment.number}
              </motion.div>
              <p className="text-gray-300">{accomplishment.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl italic text-gray-300 max-w-4xl mx-auto">
            "Innovation through dedication, pushing boundaries, and never settling for limitations."
          </blockquote>
          <cite className="block mt-4 blue-accent font-semibold">- Supreme</cite>
        </motion.div>
      </div>
    </section>
  );
}
