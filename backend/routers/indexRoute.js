import express from 'express'
import { authRoute } from './users/auth.router.js'

export const indexRoute = express.Router()

indexRoute.use("/auth",authRoute)