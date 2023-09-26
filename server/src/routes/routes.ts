const router = require("express").Router();
import express, { Request, Response, response } from "express";
import Blog from "../model/schema";

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Please Like the Videdwadawdo!" });
});

router.post("/addblog", async (req: Request, res: Response) => {
  const { username, title, description } = req.body;
  console.log(req.body)
  // try {
  //   const newBlog = new Blog({
  //     username,
  //     title,
  //     description
  //   });
  //   console.log(username,title,"testhere")
  //   await newBlog.validate(); // Validate the document
  //   await newBlog.save();

  //   return res.status(200).json({ message: "successful" });
  // } catch (error) {
  //   console.error(error); // Log the validation error
  //   return res.status(400).json({ message: "validation error" });
  // }
});

router.get("/allblogs", async (req: Request, res: Response) => {
  const allBlogs = await Blog.find({});
  res.status(200).json(allBlogs);
});

router.delete("/allblogs/:id", async (req: Request, res: Response) => {
  const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "delete sucesfful" });
});
module.exports = router;
