const comp = function(array1, array2) {
  if (!Array.isArray(array1)) {
    return false;
  }
   if (!Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  
  const temp1 = Array.from(array1).sort();
  const temp2 = Array.from(array2).sort();
  for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] **2 !== temp2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = comp;