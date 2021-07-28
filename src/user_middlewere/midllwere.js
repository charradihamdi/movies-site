const jwt = require("jsonwebtoken");

exports.userMidlleware = (req, res, next) => {
    const authheaders = req.headers['authorization']
    if (authheaders) {
        const user = jwt.verify(authheaders, process.env.JWT_SECRET)
        res.status(200).json({
            message: "success",
            user
        })
        next();
    } else
        res.status(400).json({ message: "authorization required" })

}