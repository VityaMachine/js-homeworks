function filterBy(arr, dataType) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Wrong first argument (Must be array with length > 0)");
  }

  if (typeof dataType !== "string") {
    throw new Error("Wrong second argument, dataType must be a string");
  }

  const newArr = arr.filter((el) => typeof el !== dataType);

  return newArr;
}

const exArr = ["hello", "world", 23, "23", null];

console.log(filterBy(exArr, "string"));
