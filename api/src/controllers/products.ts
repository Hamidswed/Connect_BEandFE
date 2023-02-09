import {Request, Response} from 'express'
import { productList } from '../../data/productList';

export const getProductList = async(req:Request, res:Response)=>{
  res.json(productList)
}