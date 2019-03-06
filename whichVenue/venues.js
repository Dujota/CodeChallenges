var venues = [
  {
    address: '123 Main Street',
    city: 'Toronto',
    wheelchair_accessible: true,
    capacity: 100
  },
  {
    address: '567 Centre Street',
    city: 'Toronto',
    wheelchair_accessible: false,
    capacity: 400
  },
  {
    address: '9B Ontario Street',
    city: 'Montreal',
    wheelchair_accessible: true,
    capacity: 1000
  },
  {
    address: '56 Road Avenue',
    city: 'Ottawa',
    wheelchair_accessible: true,
    capacity: 650
  },
  {
    address: '938 Avenue Way East',
    city: 'Toronto',
    wheelchair_accessible: false,
    capacity: 90
  },
  {
    address: '34 Main Street West',
    city: 'London',
    wheelchair_accessible: false,
    capacity: 300
  },
  {
    address: '44 Quebec Road',
    city: 'Toronto',
    wheelchair_accessible: true,
    capacity: 200
  },
  {
    address: '10 Spruce Avenue Ouest',
    city: 'Montreal',
    wheelchair_accessible: false,
    capacity: 525
  }
];

console.log('venues', venues);
console.table(venues);

// for loop implementation
for (var i = 0; i < venues.length; i++) {
  var venue = venues[i];
  if (
    venue.city.toLowerCase() === 'toronto' &&
    venue.wheelchair_accessible === true &&
    venue.capacity > 149
  ) {
    console.log(venue);
  }
}

// Array helpers
function venueFilter(venue) {
  if (
    venue.city.toLowerCase() === 'toronto' &&
    venue.wheelchair_accessible === true &&
    venue.capacity > 149
  ) {
    return console.log(venue);
  }
}

// loops through the whole array and checks every element for a condition
venues.filter(venueFilter);

// loops through the array and breaks once it finds the 1st match of a condition
venues.find(venueFilter);
