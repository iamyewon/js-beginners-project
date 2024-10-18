// const filterArrTest = (arr) => {
//   return arr.reduce((acc, obj) => {
//     const existingShip = acc.find((item) => item.shipId === obj.shipId);

//     if (existingShip) {
//       existingShip.distance += obj.distance;
//       existingShip.fuelUsed += obj.fuelUsed;
//     } else {
//       acc.push({ ...obj });
//     }

//     return acc;
//   }, []);
// };

var x = 10;
let y = 20;

function outer() {
  var x = 30;
  let y = 40;

  if (true) {
    var x = 50;
    let y = 60;
    const z = 70;

    console.log(x);
    console.log(y);
    console.log(z);
  }

  console.log(x);
  console.log(y);
  // console.log(z);

  function inner() {
    var x = 80;
    console.log(x);
    console.log(y);
  }

  inner();
}

outer();

console.log("x > ", x);
console.log("y > ", y);

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterArrTest = (arr) => {
//   return arr.reduce((acc, obj) => {
//     const existingShip = arr.find((item) => {
//       console.log(item);

//       item > 3;
//     });

//     console.log(existingShip);

//     // if (existingShip) {
//     //   existingShip.distance += obj.distance;
//     //   existingShip.fuelUsed += obj.fuelUsed;
//     // } else {
//     //   acc.push({ ...obj });
//     // }

//     return acc;
//   }, []);
// };

// filterArrTest(newArr);
