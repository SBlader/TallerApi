import express from "express";
import "dotenv/config";
//Importar la mini aplicación que definimos
import { interactionRouter } from "../routes/InteractionRoute";

const app = express();
app.use(express.json());
const port = 3000;
//Utilizar la mini aplicación
app.use("/api",interactionRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});