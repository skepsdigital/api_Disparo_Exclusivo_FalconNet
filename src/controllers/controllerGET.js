const express = require("express");
const router = express.Router();
const sendMessage = require("../services/blipTriggerText");
const formatPhone = require("../utils/formatPhone");
const { preffix, routerBotKey } = require("../config/keys");

router.get("/trigger", async (req, res) => {
  try {
    const { template, parameters } = req.body;

    const phone = formatPhone(req.body.phone);

    await sendMessage(preffix, template, parameters, phone, routerBotKey);

    return res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
