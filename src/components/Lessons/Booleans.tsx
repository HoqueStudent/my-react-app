// Lesson 7

function Booleans() {
  // Created a function called (themeParkAdmision) which takes in three args/params.
  function themeParkAdmission(
    name: string,
    age: number,
    isGuardianPresent: boolean
  ) {
    // If the name is not null and age is greater or == 18 and the guardian is false, print out the statment below.
    if (name && age >= 18 && !isGuardianPresent) {
      console.log(
        `Hello ${name}, you are ${age} years old and therefore, do not require a guardian to board this ride.`
      );

      // If the name is not null and age is less than 18 and the guardian is true, print out the statment below.
    } else if (name && age < 18 && isGuardianPresent) {
      console.log(
        `Hello ${name}, you are ${age} years old and have a guardian present, therefore, you are permitted to board this ride.`
      );

      // If the name is not null and age is less than 18 and the guardian is false, print out the statment below.
    } else if (name && age < 18 && !isGuardianPresent) {
      console.log(
        `Hello ${name}, you are ${age} years old and do not have a guardian present, therefore, you are not permitted to board this ride.`
      );

      // If none of the above conditions are met, print the statment below.
    } else {
      console.log("Sorry, invalid request.");
    }
  }

  // Called the function 4 times and assigned it different values to trigger each IF statment.
  themeParkAdmission("Ashley", 25, false);
  themeParkAdmission("Mike", 18, false);
  themeParkAdmission("Luke", 17, true);
  themeParkAdmission("John", 17, false);

  return <div>Booleans</div>;
}

export default Booleans;

/* Task:

  1. Create a function called 'themeParkAdmission' which takes in 3 arguments
  2. The 3 args are: name (string), age (number), isGuardianPresent (boolean)
  3. Using conditional programming, write the code for the following problem:
    a) If the value for the name property is provided
    b) If the value for the age property is greater than or equal to 18
    c) If the value for the isGuardianPresent property is false
    d) Print the following statement:
    e) 'Hello <name>, you are <age> years old and therefore, do not require a guardian to board this ride.'
    
    4. 
      a) If the value for the name property is provided
      b) If the value for the age property is less than 18
      c) If the value for the isGuardianPresent property is true
      d) Print the following statement:
      e) 'Hello <name>, you are <age> years old and have a guardian present, therefore, you are permitted to board this ride.'

    5. 
      a) If the value for the name property is provided
      b) If the value for the age property is less than 18
      c) If the value for the isGuardianPresent property is false
      d) Print the following statement:
      e) 'Hello <name>, you are <age> years old and do not have a guardian present, therefore, you are not permitted to board this ride.'

    6. Otherwise, print: 'Sorry, Invalid request.'
      
*/
