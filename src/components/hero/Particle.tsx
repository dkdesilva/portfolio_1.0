import React, { useEffect, useRef } from 'react';

const Particle = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: Star[] = [];
        let shootingStars: ShootingStar[] = [];
        let nebulae: Nebula[] = [];
        const starCount = 600;

        class Star {
            x!: number;
            y!: number;
            size!: number;
            opacity!: number;
            pulse!: number;
            color!: string;

            constructor(width: number, height: number, isMilkyWay: boolean = false) {
                if (isMilkyWay) {
                    const bandWidth = height * 0.4;
                    this.x = Math.random() * width;
                    const targetY = (this.x / width) * height;
                    this.y = targetY + (Math.random() - 0.5) * bandWidth;
                    this.size = Math.random() * 1.5 + 0.2;
                    this.color = Math.random() > 0.8 ? '#a5b4fc' : '#ffffff';
                } else {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.size = Math.random() * 1.0 + 0.1;
                    this.color = '#ffffff';
                }
                this.opacity = Math.random() * 0.7 + 0.1;
                this.pulse = (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0, this.opacity);
                ctx.fill();
            }

            update() {
                this.opacity += this.pulse;
                if (this.opacity > 0.8 || this.opacity < 0.1) this.pulse = -this.pulse;
            }
        }

        class ShootingStar {
            x!: number;
            y!: number;
            length!: number;
            speed!: number;
            opacity!: number;
            angle!: number;

            constructor(width: number, height: number) {
                this.reset(width, height);
            }

            reset(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = 0;
                this.length = Math.random() * 100 + 40;
                this.speed = Math.random() * 15 + 10;
                this.opacity = 1;
                this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2;
            }

            draw() {
                if (!ctx) return;
                const endX = this.x - Math.cos(this.angle) * this.length;
                const endY = this.y - Math.sin(this.angle) * this.length;

                const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }

            update(width: number, height: number) {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= 0.015;

                if (this.opacity <= 0 || this.x > width || this.y > height) {
                    if (Math.random() > 0.995) {
                        this.reset(width, height);
                    }
                }
            }
        }

        class Nebula {
            x!: number;
            y!: number;
            radius!: number;
            color!: string;
            opacity!: number;
            pulse!: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 300 + 200;
                const colors = ['rgba(59, 130, 246, 0.05)', 'rgba(139, 92, 246, 0.05)', 'rgba(6, 182, 212, 0.05)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.5;
                this.pulse = Math.random() * 0.002 + 0.001;
            }

            draw() {
                if (!ctx) return;
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.beginPath();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                this.opacity += this.pulse;
                if (this.opacity > 1 || this.opacity < 0.5) this.pulse = -this.pulse;
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            shootingStars = [];
            nebulae = [];

            for (let i = 0; i < 4; i++) {
                nebulae.push(new Nebula(canvas.width, canvas.height));
            }

            for (let i = 0; i < starCount; i++) {
                stars.push(new Star(canvas.width, canvas.height, false));
            }

            for (let i = 0; i < 400; i++) {
                stars.push(new Star(canvas.width, canvas.height, true));
            }

            for (let i = 0; i < 3; i++) {
                shootingStars.push(new ShootingStar(canvas.width, canvas.height));
                shootingStars[i].opacity = 0;
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nebulae.forEach(nebula => {
                nebula.update();
                nebula.draw();
            });

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            shootingStars.forEach(sStar => {
                sStar.update(canvas.width, canvas.height);
                sStar.draw();
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
            style={{ zIndex: 0 }}
        />
    );
};

export default Particle;


