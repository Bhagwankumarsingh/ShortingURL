const express=require('express');
const { handleGenerateNewShortURl , handleGetAnalytics}=require("../controllers/url.js")
const router=express.Router();

router.post('/',handleGenerateNewShortURl)

router.get('/analytics/:shortId',)

module.exports=router;