import { Router } from "express";
import { SpecialtyRouter } from "../modules/specialty/specialty.route";

const router = Router()

router.use("/specialtis", SpecialtyRouter)

export const IndexRouter = router