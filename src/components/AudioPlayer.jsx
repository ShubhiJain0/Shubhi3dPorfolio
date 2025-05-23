import { forwardRef, useImperativeHandle, useRef } from "react";

const AudioPlayer = forwardRef(({ src }, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    audioRef: audioRef.current,
    play: () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(console.error);
      }
    },
    mute: () => {
      if (audioRef.current) audioRef.current.muted = true;
    },
    unmute: () => {
      if (audioRef.current) audioRef.current.muted = false;
    },
  }));

  return <audio ref={audioRef} src={src} loop muted />;
});

export default AudioPlayer;
