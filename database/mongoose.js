const mongoose = require('mongoose');

// MongoDB connection URI with username and password
const uri = `mongodb://admin:admin123@localhost:27017/microservices-test`;

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = { mongoose };
