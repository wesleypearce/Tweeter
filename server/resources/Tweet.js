const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
    }
  },
  { timeStamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
