'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MapPin, Mail, Instagram, Facebook, Award, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  function LazyMap() {
    const [isVisible, setIsVisible] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (mapRef.current) {
        observer.observe(mapRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center w-full"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-forest-green">Visit Our Campus</h3>
        {isVisible ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.0202147398163!2d67.03369537393587!3d24.8818531444039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5ae41c22e3%3A0x5dc5d346d9ff179b!2sAdamjee%20Govt.%20Science%20College-%20Karachi!5e1!3m2!1sen!2s!4v1768140767645!5m2!1sen!2s"
            width="100%"
            height="400"
            className="border-0 rounded-2xl w-full max-w-5xl shadow-xl ring-1 ring-blue-100"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location Map"
          />
        ) : (
          <div className="w-full h-96 bg-slate-100 rounded-2xl flex items-center justify-center max-w-5xl ring-1 ring-blue-100">
            <div className="text-slate-500">Loading map...</div>
          </div>
        )}
        <p className="mt-6 text-slate-700 text-center max-w-3xl">
          <strong>Address:</strong> V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi
        </p>
        <p className="mt-3 text-sm text-slate-500 text-center">DDO Code: KQ2172 | Boys College</p>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white/70 border-t border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter text-forest-green text-center">Get In Touch</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Reach us for admissions, academic queries, and campus information.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, title: 'Email', content: 'agsckarachi@gmail.com', link: 'mailto:agsckarachi@gmail.com' },
            { icon: Phone, title: 'Phone', content: '02199215689', link: 'tel:02199215689' },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              content: '+92 333 2388124',
              link: 'https://wa.me/923332388124',
            },
            {
              icon: MapPin,
              title: 'Location',
              content: 'Business Recorder Road, Soldier Bazaar, Garden East, Karachi',
            },
            { icon: Award, title: 'Follow Us', content: 'Connect on social media' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/90 border border-blue-100 rounded-2xl p-7 text-[#1e3a8a] hover-lift shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-flex w-10 h-10 rounded-xl items-center justify-center bg-blue-100 mb-4">
                <item.icon className="text-[#2563eb]" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-[#2563eb] hover:text-[#1e40af] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              ) : item.title === 'Follow Us' ? (
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/agsckarachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] hover:text-[#1e40af]"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/agsckarachii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] hover:text-[#1e40af]"
                    aria-label="Official Facebook Page"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/groups/1007924619869977/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] hover:text-[#1e40af]"
                    aria-label="SECCAP Facebook Group"
                  >
                    <Award size={24} />
                  </a>
                </div>
              ) : (
                <p className="text-[#2563eb]">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <LazyMap />
      </div>
    </section>
  );
}
