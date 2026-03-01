import { motion } from 'motion/react';
import { BarChart3, Code2, Bot } from 'lucide-react';

const skillGroups = [
  {
    title: "Performance Marketing",
    icon: <BarChart3 className="w-8 h-8" />,
    skills: ["Facebook Ads", "TikTok Ads", "Google Ads", "Video Marketing"],
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Technical & Tracking",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["WordPress", "GA4", "GSC", "GTM"],
    color: "from-indigo-500/20 to-transparent",
    border: "group-hover:border-indigo-500/50"
  },
  {
    title: "AI Automation",
    icon: <Bot className="w-8 h-8" />,
    skills: ["Workflow", "AI Agents", "CAPI"],
    color: "from-cyan-500/20 to-transparent",
    border: "group-hover:border-cyan-500/50"
  }
];

export const Skills = () => {
  return (
    <section className="py-24 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">MY SKILLS</h2>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`group relative p-8 rounded-2xl bg-[#111] border border-white/5 transition-all duration-500 ${group.border} hover:shadow-[0_0_30px_rgba(0,123,255,0.15)] overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#007BFF] group-hover:scale-110 transition-all duration-500">
                  {group.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
                
                <ul className="space-y-3">
                  {group.skills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] mr-3 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#007BFF] transition-all" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
