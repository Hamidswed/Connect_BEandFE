import Express from "express";
import cors from "cors";
import productRouter from "./routes/products";
import userRouter from "./routes/users";

const app = Express();
app.use(Express.json());
app.use(cors());

// app.use('/users', userRouter)
app.use("/products", productRouter);
app.use("/users", userRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`The server is runnig on port ${port}`);
});

module.exports = app;