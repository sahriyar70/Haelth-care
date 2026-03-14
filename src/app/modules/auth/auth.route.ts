
import { Router } from "express";
import { Authcontroller } from "./auth.controller.js";

const route = Router ()
 route.post("/register", Authcontroller.registerpatient)

export const AuthRoutes = route