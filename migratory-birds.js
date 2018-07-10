'use strict';

// Complete the migratoryBirds function below.
function migratoryBirds(ar) {
  const sightings = [0, 0, 0, 0, 0];

  for (const a of ar) {
    sightings[a - 1] += 1;
  }

  let maxId = 0;
  for (let i = 1; i < sightings.length; i++) {
    const sighting = sightings[i];
    if (sighting > sightings[maxId]) {
      maxId = i;
    }
  }

  return maxId + 1;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
