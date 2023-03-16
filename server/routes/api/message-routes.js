const router = require('express').Router();
const {
    getAllMessages,
    createMessage
} = require('../../controllers/message-controller');

router.route('/').get(getAllMessages);
router.route('/').post(createMessage);

module.exports = router;