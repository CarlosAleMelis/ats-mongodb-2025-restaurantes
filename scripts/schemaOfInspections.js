db.createCollection("inspections", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["certificate_number", "restaurant_id", "date", "result", "sector", "address"],
            properties: {
                certificate_number: {
                    description: "Number of the certificate",
                    type: "int"
                },
                restaurant_id: {
                    description: "Identifier of the restaurant document",
                    type: "objectId"
                },
                date: {
                    description: "Date of the inspection",
                    type: "date",
                },
                result: {
                    description: "Conclusions after the inspection",
                    type: "string",
                },
                sector: {
                    description: "Type of inspection",
                    type: "string",
                },
                address: {
                    bsonType: "object",
                    description: "Categoría del Nobel",
                    required: ["street", "city"],
                    properties: {
                        street: {
                            description: "Street where the restaurant is located",
                            type: "string"
                        },
                        city: {
                            description: "City where the restaurant is located",
                            type: "string"
                        },
                        postcode: {
                            description: "Postal code of the restaurant",
                            type: "string"
                        },
                    }
                }
            }
        }
    }
})