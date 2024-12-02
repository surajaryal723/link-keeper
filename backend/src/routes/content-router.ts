import {Router} from 'express'
import { contentModel } from '../db/models/content-model'
const contentRouter=Router()

contentRouter.get('/',(req,res)=>{
    res.json({
       message:'content router'
    })
 })

export default contentRouter