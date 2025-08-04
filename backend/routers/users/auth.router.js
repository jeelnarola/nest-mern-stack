import express from 'express'
import { login, logout, register, updateProfile } from '../../controllers/auth/auth.controller.js'
import { protectRoute } from '../../middlewares/protectRoute.js'
export const authRoute = express.Router()

authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.post('/logout',logout)

authRoute.put("/update-profile",protectRoute,updateProfile)