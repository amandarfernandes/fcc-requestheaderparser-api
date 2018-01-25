const express = require('express');
const router = express.Router();
const userInfo = require('../models');

router.get('/',(req,res)=>{
          res.json(userInfo(req))
});


module.exports = router;