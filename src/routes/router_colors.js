import express from "express";
import { create_Color } from "../apis/Apis_color/create_Colors";
import { get_Color } from "../apis/Apis_color/get_Color";
import { get_Colors } from "../apis/Apis_color/get_Colors";
import { remove_Colors } from "../apis/Apis_color/remove_Colors";
import { update_Colors } from "../apis/Apis_color/update_color";

const router = express.Router();

router.post("/colors/news", create_Color);
router.get("/colors/:id", get_Color);
router.get("/colors", get_Colors);
router.delete("/colors/remove/:id", remove_Colors);
router.patch("/colors/update/:id", update_Colors);

export default router;
