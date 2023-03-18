const router = require("express").Router();
const userRoutes = require("./user-routes");
const flightoutRoutes = require("./flightout-routes");
const messageRoutes = require("./message-routes");
const stripeRoutes = require("./stripe-routes");

router.use("/users", userRoutes);
router.use("/flightouts", flightoutRoutes);
router.use("/messages", messageRoutes);
router.use("/stripe", stripeRoutes);

module.exports = router;
