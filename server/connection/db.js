import mongoose from "mongoose";
import dotenv from 'dotenv' ;
dotenv.config() ;
mongoose.set("strictQuery", false); // or true, depending on your preference


const Connection = async (username, password) => {
  try {
    const URL = `mongodb+srv://kumaraniket3658:MmIt8g13eD8fZYmE@cluster0.8mgzw.mongodb.net/inshorts?retryWrites=true&w=majority&appName=Cluster0`;
    //const URL = `mongodb+srv://${username}:${password}@cluster0.8mgzw.mongodb.net/news`;
    // const URL = `mongodb://${username}:${password}@clone-inshort-shard-00-00.deivq.mongodb.net:27017,clone-inshort-shard-00-01.deivq.mongodb.net:27017,clone-inshort-shard-00-02.deivq.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-ytsxi5-shard-0&authSource=admin&retryWrites=true&w=majority`
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ");
  }
};

export default Connection;
