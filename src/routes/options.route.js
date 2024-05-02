import express from 'express';
import OptionsController from '../controllers/options.controller.js';

const router = express.Router();

const optionsController = new OptionsController();

router.put('/:id/add_vote', (req, res, next) => {
  optionsController.addVoteToOption(req, res, next);
});
router.delete('/:id/delete', (req, res, next) => {
  optionsController.deleteOption(req, res, next);
});

export default router;