import React, { useState, useEffect } from 'react';
import './index.css';

// Keep the local import for Zainab since you have that file
import SPEAKER_IMG from "./assets/zainab.png";
import LOGO_IMG from "./assets/logo.png";

// Exact live extracted images for Dr. Ravi Sharma and Dr. Apurv Mehra
const MENTOR_2 = "https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg?w=400&h=500&fit=crop&crop=faces";
const MENTOR_3 = "https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg?w=400&h=700&fit=crop&crop=faces";

const slideDataManifest = [
  {
    number: "01",
    title: "A System That Keeps You on Track",
    description: "Even the best teaching needs the right structure to deliver results. That's where the bootcamp system supports you.",
    imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
  },
  {
    number: "02",
    title: "An Environment Built for Focus",
    description: "At the Vidya Jeevan Experience Centre, everything is designed to help you stay distraction-free, consistent, and fully focused on your goal.",
    imgUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800"
  },
  {
    number: "03",
    title: "Structured, Disciplined Preparation",
    description: "A clear plan, regular testing, and continuous feedback—so you always know where you stand and what to improve.",
    imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
  }
];

export default function App() {
  // Carousel State Machine Tracking Configuration
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Interactive Modal State Hooks
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Lead Capture Form States
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadExam, setLeadExam] = useState('NEET PG');
  const [leadProgram, setLeadProgram] = useState('Program 1');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Ask Me Anything States
  const [amaQuestion, setAmaQuestion] = useState('');
  const [amaSubmitted, setAmaSubmitted] = useState(false);

  // Autoplay Carousel Effect (Resets timer on activeSlide change)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideDataManifest.length);
    }, 4500); // Cycles every 4.5 seconds

    return () => clearInterval(interval);
  }, [activeSlide, isHovered]);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -20px 0px -20px', // slightly inset to trigger smoothly
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Sticky Side Ribbon */}
      <div className="side-ribbon" onClick={() => setDownloadModalOpen(true)}>◀ GET THE APP</div>

      {/* Header Navigation Module */}
     {/* Header Navigation Module */}
<header className="navbar">
  <div className="logo-container">
    <img src={LOGO_IMG} alt="coreBTR Logo" className="navbar-logo" />
  </div>
  <nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About Dr. ZV</a>
    <a href="#offline">CoreBTR Offline</a>
    <a href="#bootcamp">CoreBTR Bootcamp</a>
    <a href="#books">CoreBTR Books <span className="arrow-down"></span></a>
    <a href="#plans">Buy New Plans <span className="arrow-down"></span></a>
    <a href="#schedules">Schedules <span className="arrow-down"></span></a>
    <a href="#results">Results <span className="arrow-down"></span></a>
    <a href="#blogs">Blogs</a>
    <a href="#login" className="login-btn">Login | Signup</a>
  </nav>
</header>

      {/* Hero Section Container */}
      <main className="hero-section" id="home">
        <div className="hero-left">
          <h1>CoreBTR<br /><span>BOOTCAMP</span></h1>
          <p className="location-subtitle">At Vidya Jeevan, Greater Noida</p>
        </div>

        <div className="hero-center">
          <img src={SPEAKER_IMG} alt="Dr. Zainab Vora" className="speaker-img" />
        </div>

        <div className="hero-right">
          <div>
            <p className="by-prefix">by</p>
            <h2 className="faculty-title">Dr. Zainab Vora</h2>
          </div>
          <div className="bordered-text-box">When Concepts Click<br />Everything Changes</div>
          <div className="bordered-text-box">Registration Closed For<br />NEET PG Bootcamp</div>
        </div>
      </main>

      {/* Overview Content Section */}
      <section className="overview-section reveal-on-scroll fade-in-up" id="about">
        <div className="overview-container">
          <h2 className="overview-title">Core<span>BTR</span> Bootcamp</h2>
          <p className="overview-subtitle">Learn with Dr. Zainab Vora. Transform with the System.</p>
          <p className="overview-body-text">
            This is where concepts finally make sense. Where revision becomes structured and where your preparation starts moving in the right direction. <strong>At coreBTR Bootcamp</strong>, you're not just attending classes, you're learning directly under <strong>Dr. Zainab Vora</strong>, with a system designed to help you <strong>stay consistent, focused, and exam-ready.</strong> You don't just study more, you study better. <strong>Start Learning Smarter.</strong>
          </p>
        </div>
      </section>

      {/* Programs Pricing & Schedule Section */}
      <section className="programs-section" id="offline">
        <div className="programs-container">
          <div className="programs-main-header">
            <h2>Core<span>BTR</span> NEET PG T&D Bootcamp at Vidya Jeevan</h2>
            <p className="schedule-timeline">Starts From 28th May till 30th Aug 2026</p>
            <p className="schedule-timeline">3 Months offline Test & Discussion Program</p>
            <p className="program-description-tag">An intensive, high-impact offline program for serious <strong>NEET PG Aspirants.</strong></p>
            <p className="design-subtext"><strong>Designed for focused learning</strong>, disciplined preparation, and a completely distraction-free environment.</p>
          </div>

          <div className="cards-grid">
            {/* Program Path Card 1 */}
            <div className="path-card card-orange reveal-on-scroll fade-in-up">
              <div>
                <h3 className="card-title-orange">Program 1</h3>
                <p className="card-italic-intro">Live Classes + Personal Cubicle with Desktop for CBT / self study</p>
                <ul className="features-bullet-list">
                  <li>Subject wise computer based test followed by live discussion</li>
                  <li>Grand Tests (every 15 days) followed by live discussion</li>
                  <li>Weekly doubt solving sessions</li>
                  <li>Daily Mini Tests on CBT Desktop</li>
                  <li>Personal Desktop access for self study</li>
                </ul>
              </div>
              <div>
                <div className="fee-badge-box text-orange">Fees: <span>Rs 37,000</span></div>
                <button className="action-closed-btn btn-bg-orange">Registration Closed</button>
              </div>
            </div>

            {/* Program Path Card 2 */}
            <div className="path-card card-blue reveal-on-scroll fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="card-title-blue">Program 2</h3>
                <p className="card-italic-intro">Relay Classes + Personal Cubicle for self study (No desktop)</p>
                <ul className="features-bullet-list">
                  <li>Subject wise computer based test on Desktop followed by discussion through relay</li>
                  <li>GT (every 15 days) followed by discussion through relay</li>
                  <li>Weekly doubt solving sessions through relay</li>
                  <li>Daily Mini Tests on own device</li>
                  <li>Personal cubicle space for self study <strong>(No desktop)</strong></li>
                </ul>
              </div>
              <div>
                <div className="fee-badge-box text-blue">Fees: <span>Rs 32,000</span></div>
                <button className="action-closed-btn btn-bg-blue">Registration Closed</button>
              </div>
            </div>
          </div>

          <div className="bottom-alert-banner">
            <h3>Registrations will be on First come-first serve basis</h3>
            <p className="highlight-yellow">Registration may close anytime without prior notice</p>
            <p>No refund / No transfer after registration</p>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="notice-schedule-section reveal-on-scroll fade-in-up">
        <div className="notice-schedule-container">
          <h3 className="notice-heading">Important Notice</h3>
          <ul className="notice-list">
            <li>Seats cannot be cancelled or transferred to anyone, including friends.</li>
            <li>Seats cannot be shifted to any online plans.</li>
            <li>Registrations made using someone else's account will not be accepted.</li>
            <li>Registration will be accepted only your own account and name</li>
          </ul>
          <hr className="notice-divider" />
          <div className="schedule-cta-block">
            <h2 className="schedule-cta-title">Core<span>BTR</span> NEET PG T&D Bootcamp Schedule</h2>
            <button className="schedule-btn">Check Schedule</button>
          </div>
        </div>
      </section>

      {/* Auditorium & CBT Rooms Features Showcase Section */}
      <section className="features-showcase-section" id="bootcamp">
        <div className="showcase-container">
          <div className="showcase-block reveal-on-scroll fade-in-up">
            <div className="showcase-banner-frame">
              <h3 className="banner-center-title">Sabr Auditorium</h3>
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200" alt="Sabr Auditorium Lecture Hall" />
              <div className="banner-bottom-strip">LEARN THE BTR WAY : <span className="text-accent-yellow">19 SUBJECTS | SYSTEM-WISE | HIGH-YIELD</span></div>
            </div>
            <h2 className="showcase-text-heading">Concepts. Clarity. Confidence.</h2>
            <p className="showcase-text-paragraph">With <strong>Dr. Zainab Vora</strong>, learning is not about memorizing more—it's about understanding better. Complex topics are simplified with integrated, system-wise learning across all 19 subjects.</p>
            <div className="showcase-bullets-inline">
              <div className="showcase-bullet-item"><span className="purple-check">✓</span> High-yield focus for NEET PG, INI-CET & FMGE</div>
              <div className="showcase-bullet-item"><span className="purple-check">✓</span> System-wise structured preparation</div>
              <div className="showcase-bullet-item"><span className="purple-check">✓</span> Built for retention, recall & real exam pressure</div>
            </div>
            <p className="approach-footer-tag">This is not just teaching. <span>This is the BTR approach.</span></p>
          </div>

          <div className="showcase-block reveal-on-scroll fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="showcase-banner-frame">
              <h3 className="banner-center-title">CBT Rooms</h3>
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200" alt="CBT Rooms Computer Laboratory" />
              <div className="banner-bottom-strip"><span className="text-accent-yellow">REAL EXAM ENVIRONMENT. REAL PREPARATION.</span></div>
            </div>
            <h2 className="showcase-text-heading">Consistent Testing. Real Progress.</h2>
            <p className="showcase-text-paragraph"><strong>After completing each subject</strong>, you'll take structured tests to assess your understanding and identify gaps. On non-class days, daily mini tests ensure you stay in the habit of solving MCQs.</p>
            <p className="blue-status-subtext">So practice becomes consistent, <strong>not occasional.</strong></p>
          </div>
        </div>
      </section>

      {/* Interactive State-Driven Carousel Section */}
      <section className="prefer-section reveal-on-scroll fade-in-up">
        <div className="prefer-container">
          <div className="prefer-tagline">What's Inside</div>
          <h2 className="prefer-main-title">Why Students Prefer Core<span>BTR</span> Bootcamp</h2>
          <p className="prefer-description">Great preparation is built on both the right learning and the right environment. <strong>At coreBTR Bootcamp, structured teaching goes hand in hand with discipline, guidance, and a system designed to keep you consistent.</strong> That's what makes the experience at Vidya Jeevan Experience Centre different—<strong>it's not just a venue but a thoughtfully built ecosystem shaped by the journeys of thousands of students.</strong></p>
          
          <div 
            className="prefer-workspace"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="prefer-tabs-column">
              {slideDataManifest.map((slide, index) => (
                <div 
                  key={index} 
                  className={`prefer-tab-item ${activeSlide === index ? 'active-tab' : ''}`}
                  onClick={() => setActiveSlide(index)}
                >
                  <div className="tab-number-badge">{slide.number}</div>
                  <div className="tab-text-holder">
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </div>
                  <span className="tab-chevron-indicator">→</span>
                </div>
              ))}
            </div>

            <div>
              <div className="prefer-media-column">
                <img 
                  key={activeSlide}
                  src={slideDataManifest[activeSlide].imgUrl} 
                  alt="Carousel Active Frame" 
                  className="prefer-media-img carousel-slide-animate" 
                />
                <div className="media-floating-overlay">
                  <span className="overlay-orange-dot">{slideDataManifest[activeSlide].number}</span> 
                  {slideDataManifest[activeSlide].title}
                </div>
              </div>
              <div className="slider-pagination-dots">
                {slideDataManifest.map((_, index) => (
                  <span 
                    key={index} 
                    className={`pag-dot ${activeSlide === index ? 'active-dot' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Mapping Section */}
      <section className="mentors-section" id="books">
        <div className="mentors-container">
          <div className="mentors-tagline">Meet Your Mentors</div>
          <h2 className="mentors-main-title">Mentorship That Keeps You <span>Steady</span></h2>
          <p className="mentors-description">Guided by Dr. Zainab Vora along with Dr. Ravi Sharma & Dr. Apurv Mehra, you stay consistent, focused, and steady through every phase.</p>

          <div className="mentors-grid">
            <div className="mentor-profile-card reveal-on-scroll fade-in-up">
              <div className="mentor-image-canvas">
                <img src={SPEAKER_IMG} alt="Dr. Zainab Vora" className="mentor-portrait mentor-cutout" />
              </div>
              <div className="mentor-details-holder">
                <div className="card-top-line line-black"></div>
                <h3>Dr. Zainab Vora</h3>
                <p>Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed.</p>
              </div>
            </div>

            <div className="mentor-profile-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="mentor-image-canvas">
                <img src={MENTOR_2} alt="Dr. Ravi Sharma" className="mentor-portrait mentor-cover" />
              </div>
              <div className="mentor-details-holder">
                <div className="card-top-line line-gray"></div>
                <h3>Dr. Ravi Sharma</h3>
                <p>Bringing calm, discipline, and mental strength to keep you grounded under pressure.</p>
              </div>
            </div>

            <div className="mentor-profile-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="mentor-image-canvas">
                <img src={MENTOR_3} alt="Dr. Apurv Mehra" className="mentor-portrait mentor-cover" />
              </div>
              <div className="mentor-details-holder">
                <div className="card-top-line line-orange"></div>
                <h3>Dr. Apurv Mehra</h3>
                <p>Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Banner Ribbon */}
      <section className="pitch-banner-wrapper reveal-on-scroll fade-in-up">
        <div className="pitch-banner-container">
          <div className="pitch-left-box">
            <span className="orange-indicator-line"></span>
            <h2>Why Students Choose coreBTR Bootcamp</h2>
          </div>
          <div className="pitch-right-box">
            <p className="pitch-intro-tag">Because they get what they need:</p>
            <ul className="pitch-dot-bullets">
              <li><span className="bullet-yellow-dot"></span>The right teacher</li>
              <li><span className="bullet-yellow-dot"></span>The right system</li>
              <li><span className="bullet-yellow-dot"></span>The right environment</li>
            </ul>
            <p className="pitch-italic-footer">And at CoreBTR Bootcamp, they get all three.</p>
          </div>
        </div>
      </section>

      {/* Different Matrix Grid Section */}
      <section className="different-matrix-section" id="schedules">
        <div className="matrix-container">
          <div className="matrix-header-block">
            <div className="matrix-mini-tag">What's Inside</div>
            <h2>What Makes It <span>Different</span> From Other Offline Classes</h2>
          </div>

          <div className="matrix-features-grid">
            <div className="matrix-card reveal-on-scroll fade-in-up">
              <div className="card-meta-row">
                <span className="matrix-number-badge">01</span>
                <span className="matrix-blue-tag">Not Just Lectures</span>
              </div>
              <h3>A Complete System</h3>
              <p>Bootcamp Ensures Daily Testing + Analysis + Revision</p>
            </div>

            <div className="matrix-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card-meta-row">
                <span className="matrix-number-badge">02</span>
                <span className="matrix-blue-tag">Specific Focus</span>
              </div>
              <h3>Exam-Specific Focus</h3>
              <p>Designed Exclusively for NEET PG, INI-CET and FMGE, Not a Generic Crash Course</p>
            </div>

            <div className="matrix-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-meta-row">
                <span className="matrix-number-badge">03</span>
                <span className="matrix-blue-tag">Structured Day-by-Day Schedule</span>
              </div>
              <h3>Accountability & Discipline</h3>
              <p>Keeps Procrastination away & Ensures Course Completion</p>
            </div>

            <div className="matrix-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card-meta-row">
                <span className="matrix-number-badge">04</span>
                <span className="matrix-blue-tag">Unlike Traditional Classes</span>
              </div>
              <h3>Mentorship-Driven Learning</h3>
              <p>This Program Emphasizes Strategy, Consistency & Mental Conditioning along with Academics</p>
            </div>

            <div className="matrix-card reveal-on-scroll fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="card-meta-row">
                <span className="matrix-number-badge">05</span>
                <span className="matrix-blue-tag">From Concepts to Practice</span>
              </div>
              <h3>End-to-End Prep</h3>
              <p>From Concepts {"->"} Practice {"->"} PYQs {"->"} GTs {"->"} Rapid Revision, Everything is Covered under One Roof</p>
            </div>
          </div>

          <div className="matrix-footer-statement-bar">
            <span className="yellow-side-accent"></span>
            <p><span>At CoreBTR Bootcamp -</span> We guide you all the way until you achieve your goal</p>
          </div>
        </div>
      </section>

      {/* Parking Info Card & Final CTA */}
      <section className="parking-cta-section" id="results">
        <div className="parking-cta-container">
          <div className="parking-info-card reveal-on-scroll fade-in-up">
            <div className="parking-card-header">
              <svg className="warning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <h3>Parking Information</h3>
            </div>
            <div className="parking-body-block">
              <h4>No On-Campus Parking</h4>
              <p>Parking facilities are not available within the Vidya Jeevan premises.</p>
            </div>
            <div className="parking-body-block">
              <h4>Parking at Your Own Risk</h4>
              <p>Vehicles parked outside the premises are solely the responsibility of their owners. Vidya Jeevan, its management, and staff shall not be liable for any loss, theft, damage, or other incidents involving parked vehicles.</p>
            </div>
          </div>

          <div className="grand-final-cta-banner reveal-on-scroll fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="banner-line-heading-row">
              <span className="banner-heading-text">JOIN THE BOOTCAMP</span>
            </div>
            <p className="banner-pitch-text">If you're ready to stop feeling lost and start seeing progress - this is where it begins.</p>
            <h2 className="banner-main-title">Start Your Transformation with CoreBTR Bootcamp</h2>
            <div className="banner-action-row">
              <button className="banner-submit-btn">Join the Bootcamp</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Layer */}
      <footer className="main-footer" id="blogs">
        <div className="footer-top-container">
          <div className="footer-brand-column">
            <div className="logo-fallback-light">core<span>BTR</span></div>
            <div className="footer-social-row">
              <a href="#instagram" className="social-circle-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#youtube" className="social-circle-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-column">
            <h4 className="column-title">Explore</h4>
            <ul className="link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="column-title">Study Resources</h4>
            <ul className="link-list">
              <li><a href="#workbooks">Workbooks & Notes</a></li>
              <li><a href="#pyqs">PYQs Book</a></li>
              <li><a href="#offline">CoreBTR Offline</a></li>
              <li><a href="#bootcamp">CoreBTR Bootcamp</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="column-title">Plans & Purchases</h4>
            <ul className="link-list">
              <li><a href="#solo">Solo Plans</a></li>
              <li><a href="#group">Group Plans</a></li>
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#cancellation">Cancellation & Refund</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="column-title">Support</h4>
            <ul className="link-list">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faqs">FAQ's</a></li>
              <li><a href="#device">Device Policy</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="column-title">Legal & Updates</h4>
            <ul className="link-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#fairuse">Fair Usage Policy</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-ribbon">
          <p>&copy; 2026 CoreBTR, All rights reserved. | <span className="manage-text">Designed & Managed By:</span> <a href="#destination" className="author-anchor">Believers Destination Pvt Ltd</a></p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <button 
        className="floating-interest-btn" 
        onClick={() => { setInterestModalOpen(true); setLeadSubmitted(false); }}
      >
        Interested in CoreBTR ?
      </button>

      <button 
        className="floating-ask-btn" 
        onClick={() => { setAskModalOpen(true); setAmaSubmitted(false); }}
      >
        <svg className="chat-bubble-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
        Ask Me Anything
      </button>

      {/* --- MODAL 1: Interest Lead Form Modal --- */}
      {interestModalOpen && (
        <div className="modal-backdrop" onClick={() => setInterestModalOpen(false)}>
          <div className="modal-content reveal-on-load fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setInterestModalOpen(false)}>&times;</button>
            {leadSubmitted ? (
              <div className="modal-success-screen">
                <span className="success-checkmark">✓</span>
                <h3>Thank You!</h3>
                <p>We have received your interest. Our academic advisor will contact you within 24 hours.</p>
                <button className="modal-submit-btn" onClick={() => setInterestModalOpen(false)}>Close</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setLeadSubmitted(true); }} className="lead-capture-form">
                <h3>Interested in CoreBTR Bootcamp?</h3>
                <p className="modal-subtitle">Submit your details and get personalized advice and enrollment slots.</p>
                
                <div className="form-group">
                  <label htmlFor="name-input">Full Name</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    required 
                    value={leadName} 
                    onChange={(e) => setLeadName(e.target.value)} 
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone-input">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone-input" 
                    required 
                    value={leadPhone} 
                    onChange={(e) => setLeadPhone(e.target.value)} 
                    placeholder="e.g. +91 99999 99999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email-input">Email Address</label>
                  <input 
                    type="email" 
                    id="email-input" 
                    required 
                    value={leadEmail} 
                    onChange={(e) => setLeadEmail(e.target.value)} 
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="exam-select">Target Exam</label>
                    <select 
                      id="exam-select" 
                      value={leadExam} 
                      onChange={(e) => setLeadExam(e.target.value)}
                    >
                      <option value="NEET PG">NEET PG</option>
                      <option value="INI-CET">INI-CET</option>
                      <option value="FMGE">FMGE</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="form-group col">
                    <label htmlFor="program-select">Preferred Program</label>
                    <select 
                      id="program-select" 
                      value={leadProgram} 
                      onChange={(e) => setLeadProgram(e.target.value)}
                    >
                      <option value="Program 1">Program 1 (Rs 37,000)</option>
                      <option value="Program 2">Program 2 (Rs 32,000)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="modal-submit-btn">Submit Request</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- MODAL 2: Ask Me Anything (FAQ Chat Drawer) --- */}
      {askModalOpen && (
        <div className="modal-backdrop" onClick={() => setAskModalOpen(false)}>
          <div className="modal-content reveal-on-load fade-in-up drawer-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setAskModalOpen(false)}>&times;</button>
            <div className="drawer-header">
              <h3>Ask Me Anything</h3>
              <p>Get answers to common queries instantly or message our support team.</p>
            </div>
            
            <div className="drawer-faqs">
              <div className="faq-item">
                <p className="faq-question">Q: When does the offline test & discussion start?</p>
                <p className="faq-answer">A: The offline Bootcamp starts from 28th May and goes till 30th Aug 2026 at Vidya Jeevan, Greater Noida.</p>
              </div>
              <div className="faq-item">
                <p className="faq-question">Q: How can I download the mobile application?</p>
                <p className="faq-answer">A: Tap the yellow "GET THE APP" tab on the right edge of the screen to open the app store download links.</p>
              </div>
              <div className="faq-item">
                <p className="faq-question">Q: Are cancellations or fee transfers permitted?</p>
                <p className="faq-answer">A: No refunds or cancellations are allowed after registration. Seats cannot be shifted or shared.</p>
              </div>
            </div>

            {amaSubmitted ? (
              <div className="ama-success-block">
                <span className="success-checkmark">✓</span>
                <p>Your question has been sent! We will answer it shortly.</p>
                <button className="modal-submit-btn inline-btn" onClick={() => setAmaSubmitted(false)}>Ask another question</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setAmaSubmitted(true); setAmaQuestion(''); }} className="drawer-query-form">
                <div className="form-group">
                  <label htmlFor="query-input">Send us a direct query</label>
                  <textarea 
                    id="query-input" 
                    required 
                    placeholder="Type your query here..." 
                    rows="3"
                    value={amaQuestion}
                    onChange={(e) => setAmaQuestion(e.target.value)}
                  />
                </div>
                <button type="submit" className="modal-submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- MODAL 3: Get the App Modal --- */}
      {downloadModalOpen && (
        <div className="modal-backdrop" onClick={() => setDownloadModalOpen(false)}>
          <div className="modal-content reveal-on-load fade-in-up app-download-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setDownloadModalOpen(false)}>&times;</button>
            <div className="app-modal-body">
              <div className="app-icon-holder">📲</div>
              <h3>Download coreBTR Mobile App</h3>
              <p>Experience structured learning, access schedules, solve daily mini tests, and track your preparation on the go.</p>
              
              <div className="download-badges-container">
                <a href="#app-store" className="download-badge play-store" onClick={(e) => { e.preventDefault(); alert("Redirecting to Google Play Store..."); setDownloadModalOpen(false); }}>
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M5,3.23C5.1,3.25,5.19,3.28,5.27,3.32L15,9.27L18.33,5.94L5.59,3.06C5.39,3.02,5.19,3.1,5.06,3.23 C5.04,3.23,5.02,3.23,5,3.23 M3,5.02v13.96c0,0.51,0.38,0.94,0.89,0.98c0.04,0,0.07,0,0.11,0L14,10L4,4.04 C3.49,4.08,3.07,4.49,3.01,5 C3,5.01,3,5.01,3,5.02 M15,10.73l-9.73,5.95c-0.19,0.11-0.34,0.29-0.41,0.5l13.47,3.03 c0.21,0.05,0.42-0.05,0.52-0.23c0.04-0.07,0.06-0.15,0.06-0.23V10.73 M16.67,10l4.37-2.62c0.39-0.23,0.53-0.73,0.3-1.12 c-0.12-0.21-0.34-0.34-0.58-0.34H16.67V10z" />
                    </svg>
                  </div>
                  <div className="badge-text">
                    <span className="badge-sub">GET IT ON</span>
                    <span className="badge-main">Google Play</span>
                  </div>
                </a>
                
                <a href="#play-store" className="download-badge app-store" onClick={(e) => { e.preventDefault(); alert("Redirecting to Apple App Store..."); setDownloadModalOpen(false); }}>
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,22c-1.31,0.02-1.73-0.78-3.22-0.78c-1.5,0-1.96,0.75-3.22,0.8 c-1.33,0.05-2.29-1.31-3.13-2.52C4.38,17.05,3.07,12.08,4.82,9.05C5.69,7.54,7.24,6.58,8.92,6.55c1.28-0.02,2.48,0.86,3.27,0.86 c0.78,0,2.23-1.07,3.77-0.91c0.64,0.03,2.45,0.26,3.61,1.96c-0.09,0.06-2.16,1.26-2.14,3.79c0.02,3.03,2.63,4.04,2.66,4.05 C20.07,16.8,19.55,18.28,18.71,19.5z M15.97,4.17c0.66-0.81,1.11-1.93,0.99-3.06c-0.97,0.04-2.15,0.65-2.85,1.47 c-0.6,0.7-1.13,1.84-0.99,2.96C14.23,5.58,15.31,4.97,15.97,4.17z" />
                    </svg>
                  </div>
                  <div className="badge-text">
                    <span className="badge-sub">Download on the</span>
                    <span className="badge-main">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}