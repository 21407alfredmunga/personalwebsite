import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <span className="text-xl font-semibold">Alfred Munga Mbaru</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <Link to="/resume" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-6 pb-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4">
            
            {/* Hero Card - Large */}
            <div className="lg:col-span-3 lg:row-span-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-300 hover:scale-[1.01] flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Building digital experiences
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Data Scientist / Machine Learning Engineer / AI Systems Developer
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition-colors">
                  View Work
                </button>
                <a 
                  href="mailto:21407alfredmunga@gmail.com"
                  className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl font-medium transition-colors inline-block"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* About Me Card */}
            <div className="lg:col-span-1 lg:row-span-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.01]">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                <span className="text-white font-semibold">Alfred Munga</span><br />
                Data Scientist | ML Engineer | Full-Stack Developer
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I turn complex data into deployed products. With expertise ranging from Python-based ML modeling to AWS cloud architecture and React front-ends, I build end-to-end intelligent systems.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                <span className="text-gray-300">Current Focus:</span> AI Agents, RAG Pipelines, and IoT integrations.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                <span className="text-gray-300">Current Project:</span> Building FinGuard Lite – AI financial assistance for Kenyan SMEs.
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300">Stack:</span> Python, AWS, Next.js, pgvector.
              </p>
            </div>

            {/* Featured Project Card - Wide */}
            <div className="lg:col-span-3 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.01] group">
              <div className="relative h-full min-h-[300px] p-8 flex flex-col justify-end">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-cyan-900/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">Featured Project: AI Platform</h3>
                  <p className="text-gray-300 mb-4">
                    A machine learning dashboard for data visualization.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm">
                      Python
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards Container */}
            <div className="lg:col-span-1 space-y-4">
              {/* Years of Experience */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.01] text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              
              {/* Projects Completed */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.01] text-center">
                <div className="text-5xl font-bold mb-2">30+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>

            {/* E-Commerce Site */}
            <a 
              href="https://21407alfredmunga-uber-streamlit-uber-dashboard-wd4zxx.streamlit.app/?embed_options=show_toolbar,light_theme,show_colored_line,show_padding,dark_theme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.01] block"
            >
              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-violet-900/40 to-purple-950/60"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold relative z-10">Uber Dashboard</h3>
                </div>
              </div>
            </a>

            {/* Mobile Task App */}
            <a 
              href="https://21407alfredmunga-streamlit-lloyds-segments-app-sy63yy.streamlit.app/?embed_options=show_toolbar,show_colored_line,show_padding,show_footer,dark_theme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.01] block"
            >
              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-red-900/40 to-orange-950/60"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)]"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold relative z-10">Customer Segmentation Dashboard</h3>
                </div>
              </div>
            </a>

            {/* Data Analytics Tool */}
            <a 
              href="https://21407alfredmunga-streamlit-powerco-churn-app-rcujo5.streamlit.app/?embed_options=light_theme,show_padding,show_footer,dark_theme,show_colored_line"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.01] block"
            >
              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-blue-900/40 to-cyan-950/60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold relative z-10">Customer Churn Dashboard</h3>
                </div>
              </div>
            </a>

            {/* Let's Connect Card */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.01]">
              <h2 className="text-2xl font-bold mb-6 text-center">Let's Connect</h2>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com/21407alfredmunga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/alfred-mbaru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/AlfredMunga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center transition-all"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
