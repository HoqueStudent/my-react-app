// Lesson 6

function SwitchStatement() {
  /* 
    Description: A Switch Statement (switch/case) is similar to an if statement where it is used for conditional programming, the structure of a Switch 
    Statement allows multiple conditions to be evaluated with a much more efficient and structured layout than using many else if statements.
  */

  const currentDay: string = "Sunday";

  switch (currentDay) {
    case "Monday":
      console.log("Today is Monday Madness");
      break;

    case "Tuesday":
      console.log("Today is Terrific Tuesday");
      break;

    case "Wednesday":
      console.log("Today is Weird Wednesday");
      break;

    case "Thursday":
      console.log("Today is Tiresome Thursday");
      break;

    case "Friday":
      console.log("Today is Freaky Friday");
      break;

    case "Saturday":
      console.log("Today is Sunny Saturday");
      break;

    case "Sunday":
      console.log("Today is Sleepy Sunday");
      break;

    default:
      break;
  }
  return <div>SwitchStatement</div>;
}

export default SwitchStatement;
