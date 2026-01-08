import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
    const [particles, setParticles] = useState<Array<{ style: React.CSSProperties }>>([]);

    useEffect(() => {
        // Generate static particles on mount only
        const count = 30;
        const newParticles = Array.from({ length: count }).map(() => ({
            style: {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
            },
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="scenic-bg pointer-events-none select-none">
            {/* Deep Space Gradients/Blobs */}
            <div
                className="blob bg-emerald-900/20 w-[600px] h-[600px] rounded-full top-[-10%] left-[-10%]"
                style={{ animationDelay: '0s' }}
            />
            <div
                className="blob bg-zinc-800/20 w-[500px] h-[500px] rounded-full bottom-[-10%] right-[-10%]"
                style={{ animationDelay: '-5s' }}
            />
            <div
                className="blob bg-emerald-600/10 w-[400px] h-[400px] rounded-full top-[40%] right-[20%]"
                style={{ animationDelay: '-10s' }}
            />

            {/* Particles */}
            {particles.map((p, i) => (
                <div key={i} className="particle" style={p.style} />
            ))}
        </div>
    );
};

export default Background;
