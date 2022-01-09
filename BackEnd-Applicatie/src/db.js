const mongoose = require('mongoose');
const uri = process.env.CONNECTIONSTRING || 'mongodb://localhost/devopsapi';

(async () => {
    try {
      const db = await mongoose.connect(uri);
      console.log("Db connected to", db.connection.name);
    } catch (error) {
      console.error(error);
    }
  })();
