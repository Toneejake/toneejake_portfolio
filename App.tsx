import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, Award, CheckCircle2, Facebook } from 'lucide-react';
import { PERSONAL_INFO, DOMAINS, TECH_STACK, SOFT_SKILLS, CERTIFICATIONS } from './constants';
import BentoCard from './components/BentoCard';
import Navbar from './components/Navbar';
import LogoLoop from './components/LogoLoop';
import HeroChat from './components/HeroChat';
import ProjectPlayer from './components/ProjectPlayer';
import ProfileCard from './components/ProfileCard';
import Background from './components/Background';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink(!blink), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.floor(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-emerald-400">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : "\u00A0"}`}
    </span>
  );
};

const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-emerald-400 transition-colors p-2 hover:bg-zinc-800 rounded-full"
    aria-label={label}
  >
    {children}
  </a>
);

import ContactModal from './components/ContactModal';

import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen text-zinc-200 selection:bg-emerald-500/30 relative">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Background />

      <main className="w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 pt-32 pb-12 space-y-24 relative z-10">

        {/* SECTION 1: HERO CHAT */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center scroll-mt-20">
          <HeroChat />
        </section>

        {/* SECTION 1.5: ABOUT ME (Restored) */}
        <section id="about" className="flex flex-col-reverse lg:flex-row gap-6 items-stretch lg:h-[600px] scroll-mt-32">
          {/* Left: Info Box */}
          <BentoCard className="flex-1 flex flex-col justify-center min-h-[500px] lg:min-h-0 lg:h-full p-8 md:p-12">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-display text-zinc-300 font-medium mb-1 min-h-[32px] flex items-center">
                  <Typewriter words={["Hello", "Kumusta", "Bonjour", "Hola"]} />
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 font-display">
                  I'm {PERSONAL_INFO.name}
                </h1>
                <p className="text-base text-emerald-500 font-medium flex flex-wrap gap-2 items-center">
                  <span>AI Enthusiast</span>
                  <span className="text-zinc-700">•</span>
                  <span>Data Scientist</span>
                  <span className="text-zinc-700">•</span>
                  <span>Machine Learning</span>
                </p>
              </div>

              <div className="h-px bg-zinc-800 w-full" />

              <div className="space-y-3">
                <p className="text-zinc-350 leading-relaxed text-lg">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </button>
                <button className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 bg-zinc-900 text-sm">
                  <Download className="w-4 h-4" /> Resume
                </button>
              </div>

              {/* Social Icons Section */}
              <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/50 mt-4">
                <SocialIcon href="https://www.facebook.com/jakervin29/" label="Facebook">
                  <Facebook className="w-5 h-5" />
                </SocialIcon>
                <SocialIcon href="https://github.com/Toneejake" label="GitHub">
                  <Github className="w-5 h-5" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/jkevangelista/" label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </SocialIcon>
                <SocialIcon href="https://open.spotify.com/user/mrj6ybtxjdwd17spvf2m3h6i5?si=42fbb2c85d104ec6" label="Spotify">
                  {/* Spotify SVG */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.82 1.14.6.3.78 1.02.48 1.621-.24.601-.9.78-1.5.481z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://substack.com/@toneejake?" label="Substack">
                  {/* Substack SVG */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                </SocialIcon>
              </div>

              <div className="flex items-center gap-2 text-zinc-500 text-sm pt-2">
                <MapPin className="w-4 h-4" /> {PERSONAL_INFO.location}
              </div>
            </div>
          </BentoCard>

          {/* Right: Profile Card */}
          <div className="w-full lg:w-[400px] xl:w-[450px] aspect-[3/4] flex-shrink-0 mx-auto lg:h-full lg:aspect-auto">
            <ProfileCard
              avatarUrl="/images/me.png"
              name=" "
              key=" "
              title=" "
              handle="jkevangelista"
              status="Machine Learning"
              behindGlowEnabled={false}
            />
          </div>
        </section>


        {/* SECTION 2: EXPERTISE / DOMAINS */}
        <section id="expertise" className="scroll-mt-28">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">My Expertise</h2>
            <p className="text-zinc-500">Core areas of focus in my professional journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOMAINS.map((domain, idx) => (
              <BentoCard key={idx} className="group hover:bg-zinc-900/80">
                <div className="mb-4 p-3 bg-zinc-900 rounded-2xl w-fit group-hover:bg-emerald-900/30 transition-colors border border-zinc-800 group-hover:border-emerald-500/30">
                  <domain.icon className="w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{domain.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </BentoCard>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-zinc-200 mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {SOFT_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-300 font-medium hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 3: TECH STACK */}
        <section id="tech" className="scroll-mt-28">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
            <p className="text-zinc-500">Tools and technologies I use to build solutions.</p>
          </div>

          <div className="w-full py-8 space-y-8">
            {/* Row 1: Programming Languages & Frameworks (Left) */}
            <LogoLoop
              logos={TECH_STACK.filter(t =>
                ["Python", "JavaScript", "TypeScript", "React", "Next.js", "FastAPI", "Django", "PHP", "Arduino"].includes(t.name)
              ).map(tech => ({
                src: tech.iconUrl,
                alt: tech.name,
                title: tech.name
              }))}
              direction="left"
              speed={80}
              gap={64}
              logoHeight={80}
              pauseOnHover={true}
              className="h-[140px] transform-gpu"
            />

            {/* Row 2: AI/ML, Data & Tools (Right) */}
            <LogoLoop
              logos={TECH_STACK.filter(t =>
                ["PyTorch", "TensorFlow", "Pandas", "Hugging Face", "Docker", "PostgreSQL", "Git", "GitHub", "NPM"].includes(t.name)
              ).map(tech => ({
                src: tech.iconUrl,
                alt: tech.name,
                title: tech.name
              }))}
              direction="right"
              speed={80}
              gap={64}
              logoHeight={80}
              pauseOnHover={true}
              className="h-[140px] transform-gpu"
            />
          </div>
        </section>


        {/* SECTION 5: PROJECTS */}
        <section id="projects" className="scroll-mt-28">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-zinc-500">Highlights of my technical work and research.</p>
            </div>
          </div>

          <ProjectPlayer />
        </section>


        {/* SECTION 6: CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-28">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Certifications & Badges ({CERTIFICATIONS.length})</h2>
            <p className="text-zinc-500">Continuous learning and professional development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[800px] overflow-y-auto custom-scrollbar pr-2">
            {CERTIFICATIONS.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link || "#"}
                target={cert.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 transition-colors ${cert.link ? 'hover:bg-zinc-800/50 hover:border-emerald-500/30 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm leading-tight mb-1">{cert.title}</h4>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-zinc-400">{cert.issuer}</span>
                    <span className="text-[10px] text-zinc-600">{cert.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 7: CONTACT ME (New) */}
        <section id="contact" className="scroll-mt-28">
          <ContactSection />
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 pt-8 pb-8 text-center bg-zinc-950/50 backdrop-blur-sm rounded-t-3xl mt-12">
          <div className="flex flex-col items-center gap-4">
            <div className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </div>
            <p className="text-zinc-600 text-xs">
              Built with React, Tailwind, and Gemini AI.
            </p>
          </div>
        </footer>

      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};


export default App;