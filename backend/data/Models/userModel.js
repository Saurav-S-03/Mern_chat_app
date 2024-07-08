const mongoose = require('mongoose');

const userSchema = mongoose.model({
    name: { type:String, required:true },
    email: { type:String, required:true },
    password: { type:String, required:true },
    pic: { type:String, required:true, default:'userpic.png' },
},
{
    timestamps: true
});

const User = mongoose.model("User",userSchema);
module.exports = User;