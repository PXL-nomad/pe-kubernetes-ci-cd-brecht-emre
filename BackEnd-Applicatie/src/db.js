const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost/devopsapi';

const db = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
