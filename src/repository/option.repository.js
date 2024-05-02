import ApplicationError from "../middleware/applicationError.js";
import Question from "../model/question.model.js";
import Option from "../model/options.model.js";

class OptionsRepository{
  async addVoteToOption(id, votes){
    try {
      const option = await Option.findByIdAndUpdate(id, {
        $inc: {
          votes
        }
      }, { new: true });
      return option;
    } catch (err) {
      throw new ApplicationError('Error while adding votes', 400);
    }
  }

  async deleteOption(id){
    try {
      const option = await Option.findByIdAndDelete(id);
      return option;
    } catch (err) {
      throw new ApplicationError('Error while deleting option', 400);
    }
  }
};

export default OptionsRepository;