const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    targetType: { type: String, require: true, enum: ["Blog", "Review"] },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "targetType",
    },
    emoji: {
      type: String,
      required: true,
      enum: ["laugh", "love", "sad", "like", "angry"],
    },
  },
  { timestamps: true }
);

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;
