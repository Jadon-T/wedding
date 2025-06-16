import { useRef, useState } from "react";

function BannerSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      audioRef.current = new Audio("/music/wedding.mp3");
    }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center">
      <img
        src="https://img.freepik.com/premium-photo/ai-generated-image-wedding-couple-church-high-quality-photo_470178-25465.jpg"
        alt="wedding"
        className="absolute inset-x-0 top-0 w-full h-full object-cover mb-8"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>

      <div className="absolute inset-0 flex-col items-start justify-start min-h-[80vh] py-12 px-4 transform translate-x-[-100%] animate-slide-in">

        <h6 className="text-lg md:text-xl text-white mb-4">
          We are getting married
        </h6>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Jadon & Wedding
        </h1>

        <button
          className="rounded-full p-3 bg-white/80 hover:bg-white text-black transition-colors"
          onClick={toggleMusic}
          >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
    </div>
  );
}

export default BannerSection;
