const fs = require("fs");
const path = require("path");

exports.addQuestion = async (req, res) => {
  try {
    const { subjectId, question, options, correctAnswer, explanation } = req.body;

    if (!subjectId || !question || !options || correctAnswer === undefined) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const dataDir = path.join(__dirname, "../data");
    const filePath = path.join(dataDir, `${subjectId}.json`);

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

    let existingData = [];
    if (fs.existsSync(filePath)) {
      const existingFile = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(existingFile);
    }

    const newQuestion = { subjectId, question, options, correctAnswer, explanation: explanation || "" };
    existingData.push(newQuestion);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    console.error("Error adding question:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getQuestionsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    if (!subjectId) return res.status(400).json({ message: "Subject ID is required" });

    const filePath = path.join(__dirname, "../data", `${subjectId}.json`);
    if (!fs.existsSync(filePath)) return res.status(404).json({ message: "No questions found" });

    const fileData = fs.readFileSync(filePath, "utf-8");
    const questions = JSON.parse(fileData);
    res.status(200).json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
