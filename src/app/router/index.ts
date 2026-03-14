import { Router } from "express";
import { SpecialtyRouter } from "../modules/specialty/specialty.route.js";
import { AuthRoutes } from "../modules/auth/auth.route.js";


const router = Router()

router.use("/specialtis", SpecialtyRouter)
router.use("/auth", AuthRoutes)

export const IndexRouter = router