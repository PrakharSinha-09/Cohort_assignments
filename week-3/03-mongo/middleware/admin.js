// Middleware for handling auth
const { Admin }=require('../db')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from
    
    const username=req.headers.username;
    const password=req.headers.password;

    const user=await Admin.findOne({
        username:username,
        password:password
    })
    if(!user){
        return res.status(403).json({msg:"admin not found!"}) 
    }
    next()   
}

module.exports = adminMiddleware;