import mongoose from "mongoose";

const option = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0
  }
});

const Option = mongoose.model('Option', option);
export default Option;