import { Router } from "express";
import userRoutes from "../api/user/routes";

const routes = Router();

routes.get("/", (req, res) => {
    res.status(200).json({message: "oie"}).send();
});

routes.use('/user', userRoutes);

export default routes;
