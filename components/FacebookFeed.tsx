import React from 'react';

const FacebookFeed = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-2 text-center">
        <span className="text-sm text-gray-600 font-medium">
          Scroll for more →
        </span>
      </div>
      <div
        className="overflow-x-auto pb-4"
        style={{
          scrollbarWidth: 'thin',
          msOverflowStyle: 'thin',
          WebkitOverflowScrolling: 'touch' // For smooth scrolling on iOS
        }}
      >
        <div className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[500px] min-h-[500px]">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fagsckarachii&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1601690747533752"
            width="340"
            height="500"
            style={{
              border: 'none',
              overflow: 'hidden',
              minWidth: '340px',
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
      </div>
    </div>
  );
};

export default FacebookFeed;