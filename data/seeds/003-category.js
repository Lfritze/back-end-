exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        { type: "Food", item_id: 3 },
        { type: "Clothing", item_id: 2 },
        { type: "Decor", item_id: 1 }
      ]);
    });
};
