import { Router } from "express";

export const routerAuth = Router()
routerAuth.post("/", postSessions) 