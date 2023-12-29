const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require('../db')
const {User,Course}=require('../db')


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password

    const UserExists=await Admin.findOne({
        username:username
    })

    if(UserExists) 
    {
        return res.json({
            msg:"already Exists"
        })
    }
    const newUser=await Admin.create({
        username:username,
        password:password
    })
    return res.json({
        msg:"admin created successfully!"
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink

    const newCourse=await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })

    res.json({"success!":"Course Created Succesfully!",
                "courseId":`${newCourse._id}`
        })


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses=await Course.find({})

    return res.json(allCourses)


});

module.exports = router;