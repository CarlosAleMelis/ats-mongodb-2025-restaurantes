
use("ATS-PRAC");

db.getCollection("inspections")
    .aggregate([{
        $group: {
            _id: "$result",
            count: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: null,
            total: { $sum: "$count" },
            results: { $push: { result: "$_id", count: "$count" } }
        }
    },
    {
        $unwind: "$results"
    },
    {
        $project: {
            _id: 0,
            type: "$results.result",
            count: "$results.count",
            percentage: { $multiply: [{ $divide: ["$results.count", "$total"] }, 100] }
        }
    }]);
