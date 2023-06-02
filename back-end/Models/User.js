import mongoose from "mongoose";


const User = mongoose.model('users', {
    Nom : String ,
    Email : String,
    Password : String,
    PasswordV : String,
});


export default User;