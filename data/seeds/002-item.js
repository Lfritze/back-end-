exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item").insert([
        {
          name: "Beef",
          description:
            "Fresh, beef from grass fed - no hormones (price per lb)",
          photo_url:
            "https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          location: "Ibadan, Nigeria ",
          price: 4.75,
          user_id: 1
        },
        {
          name: "Shirt",
          description: "Beautiful shirt",
          photo_url:
            "https://images.unsplash.com/photo-1560412519-97f275053acb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          location: "Port-Gentil, Gabon ",
          price: 22.0,
          user_id: 2
        },
        {
          name: "Painting of Birds",
          description: "Local artist made a painting of birds",
          photo_url:
            "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80",
          location: "Port Novo, Benin ",
          price: 33.5,
          user_id: 3
        }
      ]);
    });
};
