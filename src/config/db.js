import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb://rootuser:rootpass@localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectDb;

