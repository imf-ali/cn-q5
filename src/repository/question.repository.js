import ApplicationError from "../middleware/applicationError.js";
import Question from "../model/question.model.js";
import Option from "../model/options.model.js";
import mongoose, { Types } from "mongoose";

class QuestionRepository{
  
  async saveQuestion(title){
    try {
      const question = new Question({ title });
      const savedData = await question.save(); 
      return savedData;
    } catch (err) {
      throw new ApplicationError('Error saving question', 400);
    }
  }

  async addOptionsToQuestion(id, options){
    try {
      const savedOptions = await Option.insertMany(options);
      const optionsId = savedOptions.map(option => option.id)
      const question = await Question.findByIdAndUpdate(id, { 
        $push: {
          options: {
            $each: optionsId
          }
        }
      }, { new: true });
      return question;
    } catch (err) {
      throw new ApplicationError('Error adding options to question', 400);
    }
  }

  async getQuestion(id){
    try {
      const question = await Question.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'options',
            localField: 'options',  
            foreignField: '_id',
            as: 'options',
            pipeline: [
              {
                $addFields: {
                  link_to_vote: {
                    $concat: ["/options/", { $toString: '$_id' }, "/add_vote"]
                  }
                }
              }
            ]
          }
        }
      ]);
      if(!question){
        throw new ApplicationError('Question not found', 404);
      }
      return question;
    } catch (err) {
      throw new ApplicationError('Error getting question', 400);
    }
  }

  async deleteQuestion(id){
    try {
      const question = await Question.findByIdAndDelete(id);
      if(!question){
        throw new ApplicationError('Question not found', 404);
      }
      return question;
    } catch (err) {
      throw new ApplicationError('Error deleting question', 400);
    }
  }
};

export default QuestionRepository;