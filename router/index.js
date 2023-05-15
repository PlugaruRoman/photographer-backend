const Router = require("express").Router;
const { body } = require("express-validator");
const multer = require("multer");
const authMiddleware = require("../middlewares/auth-middleware");
const userController = require("../controllers/user-controller");
const countryController = require("../controllers/country-controller");
const profileController = require("../controllers/profile-controller");
const packageController = require("../controllers/package-controller");

const router = new Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

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
router.get("/countries", countryController.getCountries);

router.post("/upload", upload.single("avatar"), (req, res) => {
  res.json({
    url: `uploads/${req.file.originalname}`,
  });
});

router.get("/profiles", profileController.getProfiles);
router.post("/profiles", authMiddleware, profileController.createProfiles);
router.get("/profiles/:id", profileController.getOneProfile);
router.put("/profiles/:id", profileController.updateProfile);
router.delete("/profiles/:id", authMiddleware, profileController.deleteProfile);

router.get("/packages", packageController.getPackages);
router.post("/packages", authMiddleware, packageController.createPackages);
router.get("/packages/:id", packageController.getOnePackage);
router.put("/packages", authMiddleware, packageController.updatePackage);
router.delete("/packages/:id", authMiddleware, packageController.deletePackage);

router.get("/example-pack", packageController.getPackagesExample);

module.exports = router;
