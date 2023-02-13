import { Request, Response } from "express";
import { userList } from "./../../data/userList";

export const getUserList = async (req: Request, res: Response) => {
  try {
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const findUser = userList.find((user) => user.id === userId);
  try {
    res.json(findUser) && res.status(200);
    console.log(findUser);
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

export const loginUser = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;
    const index = userList.findIndex((user) => user.email === userInput.email);
    if (index === -1) {
      console.log("error");
    } else {
      if (
        userList[index].email === userInput.email &&
        userList[index].password === userInput.password
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
