import express from "express";
 import { getProject,createHotel,Prjsubmit,getsubProject} from "../controllers/webcode.js";
// import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();


// //CREATE
router.post("/", createHotel);
router.post("/submission", Prjsubmit)
router.get("/submission", getsubProject)

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

router.get("/", getProject);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
