import express from 'express'
import { register } from '../../controllers/auth/auth.controller.js'
export const authRoute = express.Router()

authRoute.post('/register',register)