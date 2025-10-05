import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d14] border-t border-[rgba(255,255,255,0.08)] py-10 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-[rgba(224,230,237,0.8)]">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            UpliftCode
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Code to Confidence — AI-driven development, QA, and evaluations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-purple-400">Home</a></li>
            <li><a href="#services" className="hover:text-purple-400">Services</a></li>
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#contact-us" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <p>Email: <span className="text-purple-400">contact@upliftcode.com</span></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Mon - Fri: 9:00 AM - 6:00 PM PST</p>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-[rgba(224,230,237,0.6)]">
        © {new Date().getFullYear()} UpliftCode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
