const mongoose = require('mongoose')

//conexion a mongodb, base de datos SmartGym
const mongo_uri = 'mongodb://127.0.0.1:27017/SmartGym';

mongoose.connect(mongo_uri).then(() => {
    console.log(`Successfully connected to ${mongo_uri}`);
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);

});


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthdate: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true }
});

module.exports = mongoose.model('User', UserSchema);

