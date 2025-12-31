import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-leaf-green focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-leaf-green focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                />
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-leaf-green focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full btn-primary text-lg"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
