const express = require("express")
const app = express()
const db = require('../models')
const router = express.Router()

router.get("/prueba", async(req,res)=>{
    const response = await db.mdl_external_functions.findAll();
    res.send(response);
})

module.exports = router