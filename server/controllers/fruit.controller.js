const Fruit = require('../models/fruit.model');

module.exports = {

// CREATE --------------------------------------------------------------------------------------------
    createFruit: (req, res) => {
        const { name, type, subType, description, image, taken, awakened, knownUsers} = req.body;
        Fruit.create({
            name,
            type,
            subType,
            description,
            image,
            taken,
            awakened,
            knownUsers
        })
            .then((newFruit) =>
                res.json(newFruit))
            .catch((err) => {
                console.log(err)
            });
    },

// READ ----------------------------------------------------------------------------------------------

    getAllFruits: (req, res) => {
        Fruit.find({})
            .then((allFruits) => 
                res.json(allFruits))
            .catch((err) => {
                console.log(err)
            });
    },

    getOneFruit: (req, res) => {
        Fruit.findOne({ _id: req.params.id })
            .then((oneFruit) =>
                res.json(oneFruit))
            .catch((err) => {
                console.log(err)
            });
    },

// UPDATE ---------------------------------------------------------------------------------------

    updateFruit: (req, res) => {
        Fruit.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedFruit) =>
                res.json(updatedFruit))
            .catch((err) => {
                console.log(err)
            });
    },

// DELETE ------------------------------------------------------------------------

    deleteFruit: (req, res) => {
        Fruit.deleteOne({ _id: req.params.id })
            .then((fruit) => {
                console.log(fruit);
                res.json(fruit);
            })
            .catch((err) => {
                console.log(err)
            });
    },
}