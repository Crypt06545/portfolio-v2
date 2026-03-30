import { useEffect, useRef } from "react";
import JsonContactCard from "./JsonContactCard";
import ContactFormCard from "./ContactFormCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: rightRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="px-4 sm:px-6 md:px-12 py-16 md:py-24 relative">
      {/* Section top divider line — matches AboutSection / ProjectsSection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-[10px] sm:text-[11px] tracking-widest font-mono font-medium text-amber-300 mb-4 shadow-[0_0_20px_rgba(251,191,36,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
            SYSTEM.CONTACT :: ESTABLISH_CONNECTION
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 font-mono">
            &lt;Contact_Me /&gt;
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-mono">// open_to_work — response time &lt; 24h</p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div ref={leftRef} className="flex-1">
            <JsonContactCard />
          </div>
          <div ref={rightRef} className="flex-1">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
