const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  const hash = await bcrypt.hash(password, 10);

  const result = await db.signup([username, hash]).catch(err => {
    res.status(400).json({ error: "username already exist" });
  });
  req.session = { username: result.username };
  res.json(result);
};

module.exports = {
  signup
};
