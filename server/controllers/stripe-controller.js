const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const YOUR_DOMAIN = 'http://localhost:3001';

module.exports = {
    async createCheckoutSession(req, res) {
        const session = await stripe.checkout.sessions.create({
            customer_email: 'havrushchenko@gmail.com',
            submit_type: 'donate',
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            line_items: [
                {
                    price: 13,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        res.send({ url: session.url });
    }
};

