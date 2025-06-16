import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

function BannerSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/love-romantic-hopeful-music-333017.mp3");
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
          Jadon & Weddingg
        </h1>

        <button
          className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:scale-105 transition-all duration-300 ease-in-out text-white text-2xl"
          onClick={toggleMusic}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>
      </div>
    </div>
  );
}

export default BannerSection;
