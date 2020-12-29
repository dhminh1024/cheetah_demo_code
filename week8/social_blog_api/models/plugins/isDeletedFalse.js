module.exports = isDeletedFalse = function (schema, options) {
  schema.pre(/^find/, function (next) {
    if (this._conditions["isDeleted"] === undefined)
      this._conditions["isDeleted"] = false;
    next();
  });
};
