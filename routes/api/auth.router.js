const express = require("express");
const authController = require("../../controllers/auth");
const {
  controllerExceptionWrapper,
} = require("../../helpers/controller-exception-wrapper");
const { userSignUpSchema, userSignInSchema } = require("../../helpers/schemas");
const { validateBody, authUser } = require("../../middlewares");

const router = express.Router();

router.post(
  "/sign-up",
  validateBody(userSignUpSchema),
  controllerExceptionWrapper(authController.signUp)
);

router.post(
  "/sign-in",
  validateBody(userSignInSchema),
  controllerExceptionWrapper(authController.signIn)
);

router.post(
  "/logout",
  authUser,
  controllerExceptionWrapper(authController.logout)
);
router.get(
  "/current",
  authUser,
  controllerExceptionWrapper(authController.current)
);

module.exports = router;