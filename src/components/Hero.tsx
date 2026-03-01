import { motion } from 'motion/react';
import { ParticleBackground } from './ParticleBackground';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Kỹ thuật cốt lõi. Marketing đột phá.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <ParticleBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[3px] h-[1em] bg-[#007BFF] ml-2 align-middle"
          />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Xin chào, mình là <span className="text-white font-semibold">Tùng Phạm</span> – Một Marketer tay ngang từ nhóm ngành Kỹ thuật, không ngừng học hỏi và rất đam mê ứng dụng tối ưu hiệu suất công việc bằng AI & Data.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-[#007BFF] text-white rounded-full font-medium hover:bg-blue-600 transition-all glow-box">
            Workflow Triển Khai Gần Đây
          </a>
          <a href="#contact" className="px-8 py-4 border border-slate-700 text-white rounded-full font-medium hover:border-[#007BFF] hover:text-[#007BFF] transition-all">
            Liên hệ với tôi
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center p-2">
          <div className="w-1 h-3 bg-[#007BFF] rounded-full" />
        </div>
      </div>
    </section>
  );
};
