import React from 'react';

function BusinessHours() {
    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl mb-8">Business Hours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div>
                            <div className="mb-4">
                                <span className="text-2xl font-semibold text-gray-900">Customer Support</span>
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                <p>Saturday: 10:00 AM - 6:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4">
                                <span className="text-2xl font-semibold text-gray-900">Store Visits</span>
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <p>By Appointment Only</p>
                                <p>Email us to schedule a visit</p>
                                <p>to our Panipat showroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessHours;
