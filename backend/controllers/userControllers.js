const asyncHandler = require('express-async-handler');
const User =require('../Models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter ALL Fields!!");
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already Exists.!");
    }

    const newUser = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(newUser){
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
            token: generateToken(newUser._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Falied to Create User");
    }

});

const authUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
})

module.exports = { registerUser, authUser };