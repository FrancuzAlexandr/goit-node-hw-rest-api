const { signIn } = require("./sign-in");
const { signUp } = require("./sign-up");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateUserAvatar, upload } = require("./update-avatar");
const { verifyEmail } = require("./verify-email");
const { verifyUser } = require("./verify-users");

module.exports = {
  signUp,
  signIn,
  logout,
  current,
  updateUserAvatar,
  upload,
  verifyEmail,
  verifyUser,
};
