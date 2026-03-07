import React, { useEffect, useRef } from 'react';

const Particle = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            pulse: number;
        }[] = [];

        const particleCount = 450; // More stars for density

        const init = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.3 + 0.1, // Very tiny stars
                    speedX: (Math.random() - 0.5) * 0.04, // Very calm movement
                    speedY: (Math.random() - 0.5) * 0.04,
                    opacity: Math.random() * 0.5 + 0.2, // Subtle beginning opacity
                    pulse: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1), // Calm twinkle
                });
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                // Subtle Calmer Pulsing
                p.opacity += p.pulse;
                if (p.opacity > 0.8 || p.opacity < 0.1) p.pulse = -p.pulse;

                // Wrap around
                if (p.x < -20) p.x = canvas.width + 20;
                if (p.x > canvas.width + 20) p.x = -20;
                if (p.y < -20) p.y = canvas.height + 20;
                if (p.y > canvas.height + 20) p.y = -20;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.opacity)})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0, background: '#000000' }}
        />
    );
};

export default Particle;
