const mongoose = require("mongoose");
const Blog = require("./Blog");
const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    blog: { type: Schema.Types.ObjectId, required: true, ref: "Blog" },
    content: { type: String, required: true },
    reactions: {
      laugh: { type: Number, default: 0 },
      sad: { type: Number, default: 0 },
      like: { type: Number, default: 0 },
      love: { type: Number, default: 0 },
      angry: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

reviewSchema.statics.calculateReviews = async function (blogId) {
  const reviewCount = await this.find({ blog: blogId }).countDocuments();
  await Blog.findByIdAndUpdate(blogId, { reviewCount: reviewCount });
};

reviewSchema.post("save", async function () {
  await this.constructor.calculateReviews(this.blog);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
