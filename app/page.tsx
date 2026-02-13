"use client";
import { useState } from "react";
import {Ambulance, Cat, ChessQueen, CloudDrizzle, Frown, Ghost, Heart, HeartCrack, Meh, Skull} from "lucide-react";
import confetti from "canvas-confetti";
import LyricsComponentGolden from "@/app/components/LyricsComponentGolden";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: null, left: null });

  const yesButtonSize = noCount * 20 + 16;

  const handleYesClick = () => {
    setYesPressed(true);

    const end = Date.now() + (15 * 1000);

    const colors = ['#000000', '#B695C0'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
   /* confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff8c00', '#ff4500']
    });*/
  }

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const randomTop = Math.random() * 80 + "%";
    const randomLeft = Math.random() * 80 + "%";
    //setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  const getNoButtonText = () => {
    const phrases: React.ReactNode[] = [
      <span key={0} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>¿No?</span>,
      <span key={1} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Frown size={24} color="#000000"/> ¿Estás segura?</span>,
      <span key={2} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Cat size={24} color="#000000"/> ¡Piénsalo bien!</span>,
      <span key={3} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><CloudDrizzle size={24} color="#000000" /> Última oportunidad...</span>,
      <span key={4} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Ghost size={24} color="#000000"/> ¿De verdad no?</span>,
      <span key={5} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Skull size={24} color="#000000"/> ¡Me vas a romper el corazón!</span>,
      <span key={6} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><HeartCrack size={24} color="#000000" /> ¿No?</span>,
      <span key={7} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Meh size={24} color="#000000"/> Voy a llorar...</span>,
      <span key={8} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><ChessQueen size={24} color="#000000"/> Segura segura?</span>,
      <span key={9} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}><Ambulance size={24} color="#000000"/> Hazlo por Niall Horan</span>,
      <span key={10} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>Entonces por Harold Estilos</span>,
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getGif = () => {
    const gifs = [
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmljMTBkcTI3NDF4dW5yb2xhMjFyaGJoZTg3azRlZndrcWpqeHlyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wvYNSqBAMDVx8CEYkt/giphy.gif",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmljMTBkcTI3NDF4dW5yb2xhMjFyaGJoZTg3azRlZndrcWpqeHlyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wvYNSqBAMDVx8CEYkt/giphy.gif",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVvcGhzaWhiOHNuOGI2N2t6dXdldTkxYWM0aTdiZGlzNTFpZmtqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qQdL532ZANbjy/giphy.gif",
    ];
    return gifs[Math.min(noCount, gifs.length - 1)] || gifs[gifs.length - 1];
  };

  return (
      <div className={`relative flex flex-col items-center ${yesPressed ? 'justify-start' : 'justify-center'} min-h-screen bg-pink-100 p-4 text-center overflow-y-auto`}>
        {yesPressed ? (
            <>
              <img
                  src="https://media.tenor.com/gU_Pb_7p_5AAAAAM/tkthao219-bubududu.gif"
                  alt="Oso feliz"
                  className="rounded-lg shadow-lg"
              />
              <h1 className="text-4xl font-bold text-pink-600 mt-4 animate-bounce">
                ¡Sabía que dirías que sí :3
              </h1>
              <p className="text-lg text-pink-500 mt-2 font-semibold">Nos vemos el 14.</p>
              <div className="containerIframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.640721474512!2d-74.09612962418669!3d4.65799284202459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Metropolitano%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1770953787738!5m2!1ses-419!2sco"
                    width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
              <LyricsComponentGolden/>
            </>
        ) : (
            <>
              <img src={getGif()} alt="Oso tierno" className="w-48 mb-6"/>
              <h1 className="text-4xl font-bold text-pink-600 mb-8 px-4">
                ¿Quieres estar conmigo en San Valentín? 🌹
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all z-10"
                    style={{ fontSize: yesButtonSize }}
                    onClick={handleYesClick}
                >
                  Sí
                </button>
                {(noCount>1)?<HeartCrack size={24} color="#000000" /> :<Heart size={24} color="#000000"/>}
                <button

                    onClick={handleNoClick}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
        )}

      </div>
  );
}