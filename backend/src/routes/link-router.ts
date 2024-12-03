import { Router } from "express";
import { linkModel } from "../db/models/link-model";
import { userMiddleware } from "../middlewares/user-middleware";
import { randomHash } from "../utils/generate-hash";
import { contentModel } from "../db/models/content-model";
const linkRouter = Router();

linkRouter.post("/", userMiddleware, async (req, res) => {
  let share = req.body.share;
  let userId = req.userId;
  if (share) {
    let checkLink = await linkModel.findOne({ userId });
    if (checkLink) {
      res.json({
        link: checkLink.hash,
        message: "Link already exist!",
      });
      return;
    }
    let newLink = await linkModel.create({
      userId,
      hash: randomHash(15),
    });
    res.json({
      link: newLink.hash,
    });
  } else {
    let checkLink = await linkModel.findOneAndDelete({ userId });
    res.json({
      message: "Sharing is disabled!",
    });
  }
});

linkRouter.get("/:shareLink", async (req, res) => {
  let hash = req.params.shareLink;
  let findUser = await linkModel.findOne({
    hash,
  });
  if (!findUser) {
    res.json({
      message: "Link is not valid",
    });
    return;
  }

  let findContent = await contentModel.find({
    userId: findUser.userId,
  }).populate('userId','firstname lastname email');
  res.json({
   message:findContent
  })
});

export default linkRouter;
