"use client";
import React, { useRef } from 'react';
import confetti from 'canvas-confetti';

interface Props {
    children: string;
}

const ConfettiWord: React.FC<Props> = ({ children }) => {
    const wordRef = useRef<HTMLSpanElement>(null);

    const handleTrigger = () => {
        if (wordRef.current) {
            const rect = wordRef.current.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x, y },
                zIndex: 999,
            });
        }
    };

    return (
        <span
            ref={wordRef}
            onMouseEnter={handleTrigger}
            style={{
                color: '#b701ff',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-block'
            }}
        >
      {children}
    </span>
    );
};

export default ConfettiWord;