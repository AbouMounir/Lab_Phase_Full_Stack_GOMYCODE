import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'


const UserSchema = mongoose.Schema( {
    Nom : { type: String, required: true },
    Email : { type: String, required: true, unique : true },
    Password : { type: String, required: true },
    PasswordV :  { type: String, required: true }
});


UserSchema.plugin(uniqueValidator);

const User = mongoose.model('Users', UserSchema);

export default User; 

