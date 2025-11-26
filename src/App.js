import React, { useState, useEffect } from 'react';
import { Database, Cloud, Code, Mail, Github, Linkedin, ChevronDown, ExternalLink, Server, Cpu, Workflow } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "SQL Data Warehouse",
      date: "Aug-Sep 2025",
      description: "Modern data warehouse using SQL Server and Medallion Architecture (Bronze, Silver, Gold layers) consolidating ERP and CRM data.",
      tech: ["SQL Server", "ETL", "Star Schema", "Data Modeling"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/SQL-Data-Warehouse-Medallion-Architecture"
    },
    {
      title: "Kafka-to-Snowflake Streaming",
      date: "Nov 2025",
      description: "Real-time data streaming pipeline from Kafka to Snowflake with automated, containerized workflows using Docker Compose.",
      tech: ["Kafka", "Snowflake", "Python", "Docker"],
      icon: <Workflow className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/Kafka-to-Snowflake-Streaming-Pipeline"
    },
    {
      title: "Snowflake Weather Data Warehouse",
      date: "Sep 2025",
      description: "Weather data warehouse with star schema design for efficient analytics and ETL workflows for structured data ingestion.",
      tech: ["Snowflake", "Star Schema", "ETL", "Analytics"],
      icon: <Cloud className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/Snowflake-Weather-Data-Warehouse"
    },
    {
      title: "S3-to-Lambda Automation",
      date: "Nov 2025",
      description: "Serverless ETL automation with AWS Lambda and S3 event triggers for real-time data processing with CloudWatch monitoring.",
      tech: ["AWS Lambda", "S3", "IAM", "CloudWatch"],
      icon: <Server className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/S3-to-Lambda-Automation"
    },
    {
      title: "S&P 500 Airflow Pipeline",
      date: "Oct 2025",
      description: "Daily orchestrated pipeline fetching OHLCV data for 500+ tickers using Apache Airflow with idempotent ETL and error handling.",
      tech: ["Apache Airflow", "Docker", "Python", "Snowflake"],
      icon: <Cpu className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/SP500-Airflow-Pipeline"
    },
    {
      title: "Airflow Open-Weather Pipeline",
      date: "Oct 2025",
      description: "Real-time weather data pipeline using Apache Airflow to ingest OpenWeatherMap API data into Snowflake via S3.",
      tech: ["Airflow", "API", "Python", "S3"],
      icon: <Cloud className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/Airflow-Open-Weather-Pipeline"
    },
    {
      title: "Slowly Changing Dimensions",
      date: "Oct 2025",
      description: "Implemented SCD Type 1 & 2 in Snowflake using MERGE statements for tracking customer dimension changes with full historical versioning.",
      tech: ["Snowflake", "SQL", "Data Modeling", "MERGE"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/Hamza-khan10/Slowly-Changing-Dimensions"
    }
  ];

  const skills = {
    "Programming & Scripting": ["Python", "SQL", "Bash"],
    "Cloud & Data Storage": ["AWS (S3, EC2, IAM)", "Snowflake", "PostgreSQL"],
    "Orchestration & Workflow": ["Apache Airflow", "Docker", "XComs", "Sensors"],
    "Data Engineering": ["ETL/ELT", "Medallion Architecture", "Star Schema", "SCD"],
    "Libraries & Tools": ["Pandas", "yfinance", "Selenium", "BeautifulSoup", "Streamlit", "Git"]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HK
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto">
              <img 
                src="E:\adobe\black\WhatsApp Image 2024-08-19 at 10.44.51 PM.jpeg" 
                alt="Muhammad Hamza Khan"
                className="w-full h-full rounded-full object-cover bg-slate-800"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center" style={{display: 'none'}}>
                <Database className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Muhammad Hamza Khan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Junior Data Engineer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable ETL pipelines and data solutions with AWS, Apache Airflow, and Snowflake
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/Hamza-khan10" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-khan10/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hk6417333@gmail.com"
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              Data Engineer with proven ability to design and deploy production-grade ETL pipelines using AWS, Apache Airflow, and Snowflake. 
              I've delivered 7+ end-to-end data engineering projects processing 10,000+ records daily across stock market and weather analytics systems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I combine hands-on experience in data warehousing, workflow automation, and cloud architecture with strong Python and SQL proficiency. 
              Currently pursuing a Bachelor's degree in Business and Information Technology at Virtual University of Pakistan.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Freelance Data Reviewer</p>
                    <p className="text-sm text-gray-400">Humantic.com (Oct 2024 - Present)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Data Reviewer</p>
                    <p className="text-sm text-gray-400">Servixer LLC (Jun 2023 - Oct 2024)</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Certifications</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Associate Data Engineer (DataCamp)</li>
                  <li>• AWS Data Engineering Foundations</li>
                  <li>• Cloud Data Engineering (S.M.I.T)</li>
                  <li>• Snowflake Badges (5+)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{project.date}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900/50 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Hamza-khan10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-900/50 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing data engineering opportunities and collaborations
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="space-y-6">
              <a
                href="mailto:hk6417333@gmail.com"
                className="flex items-center justify-center space-x-3 text-lg hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>hk6417333@gmail.com</span>
              </a>
              <a
                href="https://github.com/Hamza-khan10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-lg hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>github.com/Hamza-khan10</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-khan10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-lg hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/hamza-khan10</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Muhammad Hamza Khan. 
          </p>
        </div>
      </footer>
    </div>
  );
}