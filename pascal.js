// pascalTri(i: integer): array[]
// Creates Pascals Triangle
function pascalTri(i) {
  if (i < 0) { // valid input check
    console.log("Invalid argument.");
    return [];
  }
  display(i);
}

// pascal(arr: array[], stop: integer): array[]
// Generates values from Pascals Triangle
function pascal(arr, stop) {
  
  if (arr.length === stop) { // base case
    return arr;
  }

  let tri = []; // stores new values from previous array
    for (let i=0; i < arr.length+1; ++i) {
      if (i === 0 || i === arr.length) {
        tri.push(1); // first and last index values are always 1
      } else {
        tri.push(arr[i-1]+arr[i]); // adding subsequent values
      }
    }

  return pascal(tri, stop); // recursivly adding
}

// display(stop: integer)
// Prints the Pascal Triangle
function display(stop) {
  for (let i=1; i < stop+1; ++i) {
    console.log(pascal([],i)); // printing to console
  }
}

test("succesfully creates pascals triangle", function() {
  let arr = pascal([], 4);
  assert(arr[0] === 1);
  assert(arr[1] === 3);
  assert(arr[2] === 3);
  assert(arr[3] === 1);
  display(4);
});

test("succesfully creates pascals more complex triangle", function() {
  let arr = pascal([], 15);
  assert(arr[0] === 1);
  assert(arr[1] === 14);
  assert(arr[2] === 91);
  assert(arr[3] === 364);
  assert(arr[4] === 1001);
  assert(arr[5] === 2002);
  assert(arr[6] === 3003);
  assert(arr[7] === 3432);
  assert(arr[8] === 3003);
  assert(arr[9] === 2002);
  assert(arr[10] === 1001);
  assert(arr[11] === 364);
  assert(arr[12] === 91);
  assert(arr[13] === 14);
  assert(arr[14] === 1);
});