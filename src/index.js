import e from "express";
import "dotenv/config";
import "./db.js";
import maintenance_route from "./routes/maintenance-route.js";
import vehicle_route from "./routes/vehicle-route.js";
import workshop_route from "./routes/workshop-route.js";

const app = e();

app.use(e.json());

app.use("/maintenance", maintenance_route);
app.use("/vehicle", vehicle_route);
app.use("/workshop", workshop_route);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
