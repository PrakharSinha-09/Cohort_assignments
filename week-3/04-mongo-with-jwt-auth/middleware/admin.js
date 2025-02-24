// Middleware for handling auth
const jwt=require('jsonwebtoken')
const {jwt_secret}=require('../config')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token=req.headers.authorization;
    const words=token.split(" ")
    const jwtToken=words[1]
    try {
        const decodedValue=jwt.verify(jwtToken,jwt_secret);
        next()
    } catch (error) {
        return res.json({msg:"Authentication Failed!"})
    }   
}

module.exports = adminMiddleware;