const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", { title: 1, author: 1,url:1,user:1 });
  // const users = await User.find({}).populate("blogs");

  response.json(users.map((u) => u.toJSON()));
});

usersRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    console.log(body.password)
    if (body.password.length <= 3) {
      response
        .status(400)
        .send("Password lenght is not sufficient, use more than 3 characters.");
        return "yo"
        // it is important to return something, otherwise the code will be running for long and do the undesired run.
    }
console.log('after code is executing... shitt..')
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

module.exports = usersRouter;
