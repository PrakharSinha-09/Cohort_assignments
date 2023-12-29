const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require('../db')
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password

    const UserExists=await User.findOne({
        username:username
    })

    if(UserExists) 
    {
        return res.json({
            msg:"already Exists"
        })
    }
    const newUser=await User.create({
        username:username,
        password:password
    })
    return res.json({
        msg:"user created successfully!"
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses=await Course.find({})

    return res.json(allCourses)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseID=req.params.courseId
    const username=req.headers.username

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses : courseID
        }
    })

    res.json({msg:"Purchase Successful!"})

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    const username=req.headers.username
    const user=await User.findOne({username})

    console.log(user.purchasedCourses);

    const userCourses=await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json(userCourses)

});

module.exports = router