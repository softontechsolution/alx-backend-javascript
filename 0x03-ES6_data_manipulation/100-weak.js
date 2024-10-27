// Create a const instance of WeakMap named weakMap.
const weakMap = new WeakMap();

// Function to simulate an API query
// and track the number of queries for each endpoint.
function queryAPI(endpoint) {
  // Get the current count of queries
  // for the specified endpoint or default to 0.
  const count = weakMap.get(endpoint) || 0;

  // Check if the count of queries is greater than or equal to 4 (threshold).
  if (count >= 4) {
    // If the threshold is reached, throw an error indicating high endpoint load.
    throw new Error('Endpoint load is high');
  }

  // Increment the count of queries for the specified endpoint.
  weakMap.set(endpoint, count + 1);
}

// Export the queryAPI function and the weakMap constant.
export { queryAPI, weakMap };
