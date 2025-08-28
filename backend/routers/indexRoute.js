import express from 'express'
import { authRoute } from './users/auth.router.js'
import { productRoute } from './products/productRoute.js'

export const indexRoute = express.Router()

indexRoute.use("/auth",authRoute)
indexRoute.use("/product",productRoute)