import express from "express";
import userRoutes from "./moduels/users/userRoutes.js";
import todoRoutes from "./moduels/todos/todosRoutes.js";
import postRouter from "./moduels/posts/postsRoutes.js";
import photoRouter from "./moduels/photos/photosRouters.js";
import albumRouter from "./moduels/albums/albumsRouters.js";
import commentRouter from "./moduels/comment/commentsRouter.js";
import authRouter from "./authModul/authRouter.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// users API
app.use("/users", userRoutes);

//Todos APIs
app.use("/todos", todoRoutes);

// Photos APIs
app.use("/photos", photoRouter);

// Albums APIs
app.use("/albums", albumRouter);

// comments APIs
app.use("/comments", commentRouter);

// posts APIs
app.use("/posts", postRouter);

// auth APIs
app.use("/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
