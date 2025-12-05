const express = require("express");
const quizData = require("../data/quizData.json"); 

const router = express.Router();

router.get("/", (req, res) => {
  res.json(quizData.quiz?.questions || quizData);
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const questions = quizData.quiz?.questions || quizData;
  const question = questions.find((q) => q.id === id);

  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
});

module.exports = router;
