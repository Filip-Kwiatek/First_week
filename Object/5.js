const object1 = { name: "Barack", surname: "Obama" };
const object2 = { name: "Michelle", surname: "Obama" };
const object3 = { name: "Donald", surname: "Trump" };

function groupFamilies(arr) {
  const output = { names: [], surnames: [] };
  for (const singleObject of arr) {
    for (const entry of Object.entries(singleObject)) {
      if (entry[0] === "name") {
        output.names.push(entry[1]);
      }
      if (entry[0] === "surname") {
        output.surnames.push(entry[1]);
      }
    }
  }
  return output;
}

console.log(groupFamilies([object1, object2, object3]));

//  console.log(object1.surname + ": " + object1.name + ", " + object2.name);
// console.log(object3.surname + ": " + object3.name);
