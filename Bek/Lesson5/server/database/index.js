import mongoose from "mongoose";
import { password } from "./password.js";

mongoose.connect(`mongodb+srv://altiuss:${password}@cluster0.wbjr2ok.mongodb.net/?retryWrites=true&w=majority&dbName=altiuss`)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

