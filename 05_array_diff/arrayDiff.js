
function arrayDiff(a, b) {
  console.log('I exist');
  let same = [];
/*   for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      console.log('here');
      if (a[i] === b[j]) {
        same.push(a[i]);
      }
    }
  } */
  a.forEach(itemA => {
    b.forEach(itemB => {
      console.log('haha');
      if (itemA === itemB) {
        same.push(itemA);
      }
    })
  })

  same = removeDuplicates(same);
  console.log(same);
  a = a.filter(item => {
    return !same.includes(item);
  })
  b = b.filter(item => {
    return !same.includes(item);
  })
  const result = a.concat(b);
  console.log(result);
  return result;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


module.exports = arrayDiff;