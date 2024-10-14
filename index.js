const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./errorHandler');
const SERVER_PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

const DB_CONNECTION_STRING = "mongodb+srv://sa:Ghghmlpzaq1@comp3123.f7zmt.mongodb.net/?retryWrites=true&w=majority&appName=comp3123"

mongoose.connect(DB_CONNECTION_STRING)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));     


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
}
app.use(loggerMiddleware);



app.use('/api/v1/emp', employeeRoutes);
app.use('/api/v1/user', userRoutes);

// Handle errors
app.use(errorHandler);

// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server listening at http://localhost:${SERVER_PORT}`)
})