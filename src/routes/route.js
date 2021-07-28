const express = require('express');
//constjwt = require('jsonwebtoken');
const { signup, signin } = require('../controllers/controllers');
const { userMidlleware } = require('../user_middlewere/midllwere')
const { validateSignupRequist, validateSigninRequist, isRequistValidated } = require('../validator/validator');
const router = express.Router();
router.post('/signup', validateSignupRequist, isRequistValidated, signup)
router.post('/signin', validateSigninRequist, isRequistValidated, signin, (req, res, next) => {

    req.url = '/'
    next()
})
router.get('/profile', userMidlleware)


module.exports = router;