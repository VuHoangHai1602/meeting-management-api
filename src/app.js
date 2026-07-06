const express = require("express");
const cors = require("cors");

const meetingRoutes = require("./routes/meetingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Đăng ký router
app.use("/api/meetings", meetingRoutes);

module.exports = app;