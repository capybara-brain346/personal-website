'use client';
import React, { useEffect } from 'react';

const TwitterFeed = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Twitter Feed</h2>
      <a 
        className="twitter-timeline" 
        data-theme="dark" 
        href="https://twitter.com/piyush_yip?ref_src=twsrc%5Etfw"
      >
        Tweets by piyush_yip
      </a>
    </div>
  );
};

export default TwitterFeed;
