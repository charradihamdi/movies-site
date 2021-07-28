const express = require('express');
//constjwt = require('jsonwebtoken');
const { signup, signin } = require('../controllers/admin-controllers');
const { userMidlleware } = require('../user_middlewere/midllwere')
const { validateSignupRequist, validateSigninRequist, isRequistValidated } = require('../validator/validator');
const router = express.Router();
router.post('/admin/signup', signup)
router.post('/admin/signin', validateSigninRequist, isRequistValidated, signin, (req, res, next) => {

    req.url = '/'
    next()
})
router.get('/admin/profile', userMidlleware)


module.exports = router;