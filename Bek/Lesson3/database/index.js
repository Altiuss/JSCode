import mongoose from "mongoose";

mongoose.connect('mongodb+srv://altiuss:karlis75@cluster0.wbjr2ok.mongodb.net/?retryWrites=true&w=majority&dbName=users')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Could not connect to MongoDB', err));


// import express from 'express';