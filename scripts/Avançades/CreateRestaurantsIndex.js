
use('ATS-PRAC');

db.getCollection('restaurants')
  .createIndex({type_of_food:1, rating: 1})