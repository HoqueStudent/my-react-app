function ModulusOperator() {
  let userInput = Number(prompt("Please enter a number"));

  if (userInput % 7 == 0 && userInput % 11 == 0) {
    console.log(`${userInput} is divisible by both 7 and 11`);
  } else if (userInput % 7 == 0) {
    console.log(`${userInput} is divisible by 7`);
  } else if (userInput % 11 == 0) {
    console.log(`${userInput} is divisible by 11`);
  } else if (userInput % 7 != 0 && userInput % 11 != 0) {
    console.log(`${userInput} is not divisible by neither 7 nor 11`);
  } else {
    console.log("Could not process your request.");
  }
  return <div>ModulusOperator</div>;
}

export default ModulusOperator;
