import express from 'express'; 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config(); // This reads the .env file

const app = express();
const PORT = process.env.PORT || 5000 // This retrieves the port from the .env file and in the || it will automatically put it in to 5000 if I forgot to add it

app.use(express.json());

app.use("/api/products", productRoutes) // This will use the routes what are in the product.route.js. This makes the code much more cleaner and easy to read and maintain.

console.log(process.env.MONGO_URI); // This retrieves the URI from the .env file.

app.listen(5000, () => { // Starts the server at this port.
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});

//Mur8bkIJifKJR7ru