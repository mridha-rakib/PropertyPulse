import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createListing,
  updateListing,
  deleteListing,
  getListings,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.get("/get", getListings);

export default router;
