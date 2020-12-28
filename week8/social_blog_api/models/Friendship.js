const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendshipSchema = Schema(
  {
    from: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    to: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    status: {
      type: String,
      enum: ["requesting", "accept", "decline", "removed", "cancel"],
    },
  },
  { timestamps: true }
);

const Friendship = mongoose.model("Friendship", friendshipSchema);
module.exports = Friendship;
