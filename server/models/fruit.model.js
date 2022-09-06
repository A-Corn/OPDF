const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
    },
    subType: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        required: [true, "An image is required, Please insert the link to the image"],
    },
    taken: {
        type: Boolean,
    },
    awakened: {
        type: Boolean,
    },
    knownUsers: {
        type: String,
    },

}, { timestamps: true })

module.exports = mongoose.model("Fruit", FruitSchema);