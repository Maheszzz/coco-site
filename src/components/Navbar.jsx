import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className={`rounded-full overflow-hidden p-1 transition-all duration-300 ${isScrolled ? '' : 'bg-white/50 backdrop-blur-sm shadow-sm'}`}>
                            <img
                                src="/logo.png"
                                alt="Eighteen Siddhars Traders"
                                className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-semibold transition-all duration-300 hover:text-leaf-green relative group ${location.pathname === link.path
                                    ? 'text-leaf-green'
                                    : 'text-gray-700'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf-green transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg transition-colors duration-300 text-leaf-green hover:bg-green-50"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-semibold transition-colors duration-300 hover:text-leaf-green ${location.pathname === link.path
                                        ? 'text-leaf-green'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
