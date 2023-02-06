const Local = require("../models/Locals");
const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user == (await Local.findOne({ id }).select("id"));
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not Authorized" });
  }
};

module.exports = requireAuth;
