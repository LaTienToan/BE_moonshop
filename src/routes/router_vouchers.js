import { create_sale } from "../apis/Apis_vouchers/create_sale";
import { get_all_sale } from "../apis/Apis_vouchers/get_all_sale";
import { get_sale } from "../apis/Apis_vouchers/get_sale";
import { remove_sale } from "../apis/Apis_vouchers/remove_sale";
import { update_sale } from "../apis/Apis_vouchers/update_sale";

import express from "express";

const router = express.Router(0)

router.post("/sale/", create_sale);
router.get("/sale/", get_all_sale);
router.get("/sale/:id", get_sale);
router.delete("/sale/:id", remove_sale);
router.patch("/sale/:id", update_sale);

export default router
