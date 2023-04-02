const mongoose = require('mongoose');

require('dotenv').config();
const db = process.env.MONGO_DATABASE.replace('<password>', process.env.MONGO_PASSWORD)


const connectDB = async () => {
    await mongoose.connect(db)
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is connected');
    }catch(err){
        console.log(err.messsage);
        process.exit(1);
    }
};

module.exports = connectDB;