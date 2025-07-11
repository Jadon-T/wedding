import { useRef, useState, useEffect } from "react";
import { Pause, Play, Volume2, Heart } from "lucide-react";

function BannerSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMusic = async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      if (!audioRef.current) {
        audioRef.current = new Audio("/love-romantic-hopeful-music-333017.mp3");
        audioRef.current.volume = 0.6;
        
        audioRef.current.addEventListener('canplaythrough', () => {
          setIsLoading(false);
        });
        
        audioRef.current.addEventListener('error', () => {
          setHasError(true);
          setIsLoading(false);
        });
      }

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Audio playback failed:', error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 scale-110 transition-transform duration-1000">
        <img
          src="https://img.freepik.com/premium-photo/ai-generated-image-wedding-couple-church-high-quality-photo_470178-25465.jpg"
          alt="wedding couple in beautiful ceremony"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <Heart className="w-20 h-20 text-white animate-float" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Heart className="w-16 h-16 text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-left">
          {/* Elegant Subtitle */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
              <p className="text-white/90 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
                We are getting married
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>

          {/* Main Title with Elegant Typography */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
              <span className="font-serif italic">Jadon</span>
              <span className="mx-4 text-white/60">&</span>
              <span className="font-serif italic">Wedding</span>
            </h1>
          </div>

          {/* Subtitle with Shimmer Effect */}
          <div className="animate-fade-in-delay mb-12">
            <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide">
              <span className="relative">
                A celebration of love and unity
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer"></span>
              </span>
            </p>
          </div>

          {/* Enhanced Music Control */}
          <div className="animate-fade-in-delay flex items-center gap-4">
            <button
              className={`group relative w-20 h-20 flex items-center justify-center rounded-full 
                bg-white/10 backdrop-blur-md border border-white/20 
                shadow-[0_8px_32px_rgba(31,38,135,0.37)] 
                hover:bg-white/20 hover:scale-110 hover:border-white/30
                transition-all duration-300 ease-out
                ${isPlaying ? 'animate-pulse-glow' : ''}
                ${isLoading ? 'animate-pulse' : ''}
                ${hasError ? 'bg-red-500/20 border-red-500/30' : ''}
              `}
              onClick={toggleMusic}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : hasError ? (
                <Volume2 size={32} className="text-red-400" />
              ) : isPlaying ? (
                <Pause size={32} className="text-white group-hover:scale-110 transition-transform" />
              ) : (
                <Play size={32} className="text-white group-hover:scale-110 transition-transform ml-1" />
              )}
              
              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
            </button>

            <div className="flex flex-col">
              <span className="text-white/90 text-sm font-medium">
                {isLoading ? 'Loading...' : hasError ? 'Audio Error' : isPlaying ? 'Now Playing' : 'Play Music'}
              </span>
              <span className="text-white/60 text-xs">
                {!hasError && 'Romantic melody'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 border-4 border-white/10 pointer-events-none"></div>
    </div>
  );
}

export default BannerSection;