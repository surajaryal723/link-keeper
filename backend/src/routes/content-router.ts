import { Router } from "express";
import { contentModel } from "../db/models/content-model";

import { userMiddleware } from "../middlewares/user-middleware";
import { UserModel } from "../db/models/user-model";

const contentRouter = Router();

contentRouter.get('/',userMiddleware,async(req,res)=>{
   let userId=req.userId
   let contents=await contentModel.find({userId}).populate('userId', 'firstname lastname email')
   res.json({
      message:contents
   })
})
contentRouter.post("/upload",userMiddleware, async (req, res) => {
   let userId=req.userId
  let { type, link } = req.body;
  let checkLink = await contentModel.findOne({ link: link });
  if (checkLink) {
    res.json({
      message: "Link is already present!",
    });
    return;
  }
  let createdLink = await contentModel.create({
   userId,
    type,
    link,
  });
  res.json({
    message: "Added successfully!",
  });
});


export default contentRouter;
