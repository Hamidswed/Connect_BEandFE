import { Request, Response } from "express";
import { userList } from "./../../data/userList";

export const getUserList = async (req: Request, res: Response) => {
  try {
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const index = userList.findIndex((user) => user.id === userId);
  try {
    res.json(userList[index]) && res.status(200);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const index = userList.findIndex((user) => user.email === newUser.email);

    if (index === -1) {
      console.log("error");
    } else {
      if (
        userList[index].email === newUser.email &&
        userList[index].password === newUser.password
      ) {
        res.json(userList[index]) && res.status(200);
      } else {
        console.log("error");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
