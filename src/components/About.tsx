import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Transformation</h2>
          <div className="w-20 h-1 bg-[#007BFF] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#007BFF] rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/164YkPjL0Gb_bDKYZiujk9q0FNBVl_1ow" 
                alt="Tùng Phạm" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[#007BFF]/10 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-slate-400 leading-relaxed"
          >
            <p>
              Từ những bản vẽ kỹ thuật khô khan đến thế giới Marketing đầy biến số, mình hiểu rằng sự kết hợp giữa <span className="text-white font-medium">logic hệ thống</span> và <span className="text-white font-medium">tư duy sáng tạo</span> là chìa khóa của tăng trưởng.
            </p>
            <p>
              Hành trình tự học không chỉ giúp mình tồn tại, mà còn giúp mình định hình phong cách: <span className="text-[#007BFF] font-medium glow-text">Lấy AI Agent và số liệu làm trọng tâm</span> để tối ưu hóa thành công.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Năm Kinh Nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Dự Án AI & Data</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
