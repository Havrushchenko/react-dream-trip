const { Passenger } = require('../models');

module.exports = {
    // ADD SINGLE Passenger -> -> POST /api/flights/:id/passengers/
    addPassenger(req, res) {
        Passenger.create(body)
        .then(dbPassengerData => {
            User.findOneAndUpdate({ _id: body.PassengerId }, { $push: { thoughts: dbPassengerData._id } }, { new: true })
            .then(dbPassengerData => {
                if (!dbPassengerData) {
                    res.status(404).json({ message: body });
                    return;
                    }
                res.json(dbPassengerData);
                })
            .catch(err => res.json(err));
            })
        .catch(err => res.status(400).json(err));
        },

    // EDIT SINGLE Passenger -> -> PUT /api/flights/:id/passengers/:id
    updatePassenger({params, body}, res) {
        Passenger.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbPassengerData => {
            if (!dbPassengerData) {
                res.status(404).json({ message: 'No passenger found with this Id' });
                return;
                }
            res.json(dbPassengerData);
            })
        .catch(err => res.json(err)); 
        },

    // DELETE SINGLE Passenger -> -> DELETE /api/flights/:id/passengers/:id
    deletePassenger({params}, res) {
        Passenger.findOneAndRemove({_id: params.id})
        .then(dbPassengerData => {
            if (!dbPassengerData) {
                res.status(404).json({ message: 'No passenger found with this Id' });
                return;
                }
            res.json({message: 'Successfully deleted the passenger'});
            })
        .catch(err => res.json(err)); 
        }
    }