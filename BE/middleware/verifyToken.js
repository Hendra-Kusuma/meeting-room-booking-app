const jwt = require('jsonwebtoken');
const util = require('util');
const { StatusCodes } = require('http-status-codes');


const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken
    const verify = util.promisify(jwt.verify)

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).send('You are not authenticated!')
    }
    try {
        const payload = await verify(token, process.env.JWT_KEY)
        req.user = {}
        req.user.id = payload.id;
        req.user.user = payload.name;
        console.log('verifyToken')
        console.log(`id: ${req.user.id}`)
        next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(StatusCodes.UNAUTHORIZED).send('Token expired!');
        } else if (err.name === 'JsonWebTokenError') {
            return res.status(StatusCodes.FORBIDDEN).send('Token is not valid');
        } else {
            return res.status(StatusCodes.FORBIDDEN).send(err.name);
        }
    }
}

module.exports = { verifyToken }