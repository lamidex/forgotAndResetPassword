const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
      console.log('Connected to Mongoose');
        } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
