'use client';

import { useState, useEffect } from 'react';

export default function HarryPotterTrailer() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const scenes = [
    {
      text: "The boy who lived...",
      bg: "linear-gradient(135deg, #1a0033 0%, #330066 100%)"
    },
    {
      text: "Came to die.",
      bg: "linear-gradient(135deg, #000000 0%, #1a0000 100%)"
    },
    {
      text: "But this is not the end...",
      bg: "linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%)"
    },
    {
      text: "It's just the beginning.",
      bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
    }
  ];

  useEffect(() => {
    setFadeIn(true);
    const sceneTimer = setInterval(() => {
      setCurrentScene((prev) => {
        if (prev < scenes.length - 1) {
          return prev + 1;
        } else {
          setShowTitle(true);
          clearInterval(sceneTimer);
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(sceneTimer);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'Georgia, serif',
      position: 'relative'
    }}>
      {/* Background Scene */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: scenes[currentScene].bg,
        transition: 'background 2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        {/* Floating particles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          {[...Array(30)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }} />
          ))}
        </div>

        {/* Scene Text */}
        {!showTitle && (
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            textAlign: 'center',
            padding: '0 20px',
            margin: 0,
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            animation: 'fadeInOut 3s ease-in-out',
            zIndex: 2
          }}>
            {scenes[currentScene].text}
          </h1>
        )}

        {/* Title Card */}
        {showTitle && (
          <div style={{
            textAlign: 'center',
            zIndex: 2,
            animation: 'titleReveal 2s ease-in-out forwards'
          }}>
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 2rem)',
              color: '#d4af37',
              letterSpacing: '0.5em',
              marginBottom: '30px',
              textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
            }}>
              HARRY POTTER
            </div>
            <div style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              color: '#ffffff',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
              letterSpacing: '0.1em'
            }}>
              THE FINAL CHAPTER
            </div>
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 1.5rem)',
              color: '#cccccc',
              letterSpacing: '0.3em',
              marginTop: '30px'
            }}>
              COMING SOON
            </div>
          </div>
        )}

        {/* Hogwarts Castle Silhouette */}
        {showTitle && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            maxWidth: '600px',
            height: '200px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
            clipPath: 'polygon(20% 100%, 25% 60%, 30% 70%, 35% 40%, 40% 50%, 45% 30%, 50% 20%, 55% 30%, 60% 50%, 65% 40%, 70% 70%, 75% 60%, 80% 100%)',
            opacity: 0.6,
            animation: 'castleRise 3s ease-out forwards'
          }} />
        )}
      </div>

      {/* Wand Cursor Effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.9); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9); }
        }

        @keyframes titleReveal {
          0% { opacity: 0; transform: scale(0.5) rotateX(90deg); }
          100% { opacity: 1; transform: scale(1) rotateX(0deg); }
        }

        @keyframes castleRise {
          0% { opacity: 0; transform: translateX(-50%) translateY(100px); }
          100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
        }

        body {
          cursor: crosshair;
          background: #000;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
