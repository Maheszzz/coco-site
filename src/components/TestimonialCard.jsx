const TestimonialCard = ({ quote, author, company, rating = 5 }) => {
    return (
        <div className="glass-card">
            {/* Star Rating */}
            <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    >
                        ⭐
                    </span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-center mb-6 italic leading-relaxed">
                "{quote}"
            </p>

            {/* Author Info */}
            <div className="text-center border-t border-gray-200 pt-4">
                <p className="font-bold text-earth-brown">{author}</p>
                <p className="text-sm text-gray-500">{company}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
