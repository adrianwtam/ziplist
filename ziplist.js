const testArr1 = ['a', 'b', 'c'];
const testArr2 = ['1', '2', '3'];

function zipList(arr1, arr2) {
  let storeArr = [];
  for (let i = 0; i < arr1.length; i++) {
    storeArr.push(arr1[i], arr2[i]);
  }
  return storeArr;
}
console.log('Regular zipList test');
console.log(zipList(testArr1, testArr2));
// underscore function

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log('Underscore zipList test');
console.log(zipListTheSimpleWay(testArr1, testArr2));
