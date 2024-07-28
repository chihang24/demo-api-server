import bcrypt from "bcrypy";
import jwt from "jsonwebtoken";
import { createNewUser } from "./auth.controller";

const userRoute = express.Router();

userRoute.post("/register", )
export const createUser = async (req, res) => {
    const { userName, email, password } = req.body
    
    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword)

    }
}