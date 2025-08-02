import express from "express";
import { helloWorldRoute } from "./src/routes/helloworld.route";

const app = express();
const port: number = 3000

app.use(express.json())
app.use("/helloWorld", helloWorldRoute)
app.listen(port, () => console.log(`http://localhost:${port}`))