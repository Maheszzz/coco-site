import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const Services = () => {
    const services = [
        {
            icon: '🌴',
            title: 'Coconut Farming & Sourcing',
            description: 'We work directly with certified organic coconut farms, ensuring sustainable practices and the highest quality coconuts from plantation to processing.',
        },
        {
            icon: '🏭',
            title: 'Coconut Oil Manufacturing',
            description: 'State-of-the-art cold-press extraction facilities produce premium coconut oil while preserving all natural nutrients and flavors.',
        },
        {
            icon: '🚚',
            title: 'Local Distribution',
            description: 'A dedicated local distributor serving several districts. We ensure our high-quality coconut products are readily available to local markets and businesses.',
        },
        {
            icon: '🏷️',
            title: 'Private Labeling',
            description: 'We provide flexible private labeling and custom branding solutions, supplying high-quality coconut products to startup businesses at low prices to help them establish their brand.',
        },
        {
            icon: '📦',
            title: 'Bulk Supply',
            description: 'Competitive pricing for bulk orders. Perfect for manufacturers, distributors, and retailers looking for consistent quality supply.',
        },
        {
            icon: '✅',
            title: 'Quality Assurance',
            description: 'Rigorous quality control at every step. All products are tested and certified to meet international food safety standards.',
        },
    ];

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-br from-leaf-green to-dark-green text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                        Comprehensive coconut solutions from farm to your doorstep.
                        We provide end-to-end services for all your coconut product needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-coconut-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Partner with Us?"
                subtitle="Let's discuss how we can meet your coconut product needs"
                buttonText="Contact Our Team"
            />
        </div>
    );
};

export default Services;
