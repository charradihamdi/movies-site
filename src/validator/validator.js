const { check, validationResult } = require('express-validator');

exports.validateSignupRequist = [
    check('name').isEmpty().withMessage('required email'),
    check('email').isEmail().withMessage('required email'),
    check('password').isLength({ min: 6 }).withMessage('min 6 characters')
];

exports.validateSigninRequist = [
    check('email').isEmail().withMessage('required email'),
    check('password').isLength({ min: 6 }).withMessage(' required password :  min 6 characters')
];


exports.isRequistValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array(400).length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}