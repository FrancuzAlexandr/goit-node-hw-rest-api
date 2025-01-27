const { add } = require("./add");
const { deleteById } = require("./delete-by-id");
const { getAll } = require("./get-all");
const { getById } = require("./get-by-id");
const { updateById } = require("./update-by-id");
const { updateContactFavorite } = require("./update-contact-favorite");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateContactFavorite,
};
