const jwt = require("jsonwebtoken")
const config = require("../config")

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"]

    if(!token) {
        return res.status(401).json({ message: "Autorização negada"})
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: "Autorização negada"})
        }

        res.session = decoded

        next()
    })
}

module.exports = authMiddleware