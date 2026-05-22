import express from "express"
import newroutes from "./routes/newroutes.js";

const app = express();

app.use("/home",newroutes);

app.listen(5001, () =>{
console.log("Server started on port 5001");
});