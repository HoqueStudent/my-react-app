function ForLoop() {
  let cars: string[] = [
    "Buggati",
    "Audi",
    "Lamborghini",
    "Farari",
    "BMW",
    "Hellcat",
  ];

  // FOR LOOP
  for (let c = 0; c < cars.length; c++) {
    console.log(`You have now selected the ${cars[c]}`);
  }

  let fruits: string[] = ["Dragon Fruit", "Pineapple", "Grape Fruit", "apple"];

  // FOR EACH LOOP
  fruits.forEach((fruit) => {
    console.log(`You have added ${fruit} in your shopping trolley`);
  });
  return <div>ForLoop</div>;
}

export default ForLoop;
