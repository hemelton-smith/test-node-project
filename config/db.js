const mongoose = require('mongoose');
require('colors');

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  console.log(`connected to server: ${conn.connection.host}`.bgCyan.bold);
};

module.exports = dbConnect;
