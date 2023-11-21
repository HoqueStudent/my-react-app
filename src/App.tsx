function App() {
  function currencyConverter(
    customersCurrency: string,
    currencyToExchangeTo: string,
    amountToExchange: number
  ) {
    // This is the exchange rate from GBP to USD
    const poundToDollar: number = 1.25;

    // This is the exchange rate from USD to GBP
    const dollarToPound: number = 0.8;

    /* Please begin writing your code below this comment */

    if (customersCurrency == "Pounds" && currencyToExchangeTo == "Dollars") {
      let sum: number = amountToExchange * poundToDollar;
      console.log(
        `Mark has exchanged £${amountToExchange} to $${sum.toFixed(2)}`
      );
    } else {
      let sum: number = amountToExchange * dollarToPound;
      console.log(
        `Mark has exchanged $${amountToExchange} to £${sum.toFixed(2)}`
      );
    }
  }

  // The values for the args have already been passed in for you.
  currencyConverter("Pounds", "Dollars", 156);
  currencyConverter("Dollars", "Pounds", 184);

  // created a function called currency converter which holds  3 args/params
  function currencyConverter1(
    customersCurrency1: string,
    currencyToExchangeTo1: string,
    amountToExchange1: number
  ) {
    const poundToDollar1: number = 1.25;

    const dollarToPound1: number = 0.8;
    // made an if statement to determine which currency the customer should receive and the amount
    if (customersCurrency1 == "pounds" && currencyToExchangeTo1 == "dollers") {
      let sum: number = amountToExchange1 * poundToDollar1;
      console.log(
        `sam has exchanged £${amountToExchange1} to $${sum.toFixed(2)}`
      );
      // created an else statment for the alternative scenario
    } else {
      let sum: number = amountToExchange1 * dollarToPound1;
      console.log(
        `sam has exchanged $${amountToExchange1} to £${sum.toFixed(2)}`
      );
    }
  }
  // passed in values for the args/params
  currencyConverter1("pounds", "dollers", 156);
  currencyConverter1("dollers", "pounds", 184);

  return <div>App</div>;
}
export default App;
