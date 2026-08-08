import React, { useState, useEffect } from "react";
import { Mail, Terminal, Code2, Cpu } from "lucide-react";

const App = () => {
  const skills = ['Python', 'Snowflake' , 'SQL Server', 'FastAPI', 'Dagster', 'Redis', 'Docker', 'AWS', 'LangChain', 'Weaviate', 'k8s', 'pandas', 'polars'];
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'open-source', 'projects'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Fixed Info */}
          <header className="lg:sticky lg:top-32 lg:h-fit space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold text-white tracking-tight">Shoham Debnath</h1>
              <h2 className="text-xl text-cyan-400 mt-3 font-medium">Software Developer @ KKR</h2>
              <p className="mt-6 text-slate-400 leading-relaxed max-w-md">
                Driving data platform modernization, compliance model governance, and open source performance engineering.
              </p>
            </div>

            <nav className="flex gap-6 py-4 items-center text-sm font-medium text-slate-300">
              <a href="https://www.linkedin.com/in/debnathshoham/" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/debnathshoham" className="hover:text-white transition-colors">GitHub</a>
              <a href="mailto:debnathshoham@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
            </nav>

            <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
              <p className="text-sm text-slate-300">
                <span className="font-bold text-cyan-400">IIT Kharagpur</span><br />
                BTech · Mining Engineering · 2013 - 2017
              </p>
              <p className="mt-3 text-sm text-slate-300">
                <span className="font-semibold text-slate-200">GARP certified Financial Risk Manager</span>
              </p>
            </div>

            <div className="pt-10 hidden lg:block">
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <li onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'experience' ? 'text-white' : 'hover:text-cyan-400'}`}><span className={`h-px ${activeSection === 'experience' ? 'w-12 bg-white' : 'w-8 bg-slate-600'}`} /> Experience</li>
                <li onClick={() => document.getElementById('open-source').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'open-source' ? 'text-white' : 'hover:text-cyan-400'}`}><span className={`h-px ${activeSection === 'open-source' ? 'w-12 bg-white' : 'w-8 bg-slate-600'}`} /> Open Source</li>
                <li onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'projects' ? 'text-white' : 'hover:text-cyan-400'}`}><span className={`h-px ${activeSection === 'projects' ? 'w-12 bg-white' : 'w-8 bg-slate-600'}`} /> Projects</li>
              </ul>
            </div>
          </header>

          {/* Right Column: Content */}
          <div className="space-y-24">
            
            {/* Experience Section */}
            <section id="experience" className="space-y-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white lg:hidden">Experience</h3>
              
              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">JULY 2024 — PRESENT</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Manager / Sr. Software Engineer II · KKR</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Architected migration of 23 legacy SSIS pipelines to Dagster (Python) with exponential backoff and jitter for transient failures, processing 25GB daily at 99.9% reliability.</li>
                    <li>Engineered DataBrowser (FastAPI, React) with multi-layer caching (Redis + sessionStorage), saving $1.4M/year and using API logging to improve query patterns and UX.</li>
                    <li>Optimized SQL stored procedures through batch processing and built data quality checks for transaction reconciliation.</li>
                    <li>Established TDD standards with 500+ tests and 90% coverage.</li>
                    <li>Built observability with Grafana and PagerDuty, mentored two developers, and conducted 50+ technical interviews for SWE roles.</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Dagster', 'FastAPI', 'Redis', 'React', 'TDD'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">2021 — 2024</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Vice President · Goldman Sachs</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Subject matter expert for compliance models covering Spoofing, Insider Trading, Market Manipulation, and AML.</li>
                    <li>Promoted to Vice President at the earliest window and on track for Global Product Lead in model governance.</li>
                    <li>Coordinated model developers, users, audit, and regulators to meet Firmwide Model Control Policy.</li>
                    <li>Built an ongoing monitoring framework to assess model performance systematically.</li>
                    <li>Reviewed ML models using gradient boosting, ranking, and NLP approaches including word2vec, TF-IDF, and GloVe.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">2019 — 2021</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Associate · Deutsche Bank</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Served as SME for the credit asset class and ensured data quality across multiple upstream sources.</li>
                    <li>Led calibration of in-house bond benchmarks using Refinitiv yield data for ~50,000 bonds.</li>
                    <li>Built over 13,000 issuer-specific and general benchmark time series for risk calculations.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">OCT 2017 — JAN 2019</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Market Risk Controller · HSBC</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Supported New York risk managers by validating VaR and SVaR moves and ensuring risk number integrity.</li>
                    <li>Owned completeness and correctness of risk inputs from multiple engines.</li>
                    <li>Automated manual workflows with VBA macros to reduce error and improve efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">2016</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Research Consultant · WorldQuant</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Ranked in the top 100 of 3,000+ participants in the World Quant Challenge and received a part-time consultant offer.</li>
                    <li>Analyzed technical and fundamental signals to develop stat-arb models for Russell Index portfolio allocations.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative grid gap-4 p-6 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/50 transition-all">
                <span className="text-xs font-semibold text-slate-500">MAY — JUL 2016</span>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">Intern · EON Capital</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li>Evaluated high-frequency trading strategies and built end-of-day order books to identify execution gaps.</li>
                    <li>Automated daily data ingestion from the National Stock Exchange and backtested trading ideas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Open Source Section */}
            <section id="open-source" className="space-y-8">
              <div className="flex items-center gap-2 text-white">
                <Terminal size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold">Open Source Contributions</h3>
              </div>

              {/* Pandas */}
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800 space-y-4">
                <h4 className="text-white font-semibold text-base">Pandas</h4>
                <p className="text-sm text-slate-400">
                  Contributions focus on core data integrity, performance optimization, and IO robustness (30+ merged PRs).
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-cyan-300 font-semibold mb-2">Core Systems & Data Integrity</p>
                    <ul className="space-y-1 text-slate-300">
                      <li>• <span className="font-medium">Indexing & Selection:</span> Edge case fixes for diverse dtypes consistency</li>
                      <li>• <span className="font-medium">Algorithmic Fixes:</span> Improvements to pd.cut for binning and categorical data</li>
                      <li>• <span className="font-medium">Datetime Handling:</span> Fixes to pd.to_datetime for parsing accuracy and ambiguous formats</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-cyan-300 font-semibold mb-2">IO Engineering</p>
                    <ul className="space-y-1 text-slate-300">
                      <li>• <span className="font-medium">Fixed-Width Files (FWF):</span> Validation and error handling improvements for malformed input</li>
                      <li>• <span className="font-medium">Type Management:</span> Performance optimizations for unsigned integers across IO backends</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-cyan-300 font-semibold mb-2">Internal Architecture</p>
                    <ul className="space-y-1 text-slate-300">
                      <li>• <span className="font-medium">BlockManager Refinements:</span> Architectural improvements to data storage and manipulation</li>
                      <li>• <span className="font-medium">Validation Logic:</span> Hardening the codebase with strict validation checks</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <a href="https://github.com/pandas-dev/pandas/pulls?q=is%3Apr+is%3Amerged+author%3Adebnathshoham" className="text-cyan-300 hover:text-white text-sm font-medium">View all merged PRs →</a>
                </div>
              </div>

              {/* Polars */}
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800 space-y-4">
                <h4 className="text-white font-semibold text-base">Polars</h4>
                <p className="text-sm text-slate-400">
                  Contributed improvements to Polars' schema inference and nested data handling, ensuring robustness when processing complex structures.
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-cyan-300 font-semibold mb-2">Struct Column Type Inference</p>
                    <p className="text-slate-300 mb-2">
                      <span className="font-medium">The Problem:</span> When a DataFrame contained a Struct column with all null entries, the inference engine would default to a simple Null type, causing downstream operations to fail due to lost field names and internal types.
                    </p>
                    <p className="text-slate-300 mb-2">
                      <span className="font-medium">The Solution:</span> Implemented logic in the Rust backend to maintain Struct designation even when all values are null, refining AnonymousObject and dictionary-to-struct conversion for null-only sequences.
                    </p>
                    <p className="text-slate-300">
                      <span className="font-medium">Impact:</span> Improved reliability of IO and data creation modules, especially for sparse JSON data and nested structures with entirely null records.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <a href="https://github.com/pola-rs/polars/pulls?q=is%3Apr+is%3Aclosed+author%3Adebnathshoham" className="text-cyan-300 hover:text-white text-sm font-medium">View all merged PRs →</a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="space-y-8">
              <div className="flex items-center gap-2 text-white">
                <Cpu size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold">Featured Project</h3>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-800">
                <h4 className="text-white font-semibold mb-2">PrakritiAI (GenAI ESG Tool)</h4>
                <p className="text-sm">
                  Architected production RAG backend using FastAPI, LangChain, and Weaviate. Implemented semantic caching and circuit breakers for 99%+ uptime.
                </p>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="pb-20">
               <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Technical Skills</h3>
               <div className="flex flex-wrap gap-3">
                 {skills.map(skill => (
                   <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm">
                     <Code2 size={14} className="text-cyan-500" /> {skill}
                   </div>
                 ))}
               </div>
            </section>


          </div>
        </div>
      </main>
    </div>
  );
};

export default App;