const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const blogSchema = Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    images: [String],
    isDeleted: { type: Boolean, default: false },
    reviewCount: { type: Number, default: 0 },
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

blogSchema.plugin(require("./plugins/isDeletedFalse"));

blogSchema.statics.calculateBlogs = async function (userId) {
  const blogCount = await this.find({ author: userId }).countDocuments();
  await User.findByIdAndUpdate(userId, { blogCount });
};

blogSchema.post("save", async function () {
  await this.constructor.calculateBlogs(this.author);
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
