import {Router} from 'express'
import { UserModel } from '../db/models/user-model'
const userRouter=Router()

userRouter.get('/',(req,res)=>{
   res.json({
      message:'User router'
   })
})

export default userRouter