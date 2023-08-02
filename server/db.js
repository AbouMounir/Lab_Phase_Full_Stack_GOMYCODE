import mongoose from 'mongoose';
import dotenv from 'dotenv'



dotenv.config({path: './config/.env'});
const url_db = process.env.MONGO_URI || 'mongodb+srv://AbouMounir:5s20sPA0yYHuPdoN@labphasedb2.4fbbiff.mongodb.net/Lab_Phase_DB_2?retryWrites=true&w=majority'

const connectDb = async () => {

    try {
        const conn =  await mongoose.connect(url_db)
        console.log(`database connected on ${conn.connection.host}`);
    }
    catch(error) {
        console.log(`error connecting on ${error.message}`);
    }
    
}


export default connectDb ;