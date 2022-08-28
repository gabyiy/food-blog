import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from "path"
import seedRouter from './routes/seedRoutes.js';
import recipeRouter from './routes/recipesRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
const app = express();
//ca sa ne citeasca rutele din postman trebuie sa folosim  exress.json
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connect to mongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/seed', seedRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/users', userRouter);


const __dirname=path.resolve()
app.use(express.static(path.join(__dirname, "/frontend/build")))
app.get("*",(req,res)=>
res.sendFile(path.join(__dirname, "/backend/build/index.html")))



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up on port ${5000}`);
});
