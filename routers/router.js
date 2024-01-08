require('dotenv').config();
const express  = require('express');
const router = express.Router();

const usersEmails = require('../model/usersEmails');
const navLogos = require('../model/navLogo');
const headerBtnText = require('../model/headerButtontext');
const headerBtnTexts = require('../model/headerButtontext');

router.post('/admin/sendEmail',async (req,res)=>{
    console.log("post request 1111");
    const {userName,userEmaildata} = req.body;
    console.log(userName);
    try {

        // const email = new usersEmails({
        //     name:userName,
        //     email:userEmaildata
        // })


        const user = await usersEmails.findOne({name:userName})
        if(user){
            console.log("present")
        }
        user.email.push(userEmaildata);
        await user.save();

        // await usersEmails.findOneAndUpdate(
        //     {name:userName},
        //     {$push:{email:userEmaildata}},{new:true},(err,updatedData)=>{
                
        //         if(err){
        //             console.log
        //             res.json({"findone":"error",err});
        //         }
        //         else{
        //             res.json({updatedData});
        //         }
        //     }
        // )
console.log("post request 2222");
// res.json({"addeing email":"success"});
 res.status(201).json({status:201});
        // const emailData = await email.save();
        
        
    } catch (error) {
        res.status(500).json({status:500,error});
    }
})

router.get("/admin/updateNavLogo", async(req,res)=>{
       const logo = await navLogos.findOne({_id:"659bdeecd433aae39c96cadb"})
       console.log(logo.navLogoURL);
       res.json({"logoUrl":logo.navLogoURL});
})

router.get("/admin/updateHeaderBtnText", async(req,res)=>{
    const headerBtnText = await headerBtnTexts.findOne({_id:"659be3f0d433aae39c96cadc"})
    console.log(headerBtnText.headerBtnText);
    res.json({"headerBtnText":headerBtnText.headerBtnText});
})

router.post("/admin/updateNavLogo", async(req,res)=>{


    const {newNavLogoURL}=req.body;
    console.log(newNavLogoURL)

      try {
        
        const changeNavLogoURL = await navLogos.findByIdAndUpdate("659bdeecd433aae39c96cadb",{navLogoURL:newNavLogoURL})
        res.json({"newNavLogoURL":newNavLogoURL});
        
      } catch (error) {
        console.log("error in updted header btn text");
      }

})

router.post("/admin/updateHeaderBtnText", async(req,res)=>{

    const {newHeaderBtnText}=req.body;

      try {
        
        const changeBtnText = await headerBtnTexts.findByIdAndUpdate("659be3f0d433aae39c96cadc",{headerBtnText:newHeaderBtnText})
        res.json({"newHeaderText":newHeaderBtnText});

      } catch (error) {
        console.log("error in updted header btn text");
      }
})



module.exports = router;