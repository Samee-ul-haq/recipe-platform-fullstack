import express from "express";
import { loginUser, 
    registerUser }
     from "../controllers/usercontroller.js";
import {verifyToken} from '../middleware/authmiddleware.js';

const router=express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

export default router