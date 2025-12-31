import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in tracking-tight text-earth-brown leading-tight">
                        Eighteen siddhars traders. <br />
                        <span className="bg-gradient-to-r from-leaf-green to-dark-green bg-clip-text text-transparent">
                            Pure Coconut.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed max-w-2xl mx-auto animate-slide-up font-medium">
                        Experience the finest coconut products from sustainable sources.
                        From our tropical plantations to your table, we bring you nature's
                        purest goodness.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
                        <Link
                            to="/products"
                            className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Explore Products
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-secondary text-lg px-8 py-4 border-2 hover:bg-leaf-green hover:text-white"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
                        <div className="glass-card transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-leaf-green">100%</div>
                            <div className="text-lg font-semibold text-gray-700">Organic</div>
                        </div>
                        <div className="glass-card transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-leaf-green">10+</div>
                            <div className="text-lg font-semibold text-gray-700">Districts Served</div>
                        </div>
                        <div className="glass-card transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-leaf-green">10K+</div>
                            <div className="text-lg font-semibold text-gray-700">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
