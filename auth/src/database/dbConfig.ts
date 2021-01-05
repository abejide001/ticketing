import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to mongo");
  } catch (err) {
    console.log(err);
  }
};
export default dbConfig;
