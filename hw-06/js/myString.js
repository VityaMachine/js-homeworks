class MyString {
    reverse(string) {
      return string.split("").reverse().join("");
    }
  
    ucFirst(string) {
      return string[0].toUpperCase() + string.slice(1);
    }
  
    ucWords(string) {
      const wordsArr = string.split(" ");
  
      const resArr = wordsArr.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      });
  
      return resArr.join(" ");
    }
  }

  
const myString = new MyString();
const strExample = "some javascript text example";


console.warn("Task 2 (MyString)");
console.log(myString.reverse(strExample));

console.log(myString.ucFirst(strExample));

console.log(myString.ucWords(strExample));
