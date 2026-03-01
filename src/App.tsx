/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AIShowcase } from './components/AIShowcase';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-slate-300 min-h-screen font-sans selection:bg-[#007BFF] selection:text-white">
      <Hero />
      <About />
      <Skills />
      <AIShowcase />
      <Projects />
      <Contact />
    </div>
  );
}
