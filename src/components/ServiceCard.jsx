const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="card group cursor-pointer">
            <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-coconut rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-4xl">{icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-earth-brown mb-3 group-hover:text-leaf-green transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
