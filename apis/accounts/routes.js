const express = require("express");
const router = express.Router();
const {getAccounts, createANewaccount,
    deleteAccount,updatesAnAccount,
    getAccount,deleteAccountController,
    updateAccountController} = require("./controllers"); 

router.get("",  getAccounts); //work
router.get('/:username',  getAccount); //not work
router.post("/",  createANewaccount); //work
// router.delete("/:accountId",  deleteAccount);//work
router.delete("/:accountId/",  deleteAccountController); //work
router.put("/:accountId",  updatesAnAccount); //no error
// router.put("/:accountId/",  updateAccountController); //


module.exports = router;


