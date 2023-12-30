// Lesson 3

function ElseIF() {
  let name = prompt("Please enter your name");
  let age = Number(prompt("Please enter your age"));

  if (name == "niaj") {
    console.log(`Welcome ${name}, you are ${age} years old.`);
  } else if (name == "yusuf") {
    console.log(`Welcome ${name}, you are ${age} years old.`);
  } else if (name == "maryam") {
    console.log(`Welcome ${name}, you are ${age} years old.`);
  } else if (name == "muadh") {
    console.log(`Welcome ${name}, you are ${age} years old.`);
  } else {
    console.log("I don't recognise your name");
  }
  return <div>ElseIF</div>;
}

export default ElseIF;
