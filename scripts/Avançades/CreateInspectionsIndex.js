
use('ATS-PRAC');

db.getCollection('inspections')
  .createIndex({result:1})