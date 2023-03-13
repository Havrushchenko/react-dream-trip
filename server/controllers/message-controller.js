const { Message } = require('../models');

module.exports = {
    async getAllMessages(req, res) {
        Message.find({})
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    async createMessage({ body }, res) {
        Message.create(body)
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => res.status(400).json(err));
    },
};
