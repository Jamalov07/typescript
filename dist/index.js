import express from "express";
import { userRouter } from "./routers/user.js";
const PORT = 3000;
const app = express();
app.use("/api/user", userRouter);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(401).send(err.message);
});
app.listen(PORT, () => {
    console.log("Server 3000-portida ishga tushdi");
});
