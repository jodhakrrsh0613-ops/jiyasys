import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './SoftwareBuildingPage.css';
import './CaseStudiesPage.css';

export const caseStudies = [
  {
    id: 'tarazu-siddhant',
    title: 'Tarazu Siddhant Academy',
    category: 'FinTech / EdTech',
    description: 'Live trading classes, option chain analysis, and advanced LTP Calculator tools for stock market traders.',
    fullInfo: 'We built an educational and analytics platform for Tarazu Siddhant Academy that integrates real-time live trading classes with an advanced option chain analysis tool and LTP calculator. This allows students and traders to access expert training and critical market data in one unified, high-performance dashboard.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    stats: ['10,000+ Active Traders', 'Real-time LTP Calculations']
  },
  {
    id: 'sanatan-reet',
    title: 'Sanatan Reet',
    category: 'E-Commerce / Entertainment',
    description: 'A unique platform delivering custom-crafted personalized songs for weddings, birthdays, and anniversaries.',
    fullInfo: 'Sanatan Reet needed a seamless digital experience for customers to order personalized music for special occasions. We developed an intuitive eCommerce order flow that captures user stories, matches them with artists, and delivers custom audio tracks, streamlining the entire creative process from brief to final delivery.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    stats: ['500+ Custom Songs Delivered', '100% Client Satisfaction']
  },
  {
    id: '45-degrees',
    title: '45 Degrees: Automation Scale',
    category: 'Enterprise Automation',
    description: 'Transforming luxury travel operations by implementing a unified automation platform.',
    fullInfo: '45 Degrees faced significant bottlenecks in their manual itinerary creation and supplier coordination. We implemented a custom process orchestration engine that reduced manual tasks by 70%. The system integrates with global travel APIs and automates client communications, allowing the team to handle 3x the volume without adding headcount.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    stats: ['70% manual task reduction', '3x volume capacity']
  },
  {
    id: 'clandestine',
    title: 'Clandestine: ML Security',
    category: 'Machine Learning',
    description: 'Slashing fraud false positives and investigation time through adaptive AI systems.',
    fullInfo: 'Clandestine needed a way to move beyond rigid rule-based fraud detection. We built an adaptive machine learning system that learns from new threat patterns in real-time. This reduced false positives by 43% and automated 60% of initial investigations, allowing security teams to focus on complex, high-value threats.',
    image: 'https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?scale-down-to=1024&width=1200&height=904',
    stats: ['43% fewer false positives', '60% faster resolution']
  },
  {
    id: 'globalbank',
    title: 'GlobalBank: AI Lending',
    category: 'Fintech / AI',
    description: 'Cutting lending decision times from days to hours with a unified AI-powered system.',
    fullInfo: 'GlobalBank’s manual lending review process was a major bottleneck for customer growth. We engineered a unified AI lending dashboard that automates data collection, credit assessment, and compliance checks. Decision times dropped from 48 hours to under 2 hours, with 99.2% compliance accuracy maintained.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    stats: ['95% faster decisioning', '99.2% compliance accuracy']
  },
  {
    id: 'railspeed',
    title: 'Railspeed: Predictive Rail',
    category: 'Logistics / AI',
    description: 'Eliminating 42% of operational delays through predictive AI maintenance scheduling.',
    fullInfo: 'Railspeed needed to move from reactive to proactive maintenance for their European rail network. We developed a predictive maintenance platform that analyzes real-time sensor data from locomotives. The system predicts potential failures up to 12 hours in advance, reducing unplanned downtime by 42% and saving millions in operational costs.',
    image: '/railspeed_ai_logistics.png',
    stats: ['42% delay reduction', '$2.4M annual savings']
  }
];

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="software-page case-studies-page">
      <SEO 
        title="Case Studies" 
        description="Explore our portfolio of successful projects and see how we help businesses grow through technology."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="sw-hero">
          <div className="sw-hero-inner">


            <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
              <div className="sw-hero-badge">
                <span className="sw-badge-dot"></span>
                Portfolio
              </div>
              <h1 className="sw-hero-title">Our Success Stories</h1>
              <p className="sw-hero-desc">
                Discover how Jiyasys has helped enterprises across the globe achieve their digital transformation goals.
              </p>
            </AnimateOnScroll>

            <div className="sw-hero-visual">
              <div className="sw-hero-grid-pattern">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="sw-grid-dot" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section matching screenshot layout */}
        <section className="portfolio-section">
          <div className="portfolio-container">
            {caseStudies.map((item, idx) => (
              <AnimateOnScroll key={item.id} animation="fade-up" delay={0.1} className="portfolio-card">
                <div className="portfolio-card-left">
                  <div className="portfolio-image-wrapper">
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-image-overlay">
                      <span className="overlay-arrow">↗</span> {item.title}
                    </div>
                  </div>
                </div>
                <div className="portfolio-card-right">
                  <h2 className="portfolio-title">{item.title}</h2>
                  <p className="portfolio-desc">{item.fullInfo}</p>
                  
                  <div className="portfolio-stats">
                    {item.stats.map((stat, sIdx) => {
                      const statParts = stat.split(' ');
                      const metric = statParts[0];
                      const label = statParts.slice(1).join(' ');
                      return (
                        <div key={sIdx} className="stat-block">
                          <div className="stat-value">
                            <span className="stat-square">■</span> {metric}
                          </div>
                          <div className="stat-label">{label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
