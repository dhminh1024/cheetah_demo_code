const fs = require("fs");

const bookController = {};

bookController.getBooks = (req, res, next) => {
  const rawData = fs.readFileSync("db.json", "utf-8");
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  console.log({ page, limit });
  let books = JSON.parse(rawData).books;

  const totalPageNum = Math.ceil(books.length / limit);
  const offset = limit * (page - 1);

  //page = 10 limit =3
  // res.json({
  //   books: books.slice(offset, offset + limit),
  //   totalPageNum,
  // });
  res.json(books.slice(offset, offset + limit));
};
bookController.getSingleBook = () => {};

module.exports = bookController;
