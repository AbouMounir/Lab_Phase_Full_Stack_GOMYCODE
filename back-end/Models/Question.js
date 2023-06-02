import mongoose from "mongoose";


const Question = mongoose.model('questions', {
    Title : String,
    Contain : String,
    Technology : String,
    Date : Date,
});


export default Question ;