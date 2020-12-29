const mongoose = require("mongoose");
const User = require("./User");
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

friendshipSchema.statics.calculateFriendCount = async function (userId) {
  const friendCount = await this.find({
    $or: [{ from: userId }, { to: userId }],
    status: "accept",
  }).countDocuments();
  await User.findByIdAndUpdate(userId, { friendCount: friendCount });
};

friendshipSchema.post("save", function () {
  this.constructor.calculateFriendCount(this.from);
  this.constructor.calculateFriendCount(this.to);
});

friendshipSchema.pre(/^findOneAnd/, async function (next) {
  this.doc = await this.findOne();
  next();
});

friendshipSchema.post(/^findOneAnd/, async function (next) {
  await this.doc.constructor.calculateFriendCount(this.doc.from);
  await this.doc.constructor.calculateFriendCount(this.doc.to);
});

const Friendship = mongoose.model("Friendship", friendshipSchema);
module.exports = Friendship;
