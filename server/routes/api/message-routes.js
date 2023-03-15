const router = require('express').Router();
const {
    getAllMessages,
    createMessage
} = require('../../controllers/message-controller');

router.route('/create-checkout-session').post(createMessage);

module.exports = router;