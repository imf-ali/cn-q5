import express from 'express';
import QuestionController from '../controllers/question.controller.js';

const router = express.Router();

const questionController = new QuestionController();

router.post('/create', (req, res, next) => {
  questionController.createQuestion(req, res, next);
});
router.put('/:id/options/create', (req, res, next) => {
  questionController.addOptionsToQuestion(req, res, next);
});
router.get('/:id', (req, res, next) => {
  questionController.getQuestion(req, res, next);
});
router.delete('/:id', (req, res, next) => {
  questionController.deleteQuestion(req, res, next);
});

export default router;