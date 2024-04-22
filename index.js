const express=require('express');
const {connectToMongoDB}=require("./connect.js")
const app=express();
const urlRoute=require('./routes/url.js');
const URL = require('./models/url.js')
const PORT=8001;

connectToMongoDB("mongodb+srv://bs5117300:Ishant%40123@cluster0.9paefy9.mongodb.net/")
.then(()=>console.log("mongodb connected"));

app.use(express.json());
app.use('/url',urlRoute);

app.get('/:shortId',async (req,res)=>{
     const shortId = req.params.shortId;
     const entry = await URL.findOneAndUpdate({
        shortId
     },{ $push:{visitHistory:{
        timestamp:Date.now(),
     },
    } })
    res.redirect(entry.redirectURL)
})

app.listen(PORT,()=>console.log(`Server starting at Port: ${PORT}`))