db.createCollection("restaurants", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "address", "url"],
            properties: {
                name: {
                    description: "Full name of the restaurant",
                    type: "string"
                },
                url: {
                    description: "URL of the website",
                    type: "string"
                },
                rating: {
                    description: "The score that the restaurant has",
                    type: "int",
                    enum: [ 1, 2, 3, 4, 5 ] 
                },
                type_of_food: {
                    description: "Type of food that the restaurant serves",
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