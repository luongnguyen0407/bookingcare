const db = require("../src/models/index");

const getUser = async (req, res) => {
  try {
    const data = await db.User.findAll();
    console.log(data);
    res.send(JSON.stringify(data));
  } catch (error) {}
};

module.exports = {
  getUser,
};
