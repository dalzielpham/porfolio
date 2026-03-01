import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Glow effect from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#007BFF] opacity-10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bạn đã sẵn sàng để <span className="text-[#007BFF] glow-text">AI hóa</span> quy trình Marketing của mình chưa?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Hãy kết nối để cùng nhau tạo ra những đột phá mới.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="tel:+84123456789" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111] border border-white/10 hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all text-slate-300 hover:text-white">
              <Phone className="w-5 h-5 text-[#007BFF]" />
              <span>0123 456 789</span>
            </a>
            <a href="mailto:tungpham3103@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111] border border-white/10 hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all text-slate-300 hover:text-white">
              <Mail className="w-5 h-5 text-[#007BFF]" />
              <span>tungpham3103@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111] border border-white/10 hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all text-slate-300 hover:text-white">
              <Linkedin className="w-5 h-5 text-[#007BFF]" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111] border border-white/10 hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all text-slate-300 hover:text-white">
              <Facebook className="w-5 h-5 text-[#007BFF]" />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 text-center text-slate-600 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Tùng Phạm. All rights reserved.</p>
        <p className="mt-1">Designed with Technical Blue & Deep Black concept.</p>
      </footer>
    </section>
  );
};
