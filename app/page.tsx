"use client";

import { useEffect, useRef, useState } from "react";

export default function YogeshPhysicsClasses() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "919520790733";
  const whatsappMsg = encodeURIComponent(
    "Hello Yogesh Sir, I am interested in joining your Physics/Maths classes. Please share more details."
  );

  const navLinks = ["Home", "About", "Courses", "Results", "Contact"];

  const features = [
    { icon: "🏆", title: "Best Results", desc: "Consistently producing top scorers in CBSE & State Board exams" },
    { icon: "💰", title: "Affordable Fees", desc: "Quality education at prices every student can access" },
    { icon: "🎯", title: "Experienced Faculty", desc: "8+ years of teaching with Airforce discipline & dedication" },
    { icon: "🧠", title: "Concept-Based", desc: "Deep understanding over rote memorization — always" },
    { icon: "👤", title: "Personal Attention", desc: "Small batches ensure every student gets individual focus" },
    { icon: "📝", title: "Regular Tests", desc: "Weekly tests & doubt sessions to track progress constantly" },
  ];

  const students = [
    { name: "Aman Sharma", score: "95%", subject: "Physics", rank: "Class Topper", initial: "A" },
    { name: "Priya Verma", score: "92%", subject: "Physics", rank: "District Merit", initial: "P" },
    { name: "Rohit Singh", score: "97/100", subject: "Physics", rank: "State Rank #3", initial: "R" },
    { name: "Neha Gupta", score: "94%", subject: "Physics", rank: "School Topper", initial: "N" },
  ];

  const courses = [
    {
      icon: "⚛️",
      title: "Physics – Class 11th",
      board: "CBSE & State Board",
      features: ["Mechanics & Thermodynamics", "Waves & Optics", "Weekly test series", "Doubt clearing sessions"],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: "⚡",
      title: "Physics – Class 12th",
      board: "CBSE & State Board",
      features: ["Electrostatics & Magnetism", "Modern Physics", "Board exam strategy", "Previous year papers"],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: "📐",
      title: "Mathematics – Class 11th",
      board: "CBSE & State Board",
      features: ["Algebra & Trigonometry", "Coordinate Geometry", "Calculus Foundations", "Problem solving"],
      color: "from-blue-700 to-indigo-800",
    },
    {
      icon: "∑",
      title: "Mathematics – Class 12th",
      board: "CBSE & State Board",
      features: ["Calculus & Integrals", "Vectors & 3D Geometry", "Probability & Stats", "Board mastery"],
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden" style={{ fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        * { box-sizing: border-box; }
        
        body { margin: 0; }
        
        .hero-font { font-family: 'Playfair Display', Georgia, serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
        
        .glow-blue { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3); }
        .glow-orange { box-shadow: 0 0 40px rgba(249, 115, 22, 0.3); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .float-anim { animation: float 4s ease-in-out infinite; }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .slide-left { animation: slideInLeft 0.8s ease forwards; }
        
        .shimmer-text {
          background: linear-gradient(90deg, #f97316, #fbbf24, #f97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #1e3a5f, #0f2040);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, #3b82f6, #f97316, #3b82f6);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gradient-border:hover::before { opacity: 1; }
        
        .badge-pulse::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 2px solid #f97316;
          animation: pulse-ring 2s ease-out infinite;
        }
        
        .nav-blur {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(8, 12, 22, 0.92) !important;
          border-bottom: 1px solid rgba(59,130,246,0.2);
        }
        
        .mesh-bg {
          background: 
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 115, 22, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 50% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 50%);
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #fb923c, #f97316);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(249, 115, 22, 0.5); }
        
        .btn-whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
          transition: all 0.3s ease;
        }
        .btn-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5); }
        
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
        }
        
        .teacher-glow {
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.3), 0 0 60px rgba(59, 130, 246, 0.2);
        }
        
        .star-bg {
          background-image: radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.15) 0%, transparent 100%),
                            radial-gradient(1px 1px at 80px 10px, rgba(255,255,255,0.1) 0%, transparent 100%),
                            radial-gradient(1px 1px at 140px 60px, rgba(255,255,255,0.12) 0%, transparent 100%),
                            radial-gradient(1px 1px at 200px 40px, rgba(255,255,255,0.08) 0%, transparent 100%);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .hero-tagline { font-size: 1.1rem !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav
        className="nav-blur fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                Y
              </div>
              <div>
                <div className="hero-font text-white font-bold text-sm leading-tight">Yogesh Sisodia</div>
                <div className="body-font text-orange-400 text-xs">Physics Classes</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="body-font text-sm font-semibold text-white hover:text-orange-400 transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp body-font text-white text-sm font-bold px-5 py-2 rounded-full"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Mobile menu btn */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0e1a] border-t border-blue-900/30 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block body-font text-white font-semibold hover:text-orange-400 py-2"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16" style={{ background: "#0a0e1a" }}>
        {/* Dark mesh background */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)"
        }} />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

        {/* Admission banner */}
        <div className="absolute top-20 left-0 right-0 flex justify-center z-10">
          <div className="badge-pulse relative bg-gradient-to-r from-orange-500 to-orange-600 text-white body-font text-sm font-semibold px-6 py-2 rounded-full">
            🔥 Admissions Open for 11th & 12th — Limited Seats!
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-blue-600/30 border border-blue-400/60 text-blue-200 body-font text-xs font-bold px-4 py-2 rounded-full">
                  ✈️ Airforce Selected
                </div>
                <div className="flex items-center gap-2 bg-orange-500/25 border border-orange-400/60 text-orange-300 body-font text-xs font-bold px-4 py-2 rounded-full">
                  ⭐ 8+ Years Experience
                </div>
              </div>

              <h1 className="hero-font font-black text-white leading-tight mb-2 hero-title" style={{ fontSize: "3rem" }}>
                Yogesh Sisodia
              </h1>
              <h2 className="hero-font font-bold mb-6" style={{ fontSize: "2rem" }}>
                <span className="shimmer-text">Physics Classes</span>
              </h2>

              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <p className="hero-font italic text-white hero-tagline" style={{ fontSize: "1.3rem" }}>
                  "Physics is hopefully simple,
                </p>
                <p className="hero-font italic text-orange-400 font-bold hero-tagline" style={{ fontSize: "1.3rem" }}>
                  but physicists are not."
                </p>
              </div>

              <p className="body-font text-gray-200 text-lg mb-8 leading-relaxed">
                Master Physics & Mathematics for Class 11th & 12th with Yogesh Sir — 
                bringing Airforce precision and 8+ years of teaching excellence to every class.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:9520790733"
                  className="btn-primary relative body-font text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 z-10"
                >
                  📞 Call Now
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp body-font text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-2"
                >
                  💬 WhatsApp Now
                </a>
              </div>

              <div className="mt-10 flex items-center gap-8">
                {[["500+", "Students Taught"], ["95%", "Pass Rate"], ["8+", "Years Teaching"]].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="hero-font font-black text-2xl text-orange-400">{num}</div>
                    <div className="body-font text-gray-300 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Teacher photo */}
            <div className="flex justify-center lg:justify-end float-anim">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl opacity-30"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #f97316)", filter: "blur(30px)", transform: "scale(1.1)" }} />
                <div
                  className="relative rounded-3xl teacher-glow overflow-hidden"
                  style={{ width: 320, height: 380, background: "linear-gradient(135deg, #1e3a5f 0%, #0f2040 100%)" }}
                >
                  {/* Placeholder teacher image */}
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mb-4 text-white"
                      style={{ fontSize: "5rem", boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}>
                      👨‍🏫
                    </div>
                    <div className="hero-font text-white text-xl font-bold">Yogesh Sir</div>
                    <div className="body-font text-orange-400 text-sm mt-1">M.Sc. Physics | Airforce Selected</div>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs body-font px-3 py-1 rounded-full">Physics</span>
                      <span className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs body-font px-3 py-1 rounded-full">Mathematics</span>
                    </div>
                    <div className="mt-3 text-xs body-font text-blue-400 text-center px-4 opacity-70">
                      (Replace with actual photo)
                    </div>
                  </div>

                  {/* Corner badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold body-font px-3 py-1 rounded-full">
                    ✈️ Ex-Airforce
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="py-24 relative" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0d1529 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">About Yogesh Sir</div>
              <h2 className="hero-font text-4xl md:text-5xl font-black text-white mb-6">
                Teaching with <span className="shimmer-text">Discipline &</span> Dedication
              </h2>
              <p className="body-font text-blue-200 text-lg leading-relaxed mb-6">
                Yogesh Sir brings the discipline of the Indian Airforce into the classroom. Selected for the Airforce and backed by 
                <strong className="text-orange-400"> 8+ years of teaching experience</strong>, he has guided hundreds of students to excel 
                in Physics and Mathematics.
              </p>
              <p className="body-font text-blue-200 text-lg leading-relaxed mb-8">
                His teaching philosophy centers on <strong className="text-blue-400">concept clarity and strong fundamentals</strong> — 
                ensuring students don't just memorize but truly understand. Small batch sizes guarantee 
                personal attention for every student.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✈️", label: "Airforce Selected", color: "orange" },
                  { icon: "📅", label: "8+ Years Teaching", color: "blue" },
                  { icon: "🎓", label: "CBSE & State Board", color: "orange" },
                  { icon: "🔬", label: "Concept-First Method", color: "blue" },
                ].map(({ icon, label, color }) => (
                  <div
                    key={label}
                    className="gradient-border rounded-xl p-4 flex items-center gap-3 card-hover"
                  >
                    <span className="text-2xl">{icon}</span>
                    <span className={`body-font text-sm font-semibold text-${color}-300`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { pct: 97, label: "Physics Board Results", color: "#f97316" },
                { pct: 94, label: "Mathematics Excellence", color: "#3b82f6" },
                { pct: 99, label: "Student Satisfaction", color: "#f97316" },
                { pct: 91, label: "Doubt Resolution Rate", color: "#3b82f6" },
              ].map(({ pct, label, color }) => (
                <div key={label}>
                  <div className="flex justify-between body-font text-sm mb-2">
                    <span className="text-blue-200">{label}</span>
                    <span className="font-bold" style={{ color }}>{pct}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        transition: "width 1.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Courses Section */}
      <section id="courses" className="py-24" style={{ background: "#0a0e1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Programs</div>
            <h2 className="hero-font text-4xl md:text-5xl font-black text-white mb-4">
              Courses We <span className="shimmer-text">Offer</span>
            </h2>
            <p className="body-font text-blue-300 text-lg max-w-2xl mx-auto">
              Specialized coaching for Class 11th & 12th — CBSE & State Board — with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden card-hover"
                style={{ background: "linear-gradient(135deg, #1a2640, #0f1a30)", border: "1px solid rgba(59,130,246,0.15)" }}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="hero-font text-white font-bold text-lg mb-1">{course.title}</h3>
                  <div className="body-font text-orange-400 text-xs font-medium mb-4">{course.board}</div>
                  <ul className="space-y-2">
                    {course.features.map((f) => (
                      <li key={f} className="body-font text-blue-200 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/10 flex gap-2 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-300 body-font text-xs px-2 py-1 rounded-full border border-blue-500/20">Small Batch</span>
                    <span className="bg-orange-500/10 text-orange-300 body-font text-xs px-2 py-1 rounded-full border border-orange-500/20">Affordable</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 rounded-2xl px-8 py-4">
              <span className="text-2xl">📋</span>
              <p className="body-font text-blue-200">
                All courses include: <strong className="text-white">Weekly Tests • Doubt Sessions • Study Material • Progress Reports</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose Us */}
      <section className="py-24 mesh-bg" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0d1529 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Why We're Different</div>
            <h2 className="hero-font text-4xl md:text-5xl font-black text-white">
              Why Choose <span className="shimmer-text">Yogesh Sir?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="gradient-border rounded-2xl p-6 card-hover"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(249,115,22,0.1))" }}
                >
                  {f.icon}
                </div>
                <h3 className="hero-font text-white font-bold text-xl mb-2">{f.title}</h3>
                <p className="body-font text-blue-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Results Section */}
      <section id="results" className="py-24" style={{ background: "#0a0e1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Student Achievements</div>
            <h2 className="hero-font text-4xl md:text-5xl font-black text-white">
              Our <span className="shimmer-text">Star Students</span>
            </h2>
            <p className="body-font text-blue-300 text-lg mt-4">Real results from real students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((s, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, #1a2640, #0f1a30)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(135deg, #1e3a5f, #0f2040)" }}
                />
                <div className="relative p-6 pt-4">
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-3xl hero-font"
                    style={{
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? "#3b82f6, #1d4ed8" : "#f97316, #ea580c"})`,
                      boxShadow: `0 0 20px ${i % 2 === 0 ? "rgba(59,130,246,0.4)" : "rgba(249,115,22,0.4)"}`,
                      border: "3px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {s.initial}
                  </div>

                  <h3 className="hero-font text-white font-bold text-lg">{s.name}</h3>
                  <div className="body-font text-blue-400 text-xs mb-4">{s.rank}</div>

                  <div
                    className="rounded-xl py-3 px-4"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                  >
                    <div className="hero-font text-orange-400 font-black text-3xl">{s.score}</div>
                    <div className="body-font text-blue-300 text-xs mt-1">in {s.subject}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0f2040 0%, #1a0a05 50%, #0f2040 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(59,130,246,0.05) 40px, rgba(59,130,246,0.05) 80px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Limited Seats Available</div>
          <h2 className="hero-font text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Join the Best Physics & Maths{" "}
            <span className="shimmer-text">Classes in Mathura</span> Today!
          </h2>
          <p className="body-font text-blue-200 text-xl mb-10 max-w-2xl mx-auto">
            Don't let another academic year go by without the guidance you deserve. 
            Call or WhatsApp Yogesh Sir today.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="tel:9520790733"
              className="btn-primary relative body-font text-white font-bold px-10 py-5 rounded-full text-xl flex items-center gap-3 z-10"
            >
              📞 Call Now: 9520790733
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp body-font text-white font-bold px-10 py-5 rounded-full text-xl flex items-center gap-3"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section id="contact" className="py-24" style={{ background: "#0a0e1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="body-font text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</div>
            <h2 className="hero-font text-4xl md:text-5xl font-black text-white">
              Find <span className="shimmer-text">Us Here</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "📍", label: "Address", value: "XYZ, Mathura, Uttar Pradesh" },
                { icon: "📞", label: "Phone", value: "9520790733", href: "tel:9520790733" },
                { icon: "💬", label: "WhatsApp", value: "9520790733", href: `https://wa.me/${phoneNumber}?text=${whatsappMsg}` },
                { icon: "⏰", label: "Batch Timings", value: "Morning & Evening Batches Available" },
              ].map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="gradient-border rounded-2xl p-5 flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(249,115,22,0.1))" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="body-font text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="hero-font text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="hero-font text-white font-semibold text-lg">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1a2640, #0f1a30)",
                border: "1px solid rgba(59,130,246,0.2)",
                minHeight: 320,
              }}
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="hero-font text-white text-xl font-bold mb-2">Yogesh Sisodia Physics Classes</h3>
                <p className="body-font text-blue-300 mb-6">XYZ, Mathura, Uttar Pradesh</p>
                <a
                  href="https://maps.google.com/?q=Mathura,Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary relative body-font text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 mx-auto w-fit z-10"
                >
                  📍 Open in Google Maps
                </a>
                <p className="body-font text-blue-500 text-xs mt-4 opacity-60">
                  (Replace with actual Google Maps embed)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{ borderColor: "rgba(59,130,246,0.15)", background: "#060a12" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  Y
                </div>
                <div>
                  <div className="hero-font text-white font-bold">Yogesh Sisodia</div>
                  <div className="body-font text-orange-400 text-sm">Physics Classes</div>
                </div>
              </div>
              <p className="body-font text-blue-400 text-sm leading-relaxed">
                Bringing Airforce discipline and 8+ years of teaching expertise to help students master Physics & Mathematics.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="hero-font text-white font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block body-font text-blue-400 text-sm hover:text-orange-400 transition-colors"
                  >
                    → {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="hero-font text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3 body-font text-blue-400 text-sm">
                <p>📍 XYZ, Mathura, Uttar Pradesh</p>
                <a href="tel:9520790733" className="block hover:text-orange-400 transition-colors">📞 9520790733</a>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-400 transition-colors"
                >
                  💬 WhatsApp: 9520790733
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-3 mt-5">
                {[
                  { label: "📷", name: "Instagram", color: "from-pink-500 to-purple-500" },
                  { label: "▶️", name: "YouTube", color: "from-red-500 to-red-700" },
                ].map(({ label, name, color }) => (
                  <a
                    key={name}
                    href="#"
                    title={name}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-sm hover:scale-110 transition-transform`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900/30 pt-6 text-center">
            <p className="body-font text-blue-500 text-sm">
              © {new Date().getFullYear()} Yogesh Sisodia Physics Classes, Mathura. All rights reserved.
            </p>
            <p className="body-font text-blue-600 text-xs mt-1">
              ✈️ Airforce Selected | 8+ Years Experience | CBSE & State Board
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}