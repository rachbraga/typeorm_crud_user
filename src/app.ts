import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

// app.listen(3000, () => {
//   console.log("Servidor executando na porta 3000");
// });

export default app;
