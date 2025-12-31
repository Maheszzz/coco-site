import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Products', path: '/products' },
            { name: 'Contact', path: '/contact' },
        ],
        products: [
            { name: 'Coconut Oil', path: '/products' },
            { name: 'Coconut', path: '/products' },
            { name: 'Green Coconut', path: '/products' }
        ],
    };

    const socialLinks = [
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/est_coco_/' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
    ];

    return (
        <footer className="bg-gradient-to-br from-earth-brown via-leaf-green to-dark-green text-white">


            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl">🥥</span>
                            </div>
                            <span className="font-playfair text-2xl font-bold">CocoNut</span>
                        </div>
                        <p className="text-white/80 mb-4">
                            Premium coconut products from sustainable sources. Bringing pure coconut goodness to the world.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-playfair text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/80 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="font-playfair text-xl font-bold mb-4">Our Products</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/80 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 text-center text-white/80">
                    <p>
                        © {currentYear} Eighteen siddhars traders. All rights reserved. | Pure Coconut. Pure Life.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
