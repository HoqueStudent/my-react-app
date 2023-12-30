// Lesson 1

function DataTypes() {
  // Start writing your code below this line

  /*                                                        Numbers and strings                                                          */

  const num1: number = 10;
  const num2: number = 5;
  console.log(num1 + num2);

  let amount: number = 10;
  let price: number = 7.86;
  // console.log(
  //   `Ashley has purchased a cake for £${price} and she paid £${amount}, the remaining change is £${(
  //     amount - price
  //   ).toFixed(2)}`
  // );

  /*                                                        Booleans                                                          */

  let person1: string = "Mike";
  let lightSwitch: boolean = false;
  // console.log(
  //   `${person1} has entered the office and turned the lights ${lightSwitch}.`
  // );

  /*                                                        Functions                                                          */

  // Function declaration - with args
  function addition(num3: number, num4: number) {
    // A sum variable which adds 2 numbers - These 2 numbers are provided when the function is called
    const sum: number = num3 + num4;

    console.log(sum);
  }

  // Final step is to call the function to ensure its execution - with values provided as args
  // addition(20, 6);

  // Function declaration - no args
  function subtraction() {
    const a: number = 15;
    const b: number = 15;

    // A sum variable which adds 2 numbers - These 2 numbers are provided within the function body/scope
    const sum: number = a - b;

    // log the result to the console
    console.log(sum);
  }

  // Final step is to call the function to ensure its execution - with no values required to pass in as args
  // subtraction();

  // calc is the name of the function which holds three args/params
  function calc(a: number, b: number, c: number) {
    // a sum var which multiplies 2 nums then adds 1 num to it
    const sum: number = a * b + c;
    // console. log the sum amount
    console.log(sum);
  }
  // passing in values to the args/params
  // calc(2, 12, 6);

  /*                                                        IF Statements                                                          */

  // made a function called weatherForcast
  function weatherForcast(temp: number) {
    // created an if statment to see if the temp is greater than 20
    if (temp > 20) {
      console.log("Perfect weather for the beach today!");
      // created an else statment if the temp is less than 20
    } else {
      console.log("Today is not ideal for a beach trip");
    }
  }

  // weatherForcast(25);

  function starWars() {
    let isLightSaberActive: boolean = false;

    if (isLightSaberActive) {
      isLightSaberActive = true;
      console.log("My Light Saber is ready to strike!");
      console.log(`isLightSaberActive = ${isLightSaberActive}`); // should be true
    } else {
      console.log("Prepare to die Darth Vader");
      isLightSaberActive = false;
      console.log(`isLightSaberActive = ${isLightSaberActive}`); // should be false
    }
  }

  // Call the function
  // starWars();

  return <div>App</div>;
}

export default DataTypes;
