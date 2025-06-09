function BannerSection() {
  const playMusic = () => {
    const audio = new Audio("");
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4">
      <h6 className="text-lg md:text-xl text-gray-600 mb-4">
        We are getting married
      </h6>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
        Jadon & Programmingg
      </h1>
      <img
        src="https://i.pinimg.com/736x/f4/d5/c3/f4d5c32e11446ccce158f83acbe4e4f7.jpg"
        alt="wedding"
        className="w-32 h-32 object-cover rounded-full mb-8"
      />
      <button
        className="rounded-full p-3 bg-gray-800 hover:bg-gray-700 text-white transition-colors"
        onClick={playMusic}
      >
        ▶️
      </button>
    </div>
  );
}

export default BannerSection;
