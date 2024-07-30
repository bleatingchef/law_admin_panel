import express from "express";
const router = express.Router();

import { getuser, loginCheck, loginUser, logout, registerUser, updatePassword, updateUser } from "../controllers/userController.js";
// import protect from "../middlewares/authMiddleware.js";


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logincheck',loginCheck);
router.get('/logout',logout);

export default router;