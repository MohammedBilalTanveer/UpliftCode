/* File: src/components/Navigation.jsx */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import PropTypes from "prop-types";

/**
 * @param {{ currentPage: string, onPageChange: (page: string) => void }} props
 */
export function Navigation({ currentPage, onPageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "About", "Contact Us"];

  const scrollToSection = (sectionId) => {
    const id = sectionId.toLowerCase().replace(" ", "-");
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    onPageChange && onPageChange(sectionId);
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("Home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow">
              <span className="text-white font-bold">U</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              UpliftCode
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 transition-all duration-200 text-sm font-medium ${currentPage === item
                  ? "text-purple-400"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ scale: 1.03 }}
              >
                {item}
                {currentPage === item && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right actions */}
          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Show only on lg and larger screens */}
            <Button
  className="inline-flex flex-shrink-0 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-md text-sm px-6 py-2 h-10 hide"
  onClick={() => scrollToSection("Contact Us")}
>
  Get Started
</Button>

            {/* Mobile toggle */}
            <motion.button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left px-2 py-2 rounded-md transition-colors ${currentPage === item
                    ? "text-purple-400"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string,
  onPageChange: PropTypes.func,
};
