'use client';

import React, { useState, useEffect, useRef } from 'react';

const FacebookFeed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto">
      {isVisible ? (
        <div className="flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fagsckarachii&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1601690747533752"
            width="340"
            height="500"
            style={{
              border: 'none',
              overflow: 'hidden',
              maxWidth: '100%'
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
            title="AGSC Facebook Feed"
          />
        </div>
      ) : (
        <div className="flex justify-center w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-500">Loading Facebook feed...</div>
        </div>
      )}
    </div>
  );
};

export default FacebookFeed;