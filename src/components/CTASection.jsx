import { Link } from 'react-router-dom';

const CTASection = ({
    title = "Ready to Experience Pure Coconut?",
    subtitle = "Join thousands of satisfied customers worldwide",
    buttonText = "Get Started Today",
    buttonLink = "/contact"
}) => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-coconut opacity-95"></div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-white/90 animate-slide-up">
                        {subtitle}
                    </p>
                    <Link
                        to={buttonLink}
                        className="inline-block px-8 py-4 bg-white text-leaf-green font-bold rounded-lg hover:bg-sand-beige transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
