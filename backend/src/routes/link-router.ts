import {Router} from 'express'
import { linkModel } from '../db/models/link-model'
const linkRouter=Router()

linkRouter.get('/',(req,res)=>{
    res.json({
       message:'link router'
    })
 })

export default linkRouter