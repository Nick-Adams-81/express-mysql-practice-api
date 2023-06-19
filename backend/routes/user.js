const prisma = require("./client");
const router = require("express").Router();

router.get("/user", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/new-user", async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await prisma.user.create({
      data: data,
    });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
