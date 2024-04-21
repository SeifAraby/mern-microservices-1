const mongoose = require('mongoose');

// MongoDB connection URI with username and password
const uri = `mongodb://admin:admin123@mern-microservices-1-db:27017/microservices-test`;

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = { mongoose };
