import React, { useState, useEffect, forwardRef } from "react";

const MusicNavbar = forwardRef(({ musicSrc }, ref) => {
  const [isMuted, setIsMuted] = useState(false);

  console.log(ref);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current && ref.current.audioRef) {
        const actualMuteState = ref.current.audioRef.muted;
        setIsMuted(actualMuteState); // sync React state with real audio muted state
      }
    }, 1000); // check every 1 second

    return () => clearInterval(interval); // clean up on unmount
  }, []); // run only once on mount

  return (
    <nav className="w-full bg-black text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-xl font-bold">Shubhi's Abode</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            if (ref.current.audioRef?.muted) {
              ref.current.unmute();
              ref.current.play(); // Must be user-triggered
            } else {
              ref.current.mute();
            }
          }}
          className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          {isMuted ? "🔇 Unmute" : "🔊 Mute"}
        </button>
      </div>

      {/* Hidden audio tag with forwarded ref */}
      <audio ref={ref} loop src={musicSrc} />
    </nav>
  );
});

export default MusicNavbar;
