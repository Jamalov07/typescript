import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Userlar");
});

userRouter.post("/register", (req, res) => {
  res.send("Ro'yhatdan o'tdi");
});

userRouter.post("/login", (req, res) => {
  res.send("login bo'ldi");
});

export { userRouter };
