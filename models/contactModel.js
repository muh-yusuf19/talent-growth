const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Contact", ContactSchema)
