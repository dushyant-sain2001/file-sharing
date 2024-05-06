import mongoose from "mongoose";

const DBconnection = async () => {
    const DB_URL = "mongodb://localhost:27017";
    try {
    await mongoose.connect(DB_URL);
    console.log("connected to database successfully");
    } catch (error) {
        console.error('error while connecting to database', error.message);
    }
}
export default DBconnection;