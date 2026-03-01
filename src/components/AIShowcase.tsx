import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Bell, Workflow, ArrowRight, Share2, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const cases = [
  {
    title: "Zalo AI Training Bot",
    desc: "Tra cứu thông tin sản phẩm tức thời cho Sales.",
    icon: <MessageSquare className="w-6 h-6" />,
    media: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1HaPT2xUDftfNub0W-aMpUgorcFtc-7wf' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qlePHnWv-A7Xp1GhpQloUuMDA70rDk9Y' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1s-ewrjUBFmSvam8Tnc9F7MJe4mL1igud' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  },
  {
    title: "Zalo Auto-Reminder",
    desc: "Tự động hóa báo cáo chất lượng Data từ Google Sheets.",
    icon: <Bell className="w-6 h-6" />,
    media: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1oeo4zvDnDzMAN4N1X2TgfpyTCBZ7Sc1q' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1y1NbgRzjnT29p7YZp-NswSXSPWDUBZ3f' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ybvpaVeuk0ipQPZ-Dh2_75TL4IUtPell' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  },
  {
    title: "CAPI Workflow",
    desc: "Tối ưu hóa phễu Remarketing đa nền tảng qua Dataset (IP, FBC, FBB...).",
    icon: <Workflow className="w-6 h-6" />,
    media: [
      { type: 'image', url: 'https://picsum.photos/seed/workflow-data-1/1200/800' },
      { type: 'image', url: 'https://picsum.photos/seed/workflow-data-2/1200/800' },
      { type: 'image', url: 'https://picsum.photos/seed/workflow-data-3/1200/800' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  },
  {
    title: "Post Reel",
    desc: "WF tự động đăng tải 1 video trên nhiều Page nền tảng Meta.",
    icon: <Share2 className="w-6 h-6" />,
    media: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1dFnSpP97atEg1Bk7r5y2N5kIHXoTspaz' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1nA81kDMQVUwGGTf5l_zO_iUKbXAssTnR' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qQDmwN7nnj033pafYoSkbz4leWSv2zay' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  },
  {
    title: "Agent ADS",
    desc: "Tự động đọc báo cáo, so sánh chỉ số và tắt bật bằng chat.",
    icon: <TrendingUp className="w-6 h-6" />,
    media: [
      { type: 'image', url: 'https://picsum.photos/seed/ads-1/1200/800' },
      { type: 'image', url: 'https://picsum.photos/seed/ads-2/1200/800' },
      { type: 'image', url: 'https://picsum.photos/seed/ads-3/1200/800' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  }
];

export const AIShowcase = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (item: typeof cases[0]) => {
    setSelectedCase(item);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (selectedCase) {
      setCurrentSlide((prev) => (prev + 1) % selectedCase.media.length);
    }
  };

  const prevSlide = () => {
    if (selectedCase) {
      setCurrentSlide((prev) => (prev - 1 + selectedCase.media.length) % selectedCase.media.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Flowchart Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007BFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#007BFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 300 200 400 400 T 800 500 T 1200 300" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="10 10">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 0 600 Q 400 600 600 400 T 1000 200 T 1400 400" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="5 5">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">AI Automation Showcase</h2>
          <div className="w-20 h-1 bg-[#007BFF] rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl">Các luồng tự động hóa giúp tối ưu quy trình và tăng trưởng hiệu suất.</p>
        </motion.div>

        <div className="space-y-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-[#111]/80 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl hover:border-[#007BFF]/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#007BFF] group-hover:text-white transition-all duration-300 glow-box">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#007BFF] transition-colors">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
              
              <button 
                onClick={() => openModal(item)}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400 group-hover:border-[#007BFF] group-hover:text-[#007BFF] transition-all"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#007BFF] transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Media Slider */}
                <div className="relative flex-1 bg-black flex items-center justify-center group min-h-[300px] md:min-h-[500px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {selectedCase.media[currentSlide].type === 'image' ? (
                        <img 
                          src={selectedCase.media[currentSlide].url} 
                          alt={selectedCase.title}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <video 
                          src={selectedCase.media[currentSlide].url} 
                          className="w-full h-full object-contain"
                          controls
                          autoPlay
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider Controls */}
                  {selectedCase.media.length > 1 && (
                    <>
                      <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#007BFF] transition-all"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#007BFF] transition-all"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedCase.media.map((_, idx) => (
                          <div 
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-[#007BFF] w-6' : 'bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Info Panel */}
                <div className="w-full md:w-80 p-8 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center mb-6">
                    {selectedCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedCase.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">{selectedCase.desc}</p>
                  
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {['AI Agent', 'Automation', 'Workflow'].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

