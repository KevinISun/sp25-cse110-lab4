let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// Iterate through each property (key) in the statistics object
for (const property in statistics) {
    // Get the value associated with the current property
    const value = statistics[property];

    // Check if the property name starts with 'r' OR if the value is odd
    if (property.startsWith('r') || value % 2 !== 0) {
        // If either condition is true, print the value
        console.log(value);
    }
}