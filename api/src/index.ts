import Express from "express";
import cors from "cors";
import productRouter from "./routes/products";

const app = Express();
app.use(Express.json());
app.use(cors());

// app.use('/users', userRouter)
app.use("/products", productRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`The server is runnig on port ${port}`);
});
