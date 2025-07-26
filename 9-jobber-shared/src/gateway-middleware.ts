import JWT from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"

const tokens:string[] = ['auth','seller','gig','search','buyer','message','order','review'];