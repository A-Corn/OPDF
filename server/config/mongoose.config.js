const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mern_exam' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => 
        console.log('Established a connection with the database! '))
    .catch( err => 
        console.log('Something went wrong when connection to the database ', err));