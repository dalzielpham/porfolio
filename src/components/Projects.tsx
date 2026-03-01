import { motion, AnimatePresence } from 'motion/react';
import { Award, Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    category: "Hà Thành Ford (2024)",
    items: [
      {
        title: "Tối Ưu Hóa GOOGLE ADS",
        desc: "Chiến dịch tối ưu hóa chuyển đổi và traffic chất lượng cao cho dòng xe Ford.",
        type: "project",
        thumbnail: "https://picsum.photos/seed/google-ads-performance/600/400"
      },
      {
        title: "Tối Ưu Hóa Chi Phí CPL",
        desc: "Giảm chi phí trên mỗi khách hàng tiềm năng (CPL) hiệu quả qua hệ thống AI & Data.",
        type: "project",
        thumbnail: "https://picsum.photos/seed/cpl-optimization-data/600/400"
      },
      {
        title: "Nhân viên Xuất sắc năm 2024",
        type: "award",
        icon: <Award className="w-5 h-5 text-yellow-500" />
      },
      {
        title: "MỞ LỐI TỰ DO – TRỌN VẸN HẠNH PHÚC",
        desc: "Giải Nhì Video Sáng Tạo Ford Việt Nam",
        type: "external-video",
        award: "Giải Nhì",
        thumbnail: "https://picsum.photos/seed/ford-ranger-white/600/400",
        link: "https://www.facebook.com/reel/4135093290040872"
      },
      {
        title: "TẾT NÀY, MÓN QUÀ LỚN NHẤT NHẤT BẠN MANG VỀ LÀ GÌ?",
        desc: "Giải Ba Video Sáng Tạo Sản Phẩm",
        type: "external-video",
        award: "Giải Ba",
        thumbnail: "https://picsum.photos/seed/ford-territory-2026/600/400",
        link: "https://www.facebook.com/reel/1439962427487102"
      }
    ]
  },
  {
    category: "Remote Projects (F&B Digital Media)",
    items: [
      {
        title: "Bia Hơi Cổ TÂN",
        desc: "Xây dựng nền tảng truyền thông số.",
        type: "project",
        thumbnail: "https://picsum.photos/seed/cotan/600/400"
      },
      {
        title: "LaBete",
        desc: "Phát triển mô hình F&B trên digital.",
        type: "project",
        thumbnail: "https://picsum.photos/seed/labete/600/400"
      }
    ]
  }
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fordProjects = projects[0].items;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fordProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fordProjects.length) % fordProjects.length);
  };

  // Helper to get items for 3D display
  const getDisplayItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + fordProjects.length) % fordProjects.length;
      items.push({ item: fordProjects[index], position: i });
    }
    return items;
  };

  return (
    <section className="py-24 px-6 relative bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects & Awards</h2>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto rounded-full" />
          <p className="mt-4 text-slate-400">Những minh chứng thực tế cho năng lực triển khai.</p>
        </motion.div>

        <div className="space-y-32">
          {/* Hà Thành Ford Section with 3D Space Carousel */}
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white border-l-4 border-[#007BFF] pl-4 mb-16">
              {projects[0].category}
            </h3>

            <div className="relative h-[450px] flex items-center justify-center perspective-1000">
              {/* Navigation Arrows on Sides */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 md:-left-4 z-50 w-14 h-14 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-[#007BFF] hover:text-[#007BFF] hover:scale-110 transition-all glow-box"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-0 md:-right-4 z-50 w-14 h-14 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-[#007BFF] hover:text-[#007BFF] hover:scale-110 transition-all glow-box"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* 3D Carousel Items */}
              <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {getDisplayItems().map(({ item, position }) => (
                    <motion.div
                      key={`${item.title}-${position}`}
                      initial={{ 
                        opacity: 0, 
                        scale: 0.8,
                        x: position * 300,
                        z: -200,
                        rotateY: position * 45
                      }}
                      animate={{ 
                        opacity: position === 0 ? 1 : 0.7, 
                        scale: position === 0 ? 1 : 0.9,
                        x: position * (window.innerWidth < 768 ? 150 : 380),
                        z: position === 0 ? 0 : -100,
                        rotateY: position * -20,
                        filter: position === 0 ? 'blur(0px)' : 'blur(0.5px)',
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.5,
                        z: -400
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 25 
                      }}
                      className={`absolute w-[300px] md:w-[380px] h-[400px] cursor-pointer ${position === 0 ? 'z-30' : 'z-10'}`}
                      onClick={() => {
                        if (position === 0 && 'link' in item && item.link) {
                          window.open(item.link, '_blank');
                        } else if (position !== 0) {
                          position < 0 ? prevSlide() : nextSlide();
                        }
                      }}
                    >
                      <div className="h-full bg-[#111] rounded-3xl overflow-hidden border border-white/10 hover:border-[#007BFF]/50 transition-colors flex flex-col shadow-2xl shadow-blue-500/5">
                        {item.type === 'award' ? (
                          <div className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-br from-yellow-500/10 to-transparent p-8">
                            <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 glow-box">
                              {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          </div>
                        ) : (
                          <>
                            <div className="relative aspect-video overflow-hidden bg-slate-900">
                              <img 
                                src={item.thumbnail} 
                                alt={item.title}
                                className="w-full h-full object-cover opacity-80"
                                referrerPolicy="no-referrer"
                              />
                              {(item.type === 'video' || item.type === 'external-video') && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                                    <Play className="w-6 h-6 ml-1" />
                                  </div>
                                </div>
                              )}
                              {item.award && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/90 text-black text-xs font-bold rounded-full shadow-lg">
                                  {item.award}
                                </div>
                              )}
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-center">
                              <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                                <span className="line-clamp-2">{item.title}</span>
                                {(item.type === 'project' || item.type === 'external-video') && <ExternalLink className="w-5 h-5 text-[#007BFF]" />}
                              </h4>
                              {item.desc && <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">{item.desc}</p>}
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Remote Projects Section - Standard Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-12 border-l-4 border-[#007BFF] pl-4">
              {projects[1].category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects[1].items.map((item, iIdx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: iIdx * 0.1, duration: 0.5 }}
                  className="group relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#007BFF] transition-colors flex items-center justify-between">
                      {item.title}
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    {item.desc && <p className="text-slate-400 leading-relaxed">{item.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
