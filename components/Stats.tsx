'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Stats() {
  function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 1000 / 60);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
  }

  return (
    <section className="py-20 bg-white border-t-4 border-blue-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="counter-card hover-lift">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-accent">
              <AnimatedCounter end={1500} />
              <span className="text-lg sm:text-xl md:text-2xl ml-1">+</span>
            </div>
            <div className="text-gray-600 mt-2">Students Enrolled</div>
          </div>
          <div className="counter-card hover-lift">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-accent">
              <AnimatedCounter end={62} />
              <span className="text-lg sm:text-xl md:text-2xl ml-1">+</span>
            </div>
            <div className="text-gray-600 mt-2">Years of Excellence</div>
          </div>
          <div className="counter-card hover-lift">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-accent">
              <AnimatedCounter end={25000} />
              <span className="text-lg sm:text-xl md:text-2xl ml-1">+</span>
            </div>
            <div className="text-gray-600 mt-2">Alumni Worldwide</div>
          </div>
          <div className="counter-card hover-lift">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-accent">
              <AnimatedCounter end={80} />
              <span className="text-lg sm:text-xl md:text-2xl ml-1">+</span>
            </div>
            <div className="text-gray-600 mt-2">Faculty Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}