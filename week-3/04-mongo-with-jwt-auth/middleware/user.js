const jwt=require('jsonwebtoken')
const {jwt_secret}=require('../config')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    const words=token.split(" ")
    const jwtToken=words[1]
    try {
        const decodedValue=jwt.verify(jwtToken,jwt_secret);

        //whenever you get the username, put that into the request object.
        req.username=decodedValue.username
        next()
    } catch (error) {
        return res.json({msg:"Authentication Failed!"})
    }   
}

module.exports = userMiddleware;