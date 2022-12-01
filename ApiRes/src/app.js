import express from "express";
import morgan from "morgan";
// Routes
import productoRoutes from "./routes/products.routes";
import usersRoutes from "./routes/usuarios.routes";

const app = express();

// Settings
app.set("port", 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/producto", productoRoutes);
app.use("/api/users", usersRoutes);

export default app;
