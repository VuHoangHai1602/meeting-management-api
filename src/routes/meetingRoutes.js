const express = require("express");
const router = express.Router();

const meetingController = require("../controllers/meetingController");

router.post("/", meetingController.createMeeting);
router.get("/", meetingController.getMeetings);
router.put("/:id", meetingController.updateMeeting);
router.patch("/:id/cancel", meetingController.cancelMeeting);

module.exports = router;