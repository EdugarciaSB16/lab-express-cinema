const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        unique: true,
    },

    director:{
        type:String,
        required: true,
    },

    image: {
        type: String,
        validate: {
            validator: (text) => {
                return text.startsWith("http");
            },
            message: "URL must start with HTTP/HTTPS"
        }
    },

    description:{
        type: String,
        require: true,
    },

    showtimes:{
        type: [String],
        required: true,
    },
})

const Movie = mongoose.model("Movie", movieScheme)

module.exports = Movie

