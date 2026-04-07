import React, { useRef, useEffect } from 'react';

const AmbientParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set responsive dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Particle settings tailored for "nano light particles"
    const particleCount = 80; 
    const particles = [];
    const colors = ['#00B8F5', '#FD349C', '#ACEAFF', '#FFFFFF', '#7213EA'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.15, // Extremely slow horizontal drift
        vy: (Math.random() - 0.5) * 0.15, // Extremely slow vertical drift
        alphaBase: Math.random() * 0.4 + 0.1, // Base opacity lower for subtle effect
        pulseSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Linear movement
        p.x += p.vx;
        p.y += p.vy;

        // Loop the screen edges beautifully
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Sinusoidal opacity pulsing for standard 'sparkle'
        const currentAlpha = p.alphaBase + Math.sin(p.phase) * 0.3;
        p.phase += p.pulseSpeed;
        
        // Strict clamps to prevent weird visual bugs
        const safeAlpha = Math.max(0.05, Math.min(0.8, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = safeAlpha;
        
        // Soft aura glow
        ctx.shadowBlur = 5;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        ctx.globalAlpha = 1.0; // Reset
        ctx.shadowBlur = 0;    // Reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] opacity-30 mix-blend-screen"
    />
  );
};

export default AmbientParticles;
