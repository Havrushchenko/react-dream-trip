const router = require('express').Router();
const {
    createCheckoutSession,
} = require('../../controllers/stripe-controller');

router.route('/create-checkout-session').post(createCheckoutSession);

module.exports = router;