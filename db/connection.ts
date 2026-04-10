import mongoose from "mongoose"

export default async function connectDB(){
    try{
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection
        
        connection.on("connected",()=>{
            console.log("MongoDB successfully Connected!")
        })
        connection.on("error",()=>{
            console.log("MongoDB Connection Error!")
        })
        
    }catch(error){
        console.log("Error While Connecting to MongoDB :",error)
    }
}