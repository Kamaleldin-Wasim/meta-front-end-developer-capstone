import React from 'react';

const testimonials = [
    { name: "Jane Doe", feedback: "Great service and support!" },
    { name: "John Smith", feedback: "I love the product quality!" },
    { name: "Emily Johnson", feedback: "Amazing experience, will come again!" },
    { name: "Michael Brown", feedback: "The staff were super friendly." }
];

const Customer = () => {
    return (
        <div className="customer-section" id="comments">
            <h2>What Customers Say About Us</h2>
            <div className="customer-cards">
                {testimonials.map((t, index) => (
                    <div className="customer-card" key={index}>
                        <p className="feedback">"{t.feedback}"</p>
                        <p className="customer-name">- {t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customer;
