import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';

const Products = () => {
    const products = [
        {
            image: 'coconutoil.png',
            name: 'Coconut oil',
            description: 'Premium cold-pressed coconut oil, rich in MCT and lauric acid. Perfect for cooking, skincare, and wellness.',
        },
        {
            image: 'coco-nut.jpeg',
            name: 'Pure Coconut ',
            description: 'Fresh, natural coconut packed with electrolytes. The perfect hydration solution for active lifestyles.',
        },
        {
            image: 'greencoconut.jpg',
            name: 'Green Coconut',
            description: 'Pure white coconut flakes, finely shredded and dried. Ideal for baking, cooking, and healthy snacking.',
        },
        {
            image: 'browncoconut.jpg',
            name: 'Brown Coconut',
            description: 'Eco-friendly bowls, utensils, and crafts made from coconut shells. Sustainable and beautifully handcrafted.',
        },
        {
            image: '/cocoshell.jpg',
            name: 'Coconut Shell',
            description: 'Natural, low-glycemic sweetener made from coconut palm sap. A healthier alternative to refined sugar.',
        },
        {
            image: '/mattai.jpeg',
            name: 'Coconut husk',
            description: 'Creamy, rich coconut milk extracted from fresh coconut meat. Perfect for cooking and beverages.',
        },
    ];

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-br from-earth-brown to-leaf-green text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                        Discover our premium range of coconut products.
                        Each product is crafted with care, ensuring the highest quality and purity.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-coconut-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    {/* Category Badge */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-6 py-2 bg-leaf-green text-white rounded-full font-semibold">
                            All Products
                        </span>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Interested in Bulk Orders?"
                subtitle="Contact us for special pricing and custom solutions"
                buttonText="Request a Quote"
            />
        </div>
    );
};

export default Products;
