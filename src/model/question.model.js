import mongoose from "mongoose";

const question = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [{
    type: mongoose.Types.ObjectId,
    ref: 'Option'
  }]
});

const Question = mongoose.model('Question', question);

export default Question;