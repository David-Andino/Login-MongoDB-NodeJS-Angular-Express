const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbURL, { useUnifiedTopology: true })  // Eliminamos useNewUrlParser ya que es deprecado
        .then(() => console.log(`Mongo connected on ${dbURL}`))
        .catch(err => console.log(`Connection has error ${err}`));

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(`Mongo is disconnected`);
            process.exit(0);
        });
    });
};
