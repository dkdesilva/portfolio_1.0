import React, { useState, useEffect } from 'react';

const Loading = ({ onFinish }: { onFinish: () => void }) => {
    const [percent, setPercent] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [showCursor, setShowCursor] = useState(true);

    const messages = [
        "ESTABLISHING NEURAL INTERFACE...",
        "LOADING NAVIGATION MATRIX...",
        "SYNCING ORBITAL TELEMETRY...",
        "CALIBRATING SENSOR ARRAYS...",
        "ENGAGING WARP FIELD...",
        "ALL SYSTEMS NOMINAL",
    ];

    useEffect(() => {
        // Percentage counter
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Log messages
        let currentLog = 0;
        const logInterval = setInterval(() => {
            if (currentLog < messages.length) {
                setLogs((prev) => [...prev, messages[currentLog]]);
                currentLog++;
            } else {
                clearInterval(logInterval);
            }
        }, 500);

        return () => clearInterval(logInterval);
    }, []);

    useEffect(() => {
        // Cursor blink
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (percent === 100 && logs.length === messages.length) {
            const timeout = setTimeout(() => {
                onFinish();
            }, 1000); // Small delay after finishing
            return () => clearTimeout(timeout);
        }
    }, [percent, logs.length, messages.length, onFinish]);

    // Format percent to 3 digits
    const formattedPercent = percent.toString().padStart(3, '0');

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center text-white font-mono overflow-hidden">
            {/* Background Star Dots */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 2 + 'px',
                            height: Math.random() * 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `pulse ${Math.random() * 3 + 2}s infinite`
                        }}
                    />
                ))}
            </div>

            <style>
                {`
              @keyframes pulse {
                  0%, 100% { opacity: 0.2; }
                  50% { opacity: 1; }
              }
          `}
            </style>

            {/* Main Counter Container */}
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-8xl md:text-[150px] font-light leading-none tracking-tighter">
                    {formattedPercent}
                </h1>
                <p className="text-sm md:text-base tracking-[0.5em] text-gray-500 mt-4">
                    SYSTEM INTEGRITY
                </p>
            </div>

            {/* Terminal Loading Area */}
            <div className="absolute bottom-12 left-12 max-w-[400px]">
                <div className="flex flex-col items-start gap-1">
                    {logs.map((log, index) => (
                        <div key={index} className="flex gap-2 text-blue-400 text-xs md:text-sm font-medium">
                            <span>&gt;</span>
                            <span>{log}</span>
                        </div>
                    ))}
                    <div className="flex gap-2 text-blue-400 text-xs md:text-sm font-medium">
                        <span>&gt;</span>
                        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} w-2 h-4 bg-blue-400 inline-block`}></span>
                    </div>
                </div>
            </div>

            {/* Footer Title */}
            <div className="absolute bottom-8 text-[10px] tracking-[0.3em] text-gray-600 font-medium">
                KALANA.DEV
            </div>
        </div>
    );
};

export default Loading;
