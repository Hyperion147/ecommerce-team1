import React from 'react';
import FAQ from '../components/Faq.jsx';
import BusinessHours from '../components/BussinessHour.jsx';
import Footer from '../components/footer.jsx';
function Contact() {
    return (
        <>
            <div className="pt-20 h-96 flex flex-col items-center justify-center bg-gray-100 px-4">
                <h1 className="text-7xl mb-6 text-center text-gray-800">Get in Touch</h1>
                <p className="max-w-3xl text-lg text-gray-600 leading-relaxed text-center">
                    Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
            </div>

            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-black transition-colors"
                                        placeholder="Tarun Jangra"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-black transition-colors"
                                        placeholder="tarunjangra@threadverse.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-black transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    className="inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-black text-white hover:bg-[#2C2C2C] active:scale-95 px-8 py-4 text-lg w-full sm:w-auto"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div>
                            <h2 className="text-3xl lg:text-4xl mb-8">Contact Information</h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#D4A574]/10 rounded-full shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-mail w-6 h-6 text-[#D4A574]"
                                            aria-hidden="true"
                                        >
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Email</div>
                                        <a
                                            href="mailto:hello@threadverse.com"
                                            className="text-lg hover:text-[#D4A574] transition-colors"
                                        >
                                            hello@threadverse.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#D4A574]/10 rounded-full shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-phone w-6 h-6 text-[#D4A574]"
                                            aria-hidden="true"
                                        >
                                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Phone</div>
                                        <a
                                            href="tel:+919876543210"
                                            className="text-lg hover:text-[#D4A574] transition-colors"
                                        >
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#D4A574]/10 rounded-full shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-map-pin w-6 h-6 text-[#D4A574]"
                                            aria-hidden="true"
                                        >
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Address</div>
                                        <h2 className="text-lg">
                                            123 Fashion Street
                                            <br />
                                            Asand Road, Panipat 132103
                                            <br />
                                            Haryana, India
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/kakuboltehmujhe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-brand-black  text-white hover:bg-[#D4A574] rounded-full transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-instagram w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-brand-black text-white hover:bg-[#D4A574] rounded-full transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-facebook w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://x.com/tarunjangraa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-brand-black text-white hover:bg-[#D4A574] rounded-full transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-twitter w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 rounded-lg overflow-hidden border border-gray-200 h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8240828805145!2d76.968155!3d29.410358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6f259ffb15e3%3A0xXXXXXXXXXXXXXXX!2sPanipat%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="ThreadVerse Location"
                                    style={{ border: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ />
            <BusinessHours />
            <Footer />
        </>
    );
}

export default Contact;
