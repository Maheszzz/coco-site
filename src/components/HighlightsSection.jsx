const HighlightsSection = () => {
    const highlights = [
        {
            icon: '🌱',
            title: 'Organic Sourcing',
            description: 'All our coconuts are sourced from certified organic farms, ensuring the highest quality and purity in every product.',
        },
        {
            icon: '♻️',
            title: 'Sustainability',
            description: 'We practice sustainable farming methods that protect the environment and support local communities.',
        },
        {
            icon: '🌍',
            title: 'Local Distribution',
            description: 'We focus on distributing our products locally to ensure peak freshness and support our regional economy and community.',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-coconut-white to-sand-beige">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Why Choose CocoNut?</h2>
                    <p className="section-subtitle">
                        We're committed to delivering excellence in every aspect of our business
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="glass-card text-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-6xl mb-4">{highlight.icon}</div>
                            <h3 className="text-2xl font-bold text-earth-brown mb-3">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
