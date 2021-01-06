import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      serverSelectionTimeoutMS: 20000,
      connectTimeoutMS: 20000
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err.message);
  }
};
export default dbConfig;
