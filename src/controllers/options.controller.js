import OptionsRepository from "../repository/option.repository.js";

class OptionsController{

  constructor(){
    this.optionsRepository = new OptionsRepository();
  }
  async addVoteToOption(req, res, next){
    try {
      const { id } = req.params;
      const { votes } = req.body;
      const option = await this.optionsRepository.addVoteToOption(id, votes);
      return res.status(200).json({ success: true, data: option });
    } catch (err) {
      next(err);
    }
  }

  async deleteOption(req, res, next){
    try {
      const { id } = req.params;
      await this.optionsRepository.deleteOption(id);
      return res.status(200).json({ success: true, data: 'Option deleted successfully' })
    } catch (err) {
      next(err);
    }
  }
};

export default OptionsController;