'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, MessageCircle, 
  Mail, MapPin, ArrowRight, Code, Zap, Heart, Phone, X
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'AI & Machine Learning', href: '/services#ai' },
    { label: 'Cloud Infrastructure', href: '/services#cloud' },
    { label: 'Web Development', href: '/services#web' },
    { label: 'Blockchain & Web3', href: '/services#web3' },
    { label: 'Mobile Development', href: '/services#mobile' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Open Source', href: '/open-source' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Community', href: '/community' },
    { label: 'Help Center', href: '/help' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Security', href: '/security' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
  { icon: MessageCircle, href: 'https://www.jotform.com/agent/019bfac3b0dc7399a769dcfd5aee9051742b', label: 'Chat', color: 'hover:text-cyan-400' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: MessageCircle, href: '#', label: 'Discord', color: 'hover:text-purple-400' },
];

const founderContacts = [
  { name: 'Nikhil Yadav', phone: '8355065408', role: 'Founder' },
  { name: 'Ayush Bajpai', phone: '6393403504', role: 'Co-Founder' },
  { name: 'Ayush Mishra', phone: '6392116681', role: 'Tech-Lead' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '150+', label: 'Happy Clients' },
    { value: '10M+', label: 'Lines of Code' },
    { value: '99.9%', label: 'Uptime Maintained' },
  ];

  if (!mounted) return null;

  return (
    <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent" />
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 cursor-hover">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">CACHEBUGS</span>
                <span className="text-xs text-gray-500 -mt-1">By CACHEBUGIANS</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A elite collective of developers, engineers, and innovators building the future of technology. 
              We transform ambitious ideas into production-ready solutions.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Subscribe to our tech insights</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-4 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 ${social.color} hover:bg-white/10 transition-all cursor-hover`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column Links Mapping */}
          {['services', 'company', 'resources'].map((section) => (
            <div key={section}>
              <h4 className="text-white font-semibold mb-4 capitalize flex items-center gap-2">
                {section === 'services' && <Zap className="w-4 h-4 text-cyan-400" />}
                {section === 'company' && <Code className="w-4 h-4 text-purple-400" />}
                {section === 'resources' && <Heart className="w-4 h-4 text-pink-400" />}
                {section}
              </h4>
              <ul className="space-y-3">
                {footerLinks[section as keyof typeof footerLinks].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors cursor-hover text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">KANPUR<br />UTTAR PRADESH, INDIA</span>
              </li>
              
              {founderContacts.map((founder) => (
                <li key={founder.phone}>
                  <a
                    href={`tel:+91${founder.phone}`}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all cursor-hover group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{founder.name}</p>
                      <p className="text-cyan-400 text-xs">+91 {founder.phone}</p>
                    </div>
                  </a>
                </li>
              ))}

              {/* Popup Trigger Button */}
              <li className="pt-2">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CACHEBUGS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            <span>by CACHEBUGS</span>
          </div>
        </div>
      </div>

      {/* Formspree Popup Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Book a Call</h3>
              <p className="text-gray-400 mb-6">Leave your details and we'll reach out shortly.</p>

              <form 
                action="https://formspree.io/f/xkovgrdg" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nikhil Yadav"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all mt-4"
                >
                  Submit Details
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
