import mongoose from "mongoose"
 export const connectDB = async () => {
await mongoose.connect("mongodb+srv://aadityabramhe2710:6JrtJ6XFVbmNyCtA@cluster0.fpxo8.mongodb.net/Food-del").then(()=>{console.log("DB Connected")})
}