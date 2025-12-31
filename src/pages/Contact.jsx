import { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: 'What is your minimum order quantity?',
            answer: 'Our minimum order quantity varies by product. For retail customers, we offer small quantities. For wholesale and bulk orders, please contact our sales team for specific MOQ requirements.',
        },
        {
            question: 'Do you offer local distribution?',
            answer: 'Yes, we provide specialized local distribution services within our region. We have a dedicated logistics network that ensures fast and reliable delivery to all our local partners.',
        },
        {
            question: 'Are your products certified organic?',
            answer: 'Yes, all our coconut products are sourced from certified organic farms. We maintain strict quality control and can provide certification documents upon request.',
        },
        {
            question: 'Can you provide custom packaging?',
            answer: 'Absolutely! We offer private labeling and custom packaging solutions for businesses. Our team can help you create a unique brand identity for your coconut products.',
        },
        {
            question: 'What is your typical lead time?',
            answer: 'Lead times vary depending on order size and destination. Typically, domestic orders ship within 3-5 business days, while international orders take 2-4 weeks including customs clearance.',
        },
    ];

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-br from-leaf-green via-light-green to-earth-brown text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                        We're here to help! Reach out to us for any questions,
                        inquiries, or support you need.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-coconut-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="card">
                            <h2 className="text-3xl font-bold text-earth-brown mb-6">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div>
                            {/* Business Details */}
                            <div className="card mb-8">
                                <h2 className="text-3xl font-bold text-earth-brown mb-6">
                                    Get in Touch
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-leaf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-earth-brown mb-1">Email</h3>
                                            <p className="text-gray-600">info@coconutbusiness.com</p>
                                            <p className="text-gray-600">sales@coconutbusiness.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-leaf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-earth-brown mb-1">Phone</h3>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                            <p className="text-gray-600">+1 (555) 987-6543</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-leaf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-earth-brown mb-1">Location</h3>
                                            <p className="text-gray-600">
                                                123 Coconut Grove Avenue<br />
                                                Tropical Business Park<br />
                                                Paradise City, PC 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-leaf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">⏰</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-earth-brown mb-1">Business Hours</h3>
                                            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                            <p className="text-gray-600">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Support Message */}
                            <div className="bg-gradient-coconut text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-3">24/7 Support Available</h3>
                                <p className="text-white/90">
                                    Our dedicated support team is available around the clock to assist you
                                    with any questions or concerns. We're committed to providing excellent
                                    customer service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-sand-beige">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="section-title text-center mb-12">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <span className="font-bold text-earth-brown pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="text-2xl text-leaf-green flex-shrink-0">
                                            {openFAQ === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openFAQ === index && (
                                        <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
