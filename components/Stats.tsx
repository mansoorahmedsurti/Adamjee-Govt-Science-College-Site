'use client';

import { useState, useRef, useEffect } from 'react';
import { GraduationCap, Clock3, Globe2, Users } from 'lucide-react';

const statItems = [
  { title: 'Students Enrolled', value: 1500, suffix: '+', icon: GraduationCap },
  { title: 'Years of Excellence', value: 62, suffix: '+', icon: Clock3 },
  { title: 'Alumni Worldwide', value: 25000, suffix: '+', icon: Globe2 },
  { title: 'Faculty Members', value: 80, suffix: '+', icon: Users },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

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

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f4f7fc] to-white border-y border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-forest-green">At a Glance</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A legacy of merit, mentorship, and outcomes that shape generations of learners.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statItems.map((item) => (
            <div key={item.title} className="counter-card hover-lift">
              <div className="relative z-10">
                <div className="inline-flex w-11 h-11 rounded-xl items-center justify-center bg-blue-100 text-blue-accent mb-4">
                  <item.icon size={22} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-accent leading-tight">
                  <AnimatedCounter end={item.value} />
                  <span className="text-xl md:text-2xl ml-1">{item.suffix}</span>
                </div>
                <div className="text-slate-600 mt-2 font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
