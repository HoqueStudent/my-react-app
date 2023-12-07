function CapstoneProject1() {
  // Created vars that takes data from the user
  let currentMetric = prompt(
    "In which Metric is the temp you are converting?  C - Celsius,  F - Fahrenheit,  K - Kelvin"
  );
  let temp = Number(prompt("Please input the number you want to convert."));
  let metricToConvertTo = prompt(
    "To which Metric would you like to convert the temp?  C - Celsius,  F - Fahrenheit,  K - Kelvin"
  );

  // created a function which converts F to C
  function fahrenheitToCelsius() {
    let sum: number = ((temp - 32) * 5) / 9;
    if (currentMetric == "F" && metricToConvertTo == "C") {
      console.log(`${temp}F is ${sum.toFixed(2)}C`);
    }
  }

  fahrenheitToCelsius();

  // created a function which converts F to K
  function fahrenheitToKelvin() {
    let sum: number = ((temp + 459.67) * 5) / 9;
    if (currentMetric == "F" && metricToConvertTo == "K") {
      console.log(`${temp}F is ${sum.toFixed(2)} K`);
    }
  }

  fahrenheitToKelvin();

  // created a function which converts C to F
  function celsiusToFahrenheit() {
    let sum: number = (temp * 9) / 5 + 32;
    if (currentMetric == "C" && metricToConvertTo == "F") {
      console.log(`${temp} C is ${sum.toFixed(2)} F`);
    }
  }

  celsiusToFahrenheit();

  // created a function which converts C to K
  function celsiusToKelvin() {
    let sum: number = temp + 273.15;
    console.log(`${temp} C is ${sum.toFixed(2)} K`);
  }

  celsiusToKelvin();

  // created a function which converts K to F
  function kelvinToFahrenheit() {
    let sum: number = (temp * 9) / 5 - 459.67;
    if (currentMetric == "K" && metricToConvertTo == "F") {
      console.log(`${temp} K is ${sum.toFixed(2)} F`);
    }
  }

  kelvinToFahrenheit();

  // created a function which converts K to C
  function kelvinToCelcius() {
    let sum: number = temp - 273.15;
    if (currentMetric == "K" && metricToConvertTo == "C") {
      console.log(`${temp} K is ${sum.toFixed(2)} C`);
    }
  }

  kelvinToCelcius();

  return <div>CapstoneProject1</div>;
}

export default CapstoneProject1;
