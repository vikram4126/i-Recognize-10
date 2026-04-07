import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EtherealSpline = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Get precise length for drawing mathematically
    const length = path.getTotalLength();

    // Initially hide the path by offsetting the dash by exactly its length
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate the offset cleanly as the user navigates down the entire document
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Reduced from 1.5 for much faster response
      }
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
    });

    // Add a continuous fast pulse to make it feel more "electric" and fast
    gsap.to(path, {
      strokeWidth: 1.5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[80] mix-blend-screen opacity-90 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full opacity-70"
        style={{ filter: 'drop-shadow(0px 0px 10px rgba(253, 52, 156, 0.4))' }}
      >
        <defs>
          <linearGradient id="splineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ACEAFF" stopOpacity="0" />
            <stop offset="15%" stopColor="#00B8F5" stopOpacity="1" />
            <stop offset="45%" stopColor="#FD349C" stopOpacity="1" />
            <stop offset="75%" stopColor="#7213EA" stopOpacity="1" />
            <stop offset="100%" stopColor="#00338D" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Core animated drawing line that scrubs with scroll */}
        <path
          ref={pathRef}
          d="M 50 0 C 85 25, 15 45, 50 55 C 85 65, 15 85, 50 100"
          fill="none"
          stroke="url(#splineGradient)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />

        {/* Faint ambient guide rail (permanently visible at very low opacity) */}
        <path
          d="M 50 0 C 85 25, 15 45, 50 55 C 85 65, 15 85, 50 100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.2"
          vectorEffect="non-scaling-stroke"
          className="opacity-10"
        />
      </svg>
    </div>
  );
};

export default EtherealSpline;
