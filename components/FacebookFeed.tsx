import React from 'react';

const FacebookFeed = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
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
    </div>
  );
};

export default FacebookFeed;