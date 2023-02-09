import Express from "express";
import productRouter from "./routes/products";

const app = Express();
app.use(Express.json());

// app.use('/users', userRouter)
app.use("/products", productRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`The server is runnig on port ${port}`);
});
