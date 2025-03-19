use('ATS-PRAC');

db.getCollection('restaurants')
  .find(
    {
        type_of_food: "Chinese"
    },
  );
