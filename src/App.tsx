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
  }

  // The values for the args have already been passed in for you.
  currencyConverter('Pounds', 'Dollars', 156)
  currencyConverter('Dollars', 'Pounds', 184)

  return <div>App</div>;
}

export default App;