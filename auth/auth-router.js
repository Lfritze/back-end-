const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");

router.post("/register", validateUserContent, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.addNewUser(user)
    .then(new_user => {
      const token = generateToken(new_user);
      delete new_user.password;
      res.status(201).json({ new_user, token });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/login", validateUserContent, (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        delete user.password;
        res.status(200).json({
          user,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Email or Password" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.get("/logout", (req, res) => {
//   if (req.session) {
//     req.session.destroy(err => {
//       if (err) {
//         res.status(500).json({
//           you: "can checkout any time you like, but you can never leave!"
//         });
//       } else {
//         res.status(200).json({ bye: "thanks for playing" });
//       }
//     });
//   } else {
//     res.status(204);
//   }
// });

// ---------------------- TOKEN TOKEN TOKEN ---------------------- //

function generateToken(user) {
  const payload = {
    id: user.id, // standard claim = sub
    email: user.email
  };
  const options = {
    expiresIn: "2d"
  };
  return jwt.sign(payload, process.env.SECRET || "testing token", options);
}

// ---------------------- Custom Middleware ---------------------- //

function validateUserContent(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: "Email & password fields are required." });
  } else {
    next();
  }
}

module.exports = router;
