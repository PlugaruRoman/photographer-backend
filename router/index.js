const Router = require("express").Router;
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const userController = require("../controllers/user-controller");
const router = new Router();

router.post(
  "/registration",
  body("username").isLength({ min: 3, max: 32 }),
  body("email").isEmail().withMessage("Please include a valid email address"),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.getUsers);
router.get("/cities", authMiddleware, userController.getCities);

module.exports = router;
