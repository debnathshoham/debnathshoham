import React, { useState, useEffect } from "react";
import { Mail, Terminal, Code2, Cpu, Moon, Sun } from "lucide-react";

const App = () => {
  const themeStorageKey = "theme-preference";
  const skills = ['Python', 'Snowflake' , 'SQL Server', 'FastAPI', 'Dagster', 'Redis', 'Docker', 'AWS', 'LangChain', 'Weaviate', 'k8s', 'pandas', 'polars'];
  const [activeSection, setActiveSection] = useState('experience');
  const [themePreference, setThemePreference] = useState(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    return window.localStorage.getItem(themeStorageKey) ?? "system";
  });
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const resolvedTheme = themePreference === "system" ? systemTheme : themePreference;
  const getIndicatorClass = (section) => (
    activeSection === section ? "w-12 bg-[var(--heading-text)]" : `w-8 ${themeClasses.lineMuted}`
  );

  const themeClasses = {
    root: "min-h-screen bg-[var(--page-bg)] text-[var(--page-text)] font-sans selection:bg-cyan-500/30",
    heading: "text-[var(--heading-text)]",
    body: "text-[var(--page-text)]",
    muted: "text-[var(--muted-text)]",
    subtle: "text-[var(--subtle-text)]",
    accent: "text-[var(--accent)]",
    card: "bg-[var(--card-bg)] border-[var(--card-border)]",
    cardHover: "hover:border-[var(--card-border)] hover:bg-[var(--card-hover)]",
    chip: "bg-[var(--chip-bg)] text-[var(--chip-text)]",
    nav: "text-[var(--page-text)]",
    navActive: "text-[var(--heading-text)]",
    navHover: "hover:text-[var(--heading-text)]",
    lineMuted: "bg-[var(--subtle-text)]",
  };

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

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
    window.localStorage.setItem(themeStorageKey, themePreference);
  }, [resolvedTheme, themePreference]);

  useEffect(() => {
    if (themePreference !== "system") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themePreference]);

  return (
    <div className={themeClasses.root}>
      <button
        type="button"
        onClick={() => setThemePreference(resolvedTheme === "dark" ? "light" : "dark")}
        className={`fixed right-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur transition ${themeClasses.card} ${themeClasses.heading} hover:shadow-lg`}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      >
        {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        <span>{resolvedTheme === "dark" ? "Light" : "Dark"}</span>
      </button>

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Fixed Info */}
          <header className="lg:sticky lg:top-32 lg:h-fit space-y-6">
            <div className="flex justify-center">
              <div className={`w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-full border ${themeClasses.card} shadow-xl shadow-cyan-950/20`}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/photos/shoham-320.avif 320w, /photos/shoham-640.avif 640w, /photos/shoham-960.avif 960w"
                    sizes="(min-width: 1024px) 9rem, 8rem"
                  />
                  <source
                    type="image/webp"
                    srcSet="/photos/shoham-320.webp 320w, /photos/shoham-640.webp 640w, /photos/shoham-960.webp 960w"
                    sizes="(min-width: 1024px) 9rem, 8rem"
                  />
                  <img
                    src="/photos/shoham-640.webp"
                    alt="Shoham Debnath"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            <div>
              <h1 className={`text-5xl font-extrabold tracking-tight ${themeClasses.heading}`}>Shoham Debnath</h1>
              <h2 className={`text-xl mt-3 font-medium ${themeClasses.accent}`}>Software Developer @ KKR</h2>
              <p className={`mt-6 leading-relaxed max-w-md ${themeClasses.muted}`}>
                Driving data platform modernization, backend engineering, compliance model governance, and open source performance engineering.
              </p>
            </div>

            <nav className={`flex gap-6 py-4 items-center text-sm font-medium ${themeClasses.nav}`}>
              <a href="https://www.linkedin.com/in/debnathshoham/" className={`transition-colors ${themeClasses.navHover}`}>LinkedIn</a>
              <a href="https://github.com/debnathshoham" className={`transition-colors ${themeClasses.navHover}`}>GitHub</a>
              <a href="mailto:debnathshoham@gmail.com" className={`transition-colors ${themeClasses.navHover}`}><Mail size={24} /></a>
            </nav>

            <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
              <p className={`text-sm ${themeClasses.body}`}>
                <span className={`font-bold ${themeClasses.accent}`}>IIT Kharagpur</span><br />
                BTech · Mining Engineering · 2013 - 2017
              </p>
              <p className={`mt-3 text-sm ${themeClasses.body}`}>
                <span className={`font-semibold ${themeClasses.heading}`}>GARP certified Financial Risk Manager</span>
              </p>
            </div>

            <div className="pt-10 hidden lg:block">
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[var(--subtle-text)]">
                <li onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'experience' ? themeClasses.navActive : 'hover:text-cyan-400'}`}><span className={`h-px ${getIndicatorClass('experience')}`} /> Experience</li>
                <li onClick={() => document.getElementById('open-source').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'open-source' ? themeClasses.navActive : 'hover:text-cyan-400'}`}><span className={`h-px ${getIndicatorClass('open-source')}`} /> Open Source</li>
                <li onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className={`flex items-center gap-4 cursor-pointer transition-all ${activeSection === 'projects' ? themeClasses.navActive : 'hover:text-cyan-400'}`}><span className={`h-px ${getIndicatorClass('projects')}`} /> Projects</li>
              </ul>
            </div>
          </header>

          {/* Right Column: Content */}
          <div className="space-y-24">
            
            {/* Experience Section */}
            <section id="experience" className="space-y-12">
              <h3 className={`text-sm font-bold uppercase tracking-widest lg:hidden ${themeClasses.heading}`}>Experience</h3>
              
              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>JULY 2024 — PRESENT</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Manager / Sr. Software Engineer II · KKR</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Architected migration of 23 legacy SSIS pipelines to Dagster (Python) with exponential backoff and jitter for transient failures, processing 25GB daily at 99.9% reliability.</li>
                    <li>Engineered DataBrowser (FastAPI, React) with multi-layer caching (Redis + sessionStorage), saving $1.4M/year and using API logging to improve query patterns and UX.</li>
                    <li>Optimized SQL stored procedures through batch processing and built data quality checks for transaction reconciliation.</li>
                    <li>Established TDD standards with 500+ tests and 90% coverage.</li>
                    <li>Built observability with Grafana and PagerDuty, and conducted 50+ technical interviews for SWE roles.</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Dagster', 'FastAPI', 'Redis', 'React', 'TDD'].map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${themeClasses.chip}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>2021 — 2024</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Vice President · Goldman Sachs</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Subject matter expert for compliance models covering Spoofing, Insider Trading, Market Manipulation, and AML.</li>
                    <li>Promoted to Vice President at the earliest window and on track for Global Product Lead in model governance.</li>
                    <li>Coordinated model developers, users, audit, and regulators to meet Firmwide Model Control Policy.</li>
                    <li>Built an ongoing monitoring framework to assess model performance systematically.</li>
                    <li>Reviewed ML models using gradient boosting, ranking, and NLP approaches including word2vec, TF-IDF, and GloVe.</li>
                  </ul>
                </div>
              </div>

              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>2019 — 2021</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Associate · Deutsche Bank</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Served as SME for the credit asset class and ensured data quality across multiple upstream sources.</li>
                    <li>Led calibration of in-house bond benchmarks using Refinitiv yield data for ~50,000 bonds.</li>
                    <li>Built over 13,000 issuer-specific and general benchmark time series for risk calculations.</li>
                  </ul>
                </div>
              </div>

              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>OCT 2017 — JAN 2019</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Market Risk Controller · HSBC</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Supported New York risk managers by validating VaR and SVaR moves and ensuring risk number integrity.</li>
                    <li>Owned completeness and correctness of risk inputs from multiple engines.</li>
                    <li>Automated manual workflows with VBA macros to reduce error and improve efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>2016</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Research Consultant · WorldQuant</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Ranked in the top 100 of 3,000+ participants in the World Quant Challenge and received a part-time consultant offer.</li>
                    <li>Analyzed technical and fundamental signals to develop stat-arb models for Russell Index portfolio allocations.</li>
                  </ul>
                </div>
              </div>

              <div className={`group relative grid gap-4 p-6 rounded-xl border border-transparent transition-all ${themeClasses.cardHover}`}>
                <span className={`text-xs font-semibold ${themeClasses.subtle}`}>MAY — JUL 2016</span>
                <div>
                  <h4 className={`font-bold transition-colors group-hover:text-cyan-400 ${themeClasses.heading}`}>Intern · EON Capital</h4>
                  <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${themeClasses.body}`}>
                    <li>Evaluated high-frequency trading strategies and built end-of-day order books to identify execution gaps.</li>
                    <li>Automated daily data ingestion from the National Stock Exchange and backtested trading ideas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Open Source Section */}
            <section id="open-source" className="space-y-8">
              <div className={`flex items-center gap-2 ${themeClasses.heading}`}>
                <Terminal size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold">Open Source Contributions</h3>
              </div>

              {/* Pandas */}
              <div className={`p-6 rounded-xl space-y-4 ${themeClasses.card} border`}>
                <h4 className={`font-semibold text-base ${themeClasses.heading}`}>Pandas</h4>
                <p className={`text-sm ${themeClasses.muted}`}>
                  Contributions focus on core data integrity, performance optimization, and IO robustness (30+ merged PRs).
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className={`font-semibold mb-2 ${themeClasses.accent}`}>Core Systems & Data Integrity</p>
                    <ul className={`space-y-1 ${themeClasses.body}`}>
                      <li>• <span className="font-medium">Indexing & Selection:</span> Edge case fixes for diverse dtypes consistency</li>
                      <li>• <span className="font-medium">Algorithmic Fixes:</span> Improvements to pd.cut for binning and categorical data</li>
                      <li>• <span className="font-medium">Datetime Handling:</span> Fixes to pd.to_datetime for parsing accuracy and ambiguous formats</li>
                    </ul>
                  </div>

                  <div>
                    <p className={`font-semibold mb-2 ${themeClasses.accent}`}>IO Engineering</p>
                    <ul className={`space-y-1 ${themeClasses.body}`}>
                      <li>• <span className="font-medium">Fixed-Width Files (FWF):</span> Validation and error handling improvements for malformed input</li>
                      <li>• <span className="font-medium">Type Management:</span> Performance optimizations for unsigned integers across IO backends</li>
                    </ul>
                  </div>

                  <div>
                    <p className={`font-semibold mb-2 ${themeClasses.accent}`}>Internal Architecture</p>
                    <ul className={`space-y-1 ${themeClasses.body}`}>
                      <li>• <span className="font-medium">BlockManager Refinements:</span> Architectural improvements to data storage and manipulation</li>
                      <li>• <span className="font-medium">Validation Logic:</span> Hardening the codebase with strict validation checks</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--card-border)]">
                  <a href="https://github.com/pandas-dev/pandas/pulls?q=is%3Apr+is%3Amerged+author%3Adebnathshoham" className={`text-sm font-medium ${themeClasses.accent} hover:text-[var(--heading-text)]`}>View all merged PRs →</a>
                </div>
              </div>

              {/* Polars */}
              <div className={`p-6 rounded-xl space-y-4 ${themeClasses.card} border`}>
                <h4 className={`font-semibold text-base ${themeClasses.heading}`}>Polars</h4>
                <p className={`text-sm ${themeClasses.muted}`}>
                  Contributed improvements to Polars' schema inference and nested data handling, ensuring robustness when processing complex structures.
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className={`font-semibold mb-2 ${themeClasses.accent}`}>Struct Column Type Inference</p>
                    <p className={`mb-2 ${themeClasses.body}`}>
                      <span className="font-medium">The Problem:</span> When a DataFrame contained a Struct column with all null entries, the inference engine would default to a simple Null type, causing downstream operations to fail due to lost field names and internal types.
                    </p>
                    <p className={`mb-2 ${themeClasses.body}`}>
                      <span className="font-medium">The Solution:</span> Implemented logic in the Rust backend to maintain Struct designation even when all values are null, refining AnonymousObject and dictionary-to-struct conversion for null-only sequences.
                    </p>
                    <p className={themeClasses.body}>
                      <span className="font-medium">Impact:</span> Improved reliability of IO and data creation modules, especially for sparse JSON data and nested structures with entirely null records.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--card-border)]">
                  <a href="https://github.com/pola-rs/polars/pulls?q=is%3Apr+is%3Aclosed+author%3Adebnathshoham" className={`text-sm font-medium ${themeClasses.accent} hover:text-[var(--heading-text)]`}>View all merged PRs →</a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="space-y-8">
              <div className={`flex items-center gap-2 ${themeClasses.heading}`}>
                <Cpu size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold">Featured Project</h3>
              </div>
              <div className={`p-6 rounded-xl border ${themeClasses.card}`}>
                <h4 className={`font-semibold mb-2 ${themeClasses.heading}`}>PrakritiAI (GenAI ESG Tool)</h4>
                <p className={`text-sm ${themeClasses.body}`}>
                  Architected production RAG backend using FastAPI, LangChain, and Weaviate. Implemented semantic caching and circuit breakers for 99%+ uptime.
                </p>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="pb-20">
               <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${themeClasses.heading}`}>Technical Skills</h3>
               <div className="flex flex-wrap gap-3">
                 {skills.map(skill => (
                   <div key={skill} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border ${themeClasses.card}`}>
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
