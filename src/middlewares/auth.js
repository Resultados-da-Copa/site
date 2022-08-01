import { sign } from 'jsonwebtoken';

const auth = (req, res) => {
  const { user, password } = req.body;

  const token = sign ( {
    user, password, age: 15,
  }, process.env.JWT_SALT, {
    expiresIm: 120,
  });

  res.json({
    token,
  });
};


module.exports = authSite;