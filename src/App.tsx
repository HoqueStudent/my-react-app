function App() {
  // Begin the task below this comment
  // created vars and asigned values to it
  let side1: number = 20;
  let side2: number = 15;
  let side3: number = 20;
  let side4: number = 15;

  let angle1: number = 70;
  let angle2: number = 120;
  let angle3: number = 70;
  let angle4: number = 120;
  //  created if statments to determine which shape to print out
  if (
    side1 == 15 &&
    side2 == 15 &&
    side3 == 15 &&
    side4 == 15 &&
    angle1 == 90 &&
    angle2 == 90 &&
    angle3 == 90 &&
    angle4 == 90
  ) {
    console.log(`The shape you have selected is a Square.`);
  } else if (
    side1 == 30 &&
    side2 == 15 &&
    side3 == 30 &&
    side4 == 15 &&
    angle1 == 90 &&
    angle2 == 90 &&
    angle3 == 90 &&
    angle4 == 90
  ) {
    console.log(`The shape you have selected is a Rectangle.`);
  } else if (
    side1 == 10 &&
    side2 == 10 &&
    side3 == 10 &&
    side4 == 10 &&
    angle1 == 75 &&
    angle2 == 110 &&
    angle3 == 75 &&
    angle4 == 110
  ) {
    console.log(`The shape you have selected is a Rhombus.`);
  } else if (
    side1 == 20 &&
    side2 == 15 &&
    side3 == 20 &&
    side4 == 15 &&
    angle1 == 70 &&
    angle2 == 120 &&
    angle3 == 70 &&
    angle4 == 120
  ) {
    console.log(`The shape you have selected is a Parallelogram.`);
    // created an else so if non of the other if statments are true ,it will print out the statment below
  } else {
    console.log(`The shape you have selected was not found.`);
  }

  return <div>App</div>;
}

export default App;
