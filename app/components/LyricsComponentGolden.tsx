import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConfettiWord from "@/app/components/ConfettiWord";

export default function LyricsComponentGolden() {
    const [currentTime, setCurrentTime] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);
    const audioRef = useRef(null);
    const scrollRef = useRef([]);
    const GOLDEN_LYRICS = [
        { time: 0, text: "🎵" },
        //{ time: 2.7, text: "Hey!" },
        { time: 18, text: "Golden, golden, golden" },
        { time: 23, text: "As I open my eyes" },
        { time: 25.5, text: "Hold it, focus, hoping" },
        { time: 29.9, text: "Take me back to the light" },
        { time: 33.3, text: "I know you were way too bright for me, I'm hopeless, broken" },
        { time: 42.5, text: "So you wait for me in the sky" },
        { time: 50.4, text: "Brown my skin just right" },
        { time: 57.3, text: "You're so golden" },
        { time: 60, text: "🎵" },
        { time: 64.1, text: "You're so golden" },
        { time: 67.7, text: "Out of my head and I know that you're scared because hearts get broken" },
        { time: 72.7, text: "I don't wanna be alone" },
        { time: 76.2, text: "I don't wanna be alone when it ends" },
        { time: 80, text: "Don't wanna let you know" },
        { time: 83.1, text: "I don't wanna be alone" },
        { time: 85.8, text: "But I can feel it take a hold" },
        { time: 90.5, text: "I can feel you take control" },
        { time: 93, text: "Of who I am and all I've ever known" },
        { time: 96.9, text: "Loving you's the antidote" },
        { time: 99.2, text: "Golden" },
        { time: 101.1, text: "🎵" },
        { time: 105.2, text: "You're so golden" },
        { time: 108.7, text: "I don't wanna be alone" },
        { time: 112.1, text: "You're so golden" },
        { time: 119.1, text: "You're so golden" },
        { time: 122.6, text: "Out of my head and I know that you're scared because hearts get broken" },
        { time: 128.9, text: "🎵" },
        { time: 151.3, text: "I know that you're scared because I'm so open" },
        { time: 156.1, text: "🎵" },
        { time: 160.1, text: "You're so golden" },
        { time: 163.5, text: "I don't wanna be alone" },
        { time: 167.1, text: "You're so golden" },
        { time: 170.9, text: "You're so golden" },
        { time: 173.8, text: "You're so golden" },
        { time: 177.7, text: "Out of my head and I know that you're scared because hearts get broken" },
        { time: 185.1, text: ":3" }
    ];
    const handleTimeUpdate = () => {

        const time = audioRef.current.currentTime;
        setCurrentTime(time);

        // Encontrar la línea actual
        const index = GOLDEN_LYRICS.findLastIndex((line) => time >= line.time);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    // Efecto scroll automático
    useEffect(() => {
        if (activeIndex !== -1 && scrollRef.current[activeIndex]) {

            scrollRef.current[activeIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activeIndex]);



    return (
<div className="min-h-screen bg-gradient-to-b text-black flex flex-col items-center justify-start p-6 font-sans mt-3">
    <div className="w-full max-w-full h-64 overflow-y-hidden overflow-x-hidden relative mask-fade">
        <div className="transition-all duration-500">
            {GOLDEN_LYRICS.map((line, i) => (
                <motion.p
                    key={i}
                    ref={(el) => { scrollRef.current[i] = el; }}
                    animate={{
                        opacity: activeIndex === i ? 1 : 0.3,
                        scale: activeIndex === i ? 1.05 : 1,
                        filter: activeIndex === i ? 'blur(0px)' : 'blur(1px)',
                    }}
                    style={{
                        transformOrigin: 'left center',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                    }}
                    className="text-black text-3xl font-black my-8 text-left cursor-default w-full ml-4"
                >
                    {(line.text=="You're so golden") ? (
                        <ConfettiWord>{line.text}</ConfettiWord>
                    ) : (
                        line.text
                    )}
                </motion.p>
            ))}
        </div>
    </div>

    <div className="mt-6 bg-white/20 backdrop-blur-md p-4 rounded-2xl w-full max-w-md">
        <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            src="/music/golden.mp3"
            className="w-full"
            controls
            autoPlay={true}
        />
    </div>

            <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
        </div>
    );
}