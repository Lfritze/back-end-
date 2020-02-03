const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("user")
    .del()
    .then(function() {
      const hash = bcrypt.hashSync("password", 10);

      return knex("user").insert([
        {
          email: "CEO@email.com",
          password: hash,
          avatar_url:
            "https://images.unsplash.com/photo-1506890533526-95e6102ad03d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          email: "CFO@email.com",
          password: hash,
          avatar_url:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          email: "Manager@email.com",
          password: hash,
          avatar_url:
            "https://images.unsplash.com/photo-1580385537175-37f81495ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
      ]);
    });
};
