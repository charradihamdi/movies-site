const { body } = require("express-validator");
const User = require("../models/models");
const jwt = require("jsonwebtoken");
exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: "user all ready registered"
            });
            const {
                name,
                email,
                password
            } = req.body
            const _user = new User({
                name,
                email,
                password
            });

            _user.save((error, data) => {
                if (error) {
                    console.log(error);
                    return res.status(400).json({
                        message: "samething went wrong",
                        error: error,
                    });
                    res.send("error")
                }

                if (data) {
                    return res.status(201).json({
                        message: "created successfuly",
                        data
                    });
                    //  res.send("error")
                }

            });


        });
}

exports.signin = (req, res) => {
    User.findOne({ name: req.body.name })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error });
            if (user) {
                if (user.authenticate(req.body.password)) { //verifide the password
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    const { _id, email, role } = user;
                    res.status(200).json({
                        succes: true,
                        token,
                        user: { _id, email, role }
                    });
                } else {
                    return res.status(400).json({
                        message: "invalide password"
                    });
                }
            } else {
                return res.status(400).json({ message: "something went wrong" });
            }
        });
}











/*

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error });
            if (user) {
                if (user.authenticate(req.body.password)) { //verifide the password
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    const { _id, FirstName, LastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: { _id, FirstName, LastName, email, role, fullName }
                    });
                } else {
                    return res.status(400).json({
                        message: "invalide password"
                    });
                }
            } else {
                return res.status(400).json({ message: "something went wrong" });
            }
        });
}*/