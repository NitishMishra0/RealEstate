import express from 'express';
import { signinController, signupController } from '../controllers/auth.js';

const authRouter=express.Router();

authRouter.post("/signup",signupController); 
authRouter.post("/signin",signinController);

export default authRouter;