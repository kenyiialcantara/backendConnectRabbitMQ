import express from "express";
import cors from "cors";
import morgan from "morgan";
import facturasRoutes from "./routes/facturas";
import productsRoutes from "./routes/products";
import usersRoutes from "./routes/users";
import path from "path";

const app = express();

//Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(urlencoded({ extended: falso })); //Convertir datos que vienen sin formato json

//Routes

app.use(facturasRoutes);
app.use(productsRoutes);
app.use(usersRoutes);

//Static
app.use(express.static(path.join(__dirname, "public")));

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("404 not found");
});

export default app;
