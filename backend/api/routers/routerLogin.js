import { register,login } from "../controllers/login.js";
import  express  from "express";
const app = express();

// register
app.post("/api/v1/register",register);
// login
app.post("/api/v1/login",login);

export default app;