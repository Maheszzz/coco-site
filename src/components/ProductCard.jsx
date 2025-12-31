const ProductCard = ({ image, name, description }) => {
    return (
        <div className="card group cursor-pointer overflow-hidden">
            {/* Image Container */}
            <div className="relative h-64 mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-earth-brown mb-2 group-hover:text-leaf-green transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
