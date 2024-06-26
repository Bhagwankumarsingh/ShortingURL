const shortid=require("shortid")
const URL =require('../models/url.js');

async function handleGenerateNewShortURl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"})
      const shortID=shortid();
      await URL.create({
            shortId:shortID,
            redirectURL:body.url,
            visitedHistory:[],
        }
      );

      return res.json({id:shortID});
}
async function handleGetAnalytics(req,res){
    const shortId = req.params.shortID;
    const result=await URL.findOne({shortId})
    return res.json({ totalClicks:result.visitHistory.length,analytics:result.visitHistory })
}
module.exports={
    handleGenerateNewShortURl,
    handleGetAnalytics
}