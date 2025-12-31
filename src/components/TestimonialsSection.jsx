import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "The quality of the coconut is good and worth for market price",
            author: "Thirumoorthi Traders",
            company: "Thirumoorthi Traders",
            rating: 5,
        },
        {
            quote: "The Timing on delivering the product is so good..also the product is good",
            author: "Balaji Bharani coirs",
            company: "Balaji Bharani coirs",
            rating: 5,
        },
        {
            quote: "The quality and price is so good.. customer handling is good",
            author: "Kannan coconuts",
            company: "Kannan coconuts",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-sand-beige to-coconut-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Trusted by businesses and individuals worldwide
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            company={testimonial.company}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
