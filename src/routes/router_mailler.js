import express from "express";
import { send_Mail } from "../apis/Apis_mailler/send_Mail";

const router = express.Router();

router.get("/mailler", send_Mail);

export default router;
