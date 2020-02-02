exports.up = function(knex) {
  return knex.schema.createTable("user", user => {
    user.increments();

    user
      .string("email", 128)
      .notNullable()
      .unique();

    user.string("password", 128).notNullable();

    user.string("avatar_url", 1500);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user");
};
