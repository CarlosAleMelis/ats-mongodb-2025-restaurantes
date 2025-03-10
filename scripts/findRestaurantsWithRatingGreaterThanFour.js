
use('ATS-PRAC');

db.getCollection('restaurants')
  .find(
    {
        rating: { $gt: 4 }
    }
  );
