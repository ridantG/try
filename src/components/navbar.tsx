import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Contests", href: "#contests" },
    { name: "Talents", href: "#talents" },
    { name: "About", href: "#about" },
    { name: "More", href: "#more" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/assets/home/logo.png"   // ✅ CORRECT PATH
            alt="Admere Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-2xl font-semibold text-gray-900">Admiree</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#login"
            className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
          >
            Login
          </a>

          <a
            href="#create-contest"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md hover:opacity-90 transition"
          >
            Create Contest
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-800"
          >
            {isMobileMenuOpen ? (
              <path d="M6 6l16 16M6 22L22 6" />
            ) : (
              <path d="M4 6h20M4 14h20M4 22h20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t mt-2 px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 font-medium py-2 border-b"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#login"
                className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition text-center"
              >
                Login
              </a>

              <a
                href="#create-contest"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md hover:opacity-90 transition text-center"
              >
                Create Contest
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
