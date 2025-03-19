use('ATS-PRAC');

db.getCollection('inspections')
  .find(
    {
        result: "Violation Issued"
    },
    {
        _id: 1,
        certificate_number: 1,
        business_name: 1,
        date: { $dateFromString: { dateString: "$date" } },
        result: 1,
        sector: 1,
        address: 1,
        restaurant_id: 1,
    }
  )
  .sort({
    date: 1
  });
