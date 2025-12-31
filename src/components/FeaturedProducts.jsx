import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const products = [
        {
            image: '/coconutoil.png',
            name: 'Coconut Oil',
            _description_1: 'Premium cold-pressed coconut oil is rich in natural nutrients and ideal for healthy cooking, skincare, and hair care.',
            get description() {
                return this._description_1;
            },
            set description(value) {
                this._description_1 = value;
            },
        },
        {
            image: '/coco-nut.jpeg',
            name: 'Coconut ',
            description: 'Coconut is a tropical fruit with rich, creamy flesh, commonly used to make coconut milk, cream, and oil for curries, desserts, and dairy-free dishes.',
        },
        {
            image: '/greencoconut.jpg',
            name: 'Green Coconut',
            _description: 'Green coconut is a tropical fruit with a hard outer shell and a sweet, juicy flesh, commonly used in Southeast Asian cuisine.',
            get description() {
                return this._description;
            },
            set description(value) {
                this._description = value;
            },
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Featured Products</h2>
                    <p className="section-subtitle">
                        Discover our premium range of coconut products
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link to="/products" className="btn-primary">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
