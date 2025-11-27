import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <a 
            href="/Alfred_Mbaru_Resume.pdf" 
            download
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-6 pb-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 mb-4">
              Alfred Munga Mbaru
            </h1>
            <p className="text-xl text-zinc-400">
              Data Scientist / Machine Learning Engineer / AI Systems Developer
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Skills */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Languages Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Python</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">SQL (PostgreSQL)</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Bash</span>
                </div>
              </div>

              {/* Machine Learning Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">Machine Learning</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">scikit-learn</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">XGBoost</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Time Series (ARIMA/Prophet)</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">PyTorch</span>
                </div>
              </div>

              {/* Cloud/Data Engineering Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">Cloud/Data Eng</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">AWS (S3, Glue, Kinesis, Lambda)</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Docker</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">ETL/ELT pipelines</span>
                </div>
              </div>

              {/* Tools Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">Tools</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Tableau</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Power BI</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Git</span>
                  <span className="bg-zinc-800 text-zinc-200 border border-white/5 px-4 py-2 rounded-lg text-sm">Jira</span>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">Certifications</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-200 font-medium">AWS Certified Cloud Practitioner</p>
                    <p className="text-zinc-500 text-sm">2025</p>
                  </div>
                  <div>
                    <p className="text-zinc-200 font-medium">Stanford Medicine</p>
                    <p className="text-zinc-400 text-sm">Data Science in Precision Medicine</p>
                    <p className="text-zinc-500 text-sm">2025</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Experience Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-zinc-100 mb-8">Experience</h2>
                
                <div className="space-y-8">
                  {/* AI/ML Club */}
                  <div className="relative pl-8 border-l-2 border-blue-600/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-zinc-100">AI/ML Club</h3>
                      <p className="text-zinc-400">Kabarak University</p>
                      <p className="text-zinc-500 text-sm">2023 - Present</p>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Guided students on Python and ML concepts through hands-on projects.
                    </p>
                  </div>

                  {/* IoT Sensor Pipeline */}
                  <div className="relative pl-8 border-l-2 border-purple-600/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-zinc-100">IoT Sensor Pipeline (Batch + Streaming)</h3>
                      <p className="text-zinc-400">Personal Project</p>
                      <p className="text-zinc-500 text-sm">July 2025</p>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Orchestrated Glue jobs and Kinesis streams; transformed features in PostgreSQL using pgvector.
                    </p>
                  </div>

                  {/* Customer Churn Prediction */}
                  <div className="relative pl-8 border-l-2 border-orange-600/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-zinc-100">Customer Churn Prediction</h3>
                      <p className="text-zinc-400">Personal Project</p>
                      <p className="text-zinc-500 text-sm">Feb 2025</p>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Built preprocessing pipelines and trained Random Forest models; communicated drivers to stakeholders via dashboards.
                    </p>
                  </div>

                  {/* FinGuard Lite */}
                  <div className="relative pl-8 border-l-2 border-cyan-600/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-zinc-100">FinGuard Lite</h3>
                      <p className="text-zinc-400">Academic Project</p>
                      <p className="text-zinc-500 text-sm">2025</p>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Built forecasting components and trend dashboards for financial KPIs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-zinc-100 mb-8">Education</h2>
                
                <div className="relative pl-8 border-l-2 border-green-600/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">Kabarak University</h3>
                    <p className="text-zinc-400">BSc Computer Science</p>
                    <p className="text-zinc-500 text-sm">Expected 2025</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
