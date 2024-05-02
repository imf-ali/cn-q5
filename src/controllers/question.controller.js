import QuestionRepository from "../repository/question.repository.js";

class QuestionController {
  constructor(){
    this.questionRepository = new QuestionRepository();
  }
  async createQuestion(req, res, next){
    try {
      const { title } = req.body;
      const question = await this.questionRepository.saveQuestion(title);
      return res.status(201).json({ success: true, data: question });
    } catch (err) {
      next(err);
    }
  }

  async addOptionsToQuestion(req, res, next){
    try {
      const { id } = req.params;
      const { options } = req.body;
      const question = await this.questionRepository.addOptionsToQuestion(id, options);
      return res.status(200).json({ success: true, data: question });
    } catch (err) {
      next(err);
    }
  }

  async getQuestion(req, res, next){
    try {
      const { id } = req.params;
      const question = await this.questionRepository.getQuestion(id);
      return res.status(200).json({ success: true, data: question })
    } catch (err) {
      next(err);
    }
  }

  async deleteQuestion(req, res, next){
    try {
      const { id } = req.params;
      const question = await this.questionRepository.deleteQuestion(id);
      return res.status(200).json({ success: true, data: 'Question deleted successfully' })
    } catch (err) {
      next(err);
    }
  }
};

export default QuestionController;