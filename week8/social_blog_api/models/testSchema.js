const mongoose = require("mongoose");
const User = require("./User");
const Blog = require("./Blog");
const Review = require("./Review");
const Reaction = require("./Reaction");
const Friendship = require("./Friendship");

const faker = require("faker");
const bcrypt = require("bcryptjs");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cleanData = async () => {
  try {
    // await User.collection.drop();
    // await Blog.collection.drop();
    // await Review.collection.drop();
    // await Reaction.collection.drop();
    // await Friendship.collection.drop();
    // Or
    await mongoose.connection.dropDatabase();
  } catch (error) {
    console.log(error);
  }
};

const createRandomUsers = async (userNum) => {
  try {
    console.log(`CREATING ${userNum} Users`);
    console.log("--------------------------");
    users = [];
    for (let i = 0; i < userNum; i++) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash("123", salt);
      let user = await User.create({
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: password,
        avatarUrl: faker.image.avatar(),
      });
      users.push(user);
    }
    console.log("USERS CREATED---------------");
    return users;
  } catch (error) {
    console.log(error);
  }
};

const createRandomBlogs = async (users) => {
  try {
    console.log(`CREATING 1 to 5 blogs for each user`);
    console.log("--------------------------");
    const blogs = [];
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      const blogNum = getRandomInt(1, 5);
      for (let i = 0; i < blogNum; i++) {
        const blog = await Blog.create({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          images: [
            faker.image.imageUrl(400, 300),
            faker.image.imageUrl(400, 300),
          ],
          author: user._id,
        });
        blogs.push(blog);
      }
      console.log(`CREATED ${blogNum} blogs for user ${user.name}`);
    }
    console.log("--------------------------");
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

const createRandomReviews = async (blogs, users) => {
  try {
    console.log(`CREATING 1 to 10 reviews for each blog`);
    console.log("--------------------------");
    const reviews = [];
    for (let index = 0; index < blogs.length; index++) {
      const blog = blogs[index];

      const reviewNum = getRandomInt(1, 10);
      for (let i = 0; i < reviewNum; i++) {
        const randomUser = users[getRandomInt(0, users.length - 1)];
        const review = await Review.create({
          user: randomUser._id,
          blog: blog._id,
          content: faker.lorem.sentence(),
        });
        reviews.push(review);
      }
      console.log(`CREATED ${reviewNum} reviews for blog ${blog._id}`);
    }
    console.log("--------------------------");
    return reviews;
  } catch (error) {
    console.log(error);
  }
};

const createRandomReactions = async (blogs, users, reviews) => {
  try {
    console.log(
      `CREATING for each user 1 to 10 reactions for blogs and reviews`
    );
    console.log("--------------------------");
    const reactions = [];
    for (let index = 0; index < users.length; index++) {
      const user = users[index];

      const reactionNum = getRandomInt(1, 10);
      for (let i = 0; i < reactionNum; i++) {
        const randomBlog = blogs[getRandomInt(0, blogs.length - 1)];
        const randomReview = reviews[getRandomInt(0, reviews.length - 1)];
        const emojis = ["laugh", "love", "sad", "like", "angry"];
        const randomEmoji = emojis[getRandomInt(0, emojis.length - 1)];

        let reaction = await Reaction.create({
          user: user._id,
          targetType: "Blog",
          targetId: randomBlog._id,
          emoji: randomEmoji,
        });
        reactions.push(reaction);
        reaction = await Reaction.create({
          user: user._id,
          targetType: "Review",
          targetId: randomReview._id,
          emoji: randomEmoji,
        });
        reactions.push(reaction);
      }
    }
    console.log("--------------------------");
    return reactions;
  } catch (error) {
    console.log(error);
  }
};

const createRandomFriendships = async (users) => {
  try {
    console.log(`CREATING 7 random friends for each user`);
    console.log("--------------------------");
    const friendships = [];
    for (let index = 0; index < users.length; index++) {
      const user = users[index];

      const friendNum = 7;
      for (let i = 0; i < friendNum; i++) {
        const statusList = [
          "requesting",
          "accept",
          "decline",
          "removed",
          "cancel",
        ];
        const randomStatus = statusList[getRandomInt(0, statusList.length - 1)];
        const randomUser = users[getRandomInt(0, users.length - 1)];

        const friendship = await Friendship.create({
          from: user._id,
          to: randomUser._id,
          status: randomStatus,
        });
        friendships.push(friendship);
      }
    }
    console.log("--------------------------");
    return friendships;
  } catch (error) {
    console.log(error);
  }
};

const getFriendList = async (user) => {
  try {
    const friendList = await Friendship.find({
      $or: [{ from: user._id }, { to: user._id }],
      status: "accept",
    })
      .populate("from")
      .populate("to");
    console.log(friendList);
    console.log(`Friend list of ${user.name}:`);
    friendList.forEach((friendship) =>
      friendship.from._id !== user._id
        ? console.log(friendship.from.name)
        : console.log(friendship.to.name)
    );
    return friendList;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  await cleanData();
  const users = await createRandomUsers(10);
  const blogs = await createRandomBlogs(users);
  const reviews = await createRandomReviews(blogs, users);
  const reactions = await createRandomReactions(blogs, users, reviews);
  const friendships = await createRandomFriendships(users);

  await getFriendList(users[getRandomInt(0, users.length - 1)]);
};

main();
