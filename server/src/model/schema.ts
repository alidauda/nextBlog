import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  username: string;
  title: string;
  description: string;
  image?: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    username:String,
    title:String,
    description:String,
    image:String,
  },
  { timestamps: true }
);


const Blog: Model<IBlog> = mongoose.model("blogs", BlogSchema);

export default Blog
