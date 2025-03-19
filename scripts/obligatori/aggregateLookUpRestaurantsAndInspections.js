
use("ATS-PRAC");

db.getCollection("inspections")
  .updateMany({}, [
    { $set: { restaurant_id: { $toObjectId: "$restaurant_id" } } }
  ])

db.getCollection('restaurants')
  .aggregate([
    {
      $lookup: {
        from: "inspections",
        localField: "_id",
        foreignField: "restaurant_id",
        as: "inspection_history"
      }
    }
  ])