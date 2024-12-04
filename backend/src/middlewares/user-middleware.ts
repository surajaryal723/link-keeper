import { NextFunction,Request,Response } from "express"
import jwt from "jsonwebtoken"


declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

interface JwtPayload {
    _id: string;
}

export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    if(!req.headers['authorization']){
        res.json({
            message:'Invalid request!'
        })
        return;
    }

    try {
        jwt.verify(req.headers['authorization'] as string, process.env.JWT_SECRET as string);
    } catch(err) {
        res.json({
            message: 'Invalid token!'
        });
        return;
    }

    let user = jwt.verify(req.headers['authorization'] as string, process.env.JWT_SECRET as string) as JwtPayload;
    req.userId = user._id;
    next()
}