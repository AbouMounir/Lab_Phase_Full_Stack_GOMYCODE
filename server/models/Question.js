import mongoose from "mongoose";


const QuestionSchema = mongoose.Schema({
    Title : {type : String},
    Contain : {type : String},
    Technology : {type : Array},
    Date : {type : Date}
});

const Question = mongoose.model('Questions', QuestionSchema)


export default Question ;