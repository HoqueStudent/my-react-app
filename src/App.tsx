function App() {
  // created a function called currecyConverter.
  function currencyConverter() {
    // created variables that hold currency rate values
    const poundToDollar: number = 1.25;
    const dollarToPound: number = 0.8;
    const poundsToJunayha: number = 39;
    const dollarToJunayha: number = 31;

    // created variables to extract vslues f.
    let currentCurrency = prompt("What currency do you currently have?");
    let currencyToExchangeTo = prompt(
      "What currency would you like to exchange to?"
    );
    let amountToConvert = Number(prompt("How much would you like to exchange"));

    // created a few if statment to determine which currency the customer would like to exchange and how much
    if (currentCurrency == "GBP" && currencyToExchangeTo == "USD") {
      let sum: number = poundToDollar * amountToConvert;
      console.log(
        `The customer has exchanged ${amountToConvert} GBP for ${sum} USD `
      );
    } else if (currentCurrency == "USD" && currencyToExchangeTo == "GBP") {
      let sum: number = dollarToPound * amountToConvert;
      console.log(
        `The customer has exchanged ${amountToConvert} USD for ${sum} GBP`
      );
    } else if (currentCurrency == "GBP" && currencyToExchangeTo == "EGP") {
      let sum: number = poundsToJunayha * amountToConvert;
      console.log(
        `The customer has exchanged ${amountToConvert} GBP for ${sum} EGP `
      );
    } else if (currentCurrency == "USD" && currencyToExchangeTo == "EGP") {
      let sum: number = dollarToJunayha * amountToConvert;
      console.log(
        `The customer has exchanged ${amountToConvert} USD for ${sum} EGP`
      );
    } else {
      console.log(`sorry. your request is invalid`);
    }
  }
  // called the function
  currencyConverter();
  return <div>App</div>;
}
export default App;
