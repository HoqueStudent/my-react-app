function NumericalOperators() {
  /* 
  Below there are functions for each numerical operator we went over, some of these functions have variables already created for you,
  and other functions are using arguments instead of variables

  You cannot change this structure for any function, you have to make use of the variable/argument which has been created for each function

  There are a couple of functions which have most of the code written, but I made mistakes intentionally so that you have to find the error and fix it yourself.
*/

  function lessThan() {
    const totalUsers: number = 20;

    /* TASK:
    If there are less than 20 users, print 'Not enough users'
    else, print 'We have enough users for our new service;
    */

    if (totalUsers < 20) {
      console.log(`Not enough users`);
    } else {
      console.log(`We have enough users for our new service`);
    }
  }
  lessThan();

  function greaterThan(age: number) {
    /* TASK: 
    If the 'age' is greater than 8, print 'this person will need to reserve a seat'
    else, print 'This person will share a seat with its parent'
    */

    if (age > 8) {
      console.log(`This person will need to reserve a seat`);
    } else {
      console.log(`This person will share a seat with their parent`);
    }
  }

  greaterThan(10);

  function lessOrEqual() {
    const numOfPassengers: number = 164;

    /* TASK:
    If there is 150 or less passengers on the plane, print 'We are ready for take off'
    else, print 'we have too many passengers on board, please unload some passengers'
  */

    if (numOfPassengers <= 150) {
      console.log("We are raedy for take off");
    } else {
      console.log(
        "we have too many passengers on board, please unload some passengers"
      );
    }
  }
  lessOrEqual();

  function greaterOrEqual(players: number) {
    /* TASK:
    If there are 2 or more players, print 'we are ready to start the game'
    else, print 'Not enough players, please invite more players to the game to begin'
  */
    if (players >= 2) {
      console.log("We are ready to start the game");
    } else {
      console.log(
        "Not enough players, please invite more players to the game to begin"
      );
    }
  }

  greaterOrEqual(3);

  function doubleEqual() {
    const myPokemon: string = "Pickachu";

    /* TASK:
    If the value of 'myPokemon' is 'Pikachu', print 'Pikachu, do ThunderBolt!'
    else, print 'I would like to catch a pokemon' 
  */
    if (myPokemon == "Pickachu") {
      console.log("Pickachu, do THUNDER BOLT");
    } else {
      console.log("I would like to catch a pokemon");
    }
  }
  doubleEqual();

  function tripleEqual(numOfGoalsConceded: number) {
    /* TASK:
    Debug this function to find the error and fix the code to display one of the statements below 
  */

    if (numOfGoalsConceded === 0) {
      console.log("You have a clean sheet");
    } else {
      console.log("You have lost your cleen sheet bonus");
    }
  }
  tripleEqual(0);

  // -----------------------------------------------------------------
  function notEqual() {
    /* TASK:
    Debug this function to find the error and fix the code to display the second statement below
    */
    const customerOrder: string = "Coffee and Biscuits";

    if (customerOrder != "Coffee and Biscuits") {
      console.log("Sorry, I couldn't understand your order.");
    } else {
      console.log(`Your ${customerOrder} is ready sir.`);
    }
  }

  notEqual();
  // -----------------------------------------------------------------

  function doubleNotEqual() {
    /* TASK:
      Find the issue below and fix the code to display either of the statements below
    */
    const numOfGoals: number = 3;

    if (numOfGoals !== 3) {
      console.log("You do not have a hattrick.");
    } else {
      console.log("Congratulations, you have a hattrick.");
    }
  }
  doubleNotEqual();

  function doubleAnd() {
    const weather: string = "Snowy";
    const roadConditions: string = "Slippery";

    /* TASK:
    If the weather is snowy and the road conditions is slippery, print 'Outdoor conditions are unsafe for driving to work
    else, print 'It is safe to drive to work but be careful on the road'
    */
    if (weather == "Snowy" && roadConditions == "Slippery") {
      console.log("Outdoor conditions are unsafe for driving to work");
    } else {
      console.log("It is safe to drive to work but be careful on the road");
    }
  }

  doubleAnd();

  function or(nextChild: string) {
    /* TASK:
    If the value of 'nextChild' is 'underage' or 'too short', print 'This child is not allowed to ride the roller coaster'
    else, print 'This child can board the roller coaster
    */
    if (nextChild == "underage" || nextChild == "too short") {
      console.log("This child is not allowed to ride the roller coaster");
    } else {
      console.log("This child can board the roller coaster");
    }
  }

  or("overage");
  return <div>NumericalOperators</div>;
}

export default NumericalOperators;
