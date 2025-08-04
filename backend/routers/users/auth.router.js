import express from 'express'
import { login, register } from '../../controllers/auth/auth.controller.js'
export const authRoute = express.Router()

authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.post('/logout',login)