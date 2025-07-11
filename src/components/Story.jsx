import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles, Coffee, MapPin, Calendar, Star } from 'lucide-react';

const HowWeMet = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [storyRef, storyInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      icon: MapPin,
      title: "First Glance",
      date: "The Beginning",
      description: "A moment that seemed to pause time itself",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Coffee,
      title: "Coffee Conversations",
      date: "Getting Closer",
      description: "Coffe is best for our moments!",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Heart,
      title: "Love Bloomed",
      date: "The Realization",
      description: "When we knew this was something extraordinary",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Forever Begins",
      date: "Our Promise",
      description: "Ready to write our next chapter together",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-pink-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-rose-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-pink-200 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-16 right-16 opacity-10">
        <Sparkles className="w-12 h-12 text-rose-400 animate-float" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10">
        <Heart className="w-10 h-10 text-pink-400 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-1/3 right-8 opacity-10">
        <Star className="w-8 h-8 text-rose-300 animate-float" style={{ animationDelay: '3s' }} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10">
        <Sparkles className="w-6 h-6 text-pink-300 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
            <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            <span className="font-serif italic">Our Love Story</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto">
            Every great love story has a beginning, and ours started with a single moment that changed everything
          </p>
        </div>

        {/* Interactive Timeline */}
        <div 
          ref={timelineRef}
          className={`mb-20 transition-all duration-1200 ease-out ${
            timelineInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 via-pink-300 to-rose-400 rounded-full"></div>
            
            <div className="space-y-16 md:space-y-20">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center transition-all duration-1000 ease-out ${
                    timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Event - Alternating Layout */}
                  <div className={`w-full flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="w-5/12 hidden md:block">
                      <div className={`relative bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group ${
                        index % 2 === 0 ? 'mr-8' : 'ml-8'
                      }`}>
                        <div className={`text-${index % 2 === 0 ? 'left' : 'right'}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-8 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-rose-300 to-transparent' : 'from-transparent to-rose-300'}`}></div>
                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">{event.date}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif italic text-gray-800 mb-3">{event.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{event.description}</p>
                        </div>
                        
                        {/* Decorative Corner */}
                        <div className={`absolute ${index % 2 === 0 ? 'bottom-4 right-4' : 'bottom-4 left-4'} opacity-20`}>
                          <Heart className="w-6 h-6 text-rose-300" />
                        </div>
                      </div>
                    </div>

                    {/* Central Icon */}
                    <div className="relative z-10 mx-auto md:mx-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-full animate-ping opacity-20`}></div>
                    </div>

                    {/* Mobile Content */}
                    <div className="w-full md:hidden ml-6">
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                        <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">{event.date}</span>
                        <h3 className="text-lg font-serif italic text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="w-5/12 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Story Content */}
        <div 
          ref={storyRef}
          className={`transition-all duration-1000 ease-out ${
            storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Story Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* First Story Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">The First Chapter</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                  It began with a glance—one of those soft moments that seemed to pause time. 
                  A simple hello turned into late-night conversations, shared smiles, and slow-burning chemistry.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  We didn't rush. We let it unfold, letting each moment draw us closer, discovering the magic in ordinary days.
                </p>
                
                <div className="absolute bottom-4 right-4 opacity-20">
                  <Sparkles className="w-8 h-8 text-rose-300" />
                </div>
              </div>

              {/* Second Story Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">Growing Together</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                  From quiet coffee dates to spontaneous adventures, we found something rare—comfort in each other's presence. 
                  Love didn't just happen. It grew, steadily and deeply.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  And now, with full hearts, we're writing our next chapter—together, forever.
                </p>
                
                <div className="absolute bottom-4 left-4 opacity-20">
                  <Heart className="w-8 h-8 text-pink-300" />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
                <Heart className="w-8 h-8 text-rose-400 animate-pulse fill-current" />
                <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-gray-700 mb-4">
                "Every love story is beautiful, but ours is our favorite"
              </p>
              <p className="text-gray-600 font-light">
                Join us as we celebrate the beginning of our forever
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
  );
};

export default HowWeMet;