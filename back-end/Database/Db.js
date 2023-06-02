import mongoose from "mongoose";

const url = "";

const connectDb = async () => {

    try {
        const conn = await mongoose.connect(url)
        console.log(`Database connection establiched on : ${conn.connection.host}`);
    } catch(error) {
        console.log(`error connecting on ${error.message}`);
        process.exit(1);
    }
}

export default connectDb ;