const express = require('express');
const router=express.Router()
const controllers=require('../controllers/home-controller')


router.route('/').get(controllers.home)
router.route('/edit').get(controllers.edit)

module.exports=router