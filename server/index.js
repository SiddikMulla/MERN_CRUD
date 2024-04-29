import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://Sid747:siddik2471@cluster0.xpkwjos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT =process.env.PORT || 5000;

// const CONNECTION_URL = process.env.CONNECTION_URL
// const PORT =process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is Running on port:${PORT}`)))
    .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify',false);