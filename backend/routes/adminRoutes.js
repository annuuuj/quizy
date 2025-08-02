const express = require("express");
const router = express.Router();
const { addQuestion, getQuestionsBySubject } = require("../controllers/adminController");

router.post("/add-question", addQuestion);
router.get("/questions/:subjectId", getQuestionsBySubject);

module.exports = router;
