import { Request, Response } from "express";
import { productList } from "../../data/productList";

export const getProductList = async (req: Request, res: Response) => {
  try {
    res.json(productList);
  } catch (error) {
    console.log(error);
  }
};

export const getProductId = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const index = productList.findIndex((user) => user.id === userId);
  try {
    res.json(productList[index]) && res.status(200);
  } catch (error) {
    console.log(error);
  }
};