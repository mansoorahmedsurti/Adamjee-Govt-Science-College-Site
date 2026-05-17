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
            className="border-0 rounded-lg w-full max-w-4xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location Map"
          ></iframe>
        ) : (
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center max-w-4xl">
            <div className="text-gray-500">Loading map...</div>
          </div>
        )}
        <p className="mt-6 text-slate-600 text-center">
          <strong>Address:</strong> V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi
        </p>
        <p className="mt-3 text-sm text-slate-500 text-center">DDO Code: KQ2172 | Boys College</p>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 font-inter text-forest-green">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              content: 'V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi',
            },
            { icon: Award, title: 'Follow Us', content: 'Connect on social media' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-lg p-8 text-white hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-blue-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-blue-accent hover:text-blue-400 font-semibold"
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
                    className="text-blue-accent hover:text-blue-400"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/agsckarachii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-accent hover:text-blue-400"
                    aria-label="Official Facebook Page"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/groups/1007924619869977/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-accent hover:text-blue-400"
                    aria-label="SECCAP Facebook Group"
                  >
                    <Award size={24} />
                  </a>
                </div>
              ) : (
                <p className="text-blue-accent">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <LazyMap />
      </div>
    </section>
  );
}